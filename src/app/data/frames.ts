/**
 * Images des cadres du salon. Déposer les fichiers dans `public/` puis indiquer leur chemin ici
 * (ex. `'cadres/bureau-1.jpg'`). `null` = illustration dessinée par défaut.
 * Chaque image est recadrée automatiquement pour remplir son cadre.
 */
export const FRAME_IMAGES = {
  /** Cinq cadres au-dessus du bureau, de gauche à droite (le 5ᵉ est le petit en haut). */
  desk: [null, null, null, null, null] as (string | null)[],
  /** Six affiches au-dessus de la TV, de gauche à droite. */
  tv: [null, null, null, null, null, null] as (string | null)[],
};
