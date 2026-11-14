"""
Remplissage des zones vides d'un atlas de lumière (« push-pull ») : chaque texel vide prend la couleur
des îlots voisins. Sans ça, le fond noir de l'atlas déborde sur les bords des surfaces (filtrage,
mipmaps) et laisse des traces sombres.

Utilisé par bake.py ; peut aussi s'appliquer à un atlas déjà produit :
    python tools/bake/fill.py public/room/light-day.webp
"""

import sys

import numpy as np


def push_pull(px: np.ndarray, mask: np.ndarray) -> np.ndarray:
    """px : (H, W, C) ; mask : (H, W) booléen, vrai là où le texel est cuit."""
    levels = [(px * mask[..., None], mask.astype(np.float32))]
    while min(levels[-1][1].shape) > 1:
        c, w = levels[-1]
        h2, w2 = c.shape[0] // 2, c.shape[1] // 2
        c = c[: h2 * 2, : w2 * 2].reshape(h2, 2, w2, 2, -1).sum((1, 3))
        w = w[: h2 * 2, : w2 * 2].reshape(h2, 2, w2, 2).sum((1, 3))
        levels.append((c, w))
    # couleur moyenne pondérée à chaque niveau, puis on remonte en ne remplissant que les trous
    filled = levels[-1][0] / np.maximum(levels[-1][1], 1e-6)[..., None]
    for c, w in reversed(levels[:-1]):
        up = np.repeat(np.repeat(filled, 2, 0), 2, 1)
        up = np.pad(up, ((0, c.shape[0] - up.shape[0]), (0, c.shape[1] - up.shape[1]), (0, 0)), mode='edge')
        mean = c / np.maximum(w, 1e-6)[..., None]
        have = (w > 0)[..., None]
        filled = np.where(have, mean, up)
    out = px.copy()
    out[~mask] = filled[~mask]
    return out


if __name__ == '__main__':
    from PIL import Image

    for path in sys.argv[1:]:
        img = np.asarray(Image.open(path).convert('RGB')).astype(np.float32)
        mask = img.max(2) > 2  # texels cuits (le fond est noir)
        Image.fromarray(np.clip(push_pull(img, mask) + 0.5, 0, 255).astype(np.uint8)).save(path, quality=88, method=6)
        print('rempli', path, f'{(~mask).mean() * 100:.0f} % de texels vides')
