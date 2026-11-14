/**
 * Images des cadres du salon. Déposer les fichiers dans `public/` puis indiquer leur chemin ici
 * (ex. `'cadres/bureau-1.jpg'`). `null` = illustration dessinée par défaut.
 * Chaque image est recadrée automatiquement pour remplir son cadre.
 */
export const FRAME_IMAGES = {
  /** Cinq cadres au-dessus du bureau, de gauche à droite (le 5ᵉ est le petit en haut). */
  desk: [
    'cadres/bureau-1.webp',
    'cadres/bureau-2.webp',
    'cadres/bureau-3.webp',
    'cadres/bureau-4.webp',
    'cadres/bureau-5.webp',
  ] as (string | null)[],
  /**
   * Six affiches au-dessus de la TV, de gauche à droite vues depuis la pièce
   * (affiches Ghibli minimalistes de Sylvan Design, format 2:3, recadrées au ras du dessin).
   */
  tv: [
    'cadres/tv-1-mononoke.webp',
    'cadres/tv-2-kiki.webp',
    'cadres/tv-3-chihiro.webp',
    'cadres/tv-4-howl.webp',
    'cadres/tv-5-totoro.webp',
    'cadres/tv-6-ponyo.webp',
  ] as (string | null)[],
};
