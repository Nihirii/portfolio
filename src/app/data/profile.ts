import { Profile } from './types';

export const PROFILE: Profile = {
  name: 'Léna Simonin',
  role: 'Ingénieure logiciel',
  city: 'Lyon',
  // Renseigner le pseudo GitHub pour afficher le bouton « GitHub » et les liens de dépôts.
  githubUsername: 'Nihirii',
  // Déposer la version publique du CV à cet emplacement : public/cv/lena-simonin-cv.pdf
  cvPdfPath: 'cv/lena-simonin-cv.pdf',
  cvDownloadName: 'CV-Lena-Simonin.pdf',
  // Déposer l'avatar ici : public/me/lena-avatar.jpg
  avatarPath: 'me/lena-avatar.jpg',
  likes: [
    { icon: '🎮', label: 'Jeux vidéo' },
    { icon: '🪛', label: 'Démonter des consoles' },
    { icon: '👾', label: 'Consoles rétro' },
    { icon: '🐱', label: 'Hiki, ma chatte' },
    { icon: '💻', label: 'Le dev' },
    { icon: '🪼', label: 'Les méduses' },
  ],
};

export function githubProfileUrl(profile: Profile = PROFILE): string | null {
  return profile.githubUsername ? `https://github.com/${profile.githubUsername}` : null;
}

/** Construit l'URL d'un dépôt à partir de son nom, si le pseudo GitHub est renseigné. */
export function repoUrl(repoName: string, profile: Profile = PROFILE): string | null {
  return profile.githubUsername ? `https://github.com/${profile.githubUsername}/${repoName}` : null;
}
