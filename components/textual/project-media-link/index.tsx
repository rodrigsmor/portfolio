import Link from 'next/link';
import Image from 'next/image';
import styles from './project-media-link.module.css';
import { Platform, ProjectLink } from '@/types/project'

import FigmaLogo from '@/assets/logos/Figma.svg';
import PlayStoreLogo from '@/assets/logos/GooglePlayStore.svg';
import AppStoreLogo from '@/assets/logos/AppleAppStore.svg';
import BehanceLogo from '@/assets/logos/Behance.svg';
import GitHubLogo from '@/assets/logos/Github.svg';

type MediaContent = {
  [key in Platform]: {
    Icon: string;
    label: string;
  }
}

interface ProjectMediaLinkProps {
  link: ProjectLink;
}

export function ProjectMediaLink({ link }: ProjectMediaLinkProps) {
  const icons: MediaContent = {
    [Platform.PLAYSTORE]: {
      Icon: PlayStoreLogo,
      label: 'Google Play Store'
    },
    [Platform.APPLESTORE]: {
      Icon: AppStoreLogo,
      label: 'Apple Store'
    },
    [Platform.BEHANCE]: {
      Icon: BehanceLogo,
      label: 'Behance'
    },
    [Platform.FIGMA]: {
      Icon: FigmaLogo,
      label: 'Figma'
    },
    [Platform.GITHUB]: {
      Icon: GitHubLogo,
      label: 'Github'
    },
    [Platform.WEB]: {
      Icon: '',
      label: ''
    }
  }

  const linkContent = icons[link.platform];

  return (
    <Link
      href={link.url}
      title={linkContent.label}
      aria-label={linkContent.label}
      className={styles.projectLinkContainer}
    >
      <Image
        alt={link.label ?? ''}
        src={linkContent.Icon}
        width={24}
        height={24}
        loading="lazy"
      />
    </Link>
  )
}