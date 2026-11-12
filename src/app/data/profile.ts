import { Profile } from './types';

export const PROFILE: Profile = {
  name: 'Léna Simonin',
  role: 'Développeuse front-end',
  city: 'Lyon',
  // Renseigner le pseudo GitHub pour afficher le bouton « GitHub » et les liens de dépôts.
  githubUsername: '',
  // Déposer la version publique du CV à cet emplacement : public/cv/lena-simonin-cv.pdf
  cvPdfPath: 'cv/lena-simonin-cv.pdf',
  cvDownloadName: 'CV-Lena-Simonin.pdf',
};

export function githubProfileUrl(profile: Profile = PROFILE): string | null {
  return profile.githubUsername ? `https://github.com/${profile.githubUsername}` : null;
}

/** Construit l'URL d'un dépôt à partir de son nom, si le pseudo GitHub est renseigné. */
export function repoUrl(repoName: string, profile: Profile = PROFILE): string | null {
  return profile.githubUsername ? `https://github.com/${profile.githubUsername}/${repoName}` : null;
}
