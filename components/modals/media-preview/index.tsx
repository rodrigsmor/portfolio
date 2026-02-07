import { ImgHTMLAttributes, useEffect } from 'react';
import styles from './media-preview.module.css';
import { useProject } from '@/hooks/useProject';
import Image from 'next/image';
import { IconButton } from '@/components/buttons/icon-button';
import { XIcon } from '@phosphor-icons/react';
import { useBlur } from '@/utils/hooks/useBlur';


export function MediaPreview() {
  const { project, mediaPreviewId, showMediaPreview, closeMediaPreview,  } = useProject();

  const dialogRef = useBlur<HTMLImageElement>(closeMediaPreview);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMediaPreview();
    };
    if (showMediaPreview) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [showMediaPreview, closeMediaPreview]);

  if (mediaPreviewId === null) return <></>;
 
  return (
    <dialog
      open={showMediaPreview}
      className={styles.mediaDialogContainer}
    >
      <header className={styles.mediaPreviewHeader}>
        <IconButton
          onClick={closeMediaPreview}
          aria-label={""}
        >
          <XIcon size={24} aria-hidden="true" weight="bold" />
        </IconButton>
      </header>
      <div className={styles.mediaPreviewContent}>
        <div>
          <Image
            ref={dialogRef}
            src={project.media?.[mediaPreviewId].url}
            alt="Project Preview"
            priority
            width={1200}
            height={800}
            className={styles.mainImage}
          />
        </div>
      </div>
    </dialog>
  );
}