import { ImgHTMLAttributes, useEffect } from 'react';
import styles from './media-preview.module.css';
import { useProject } from '@/hooks/useProject';
import Image from 'next/image';
import emblaStyles from './embla.module.css';
import { IconButton } from '@/components/buttons/icon-button';
import { CaretLeftIcon, CaretRightIcon, XIcon } from '@phosphor-icons/react';
import { useBlur } from '@/hooks/useBlur';
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslate } from '@/hooks/useTranslate';


export function MediaPreview() {
  const { t } = useTranslate();
  const { project, setMediaPreviewId, initialId,  mediaPreviewId, showMediaPreview, closeMediaPreview,  } = useProject();

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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: initialId
  });

  const dialogRef = useBlur<HTMLImageElement>(closeMediaPreview, ['media-preview-controllers']);

  const hasNext = mediaPreviewId !== project.media.length;
  const hasPrevious = mediaPreviewId !== 0;

  if (mediaPreviewId === null) return <></>;

  const goToPrev = () => {
    setMediaPreviewId((currentId) => {
      if (currentId) return currentId - 1;
      return null;
    });
    emblaApi?.scrollPrev();
  }

  const goToNext = () => {
    setMediaPreviewId((currentId) => {
      if (currentId) return currentId + 1;
      return null;
    });
    emblaApi?.scrollNext();
  }
 
  return (
    <dialog
      open={showMediaPreview}
      className={styles.mediaDialogContainer}
    >
      <header className={styles.mediaPreviewHeader}>
        <IconButton
          onClick={closeMediaPreview}
          aria-label={t('Accessibility.closePreviewButton')}
        >
          <XIcon size={24} aria-hidden="true" weight="bold" />
        </IconButton>
      </header>
      <div className={`${emblaStyles.embla}`}>  
        <div ref={emblaRef} className={`${emblaStyles.embla__viewport}`}>
          <div className={`${emblaStyles.embla__container}`}>
            {project.media.map((media, index) => {
              return (
                <div key={media.url} className={`${emblaStyles.embla__slide}`}>
                  <div>
                    <Image
                      src={media.url}
                      alt="Project Preview"
                      priority
                      width={1200}
                      height={800}
                      {...(
                        mediaPreviewId === index
                          ? { ref: dialogRef }
                          : {}
                        )
                      }
                      className={styles.mainImage}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button
        onClick={goToPrev}
        disabled={!hasPrevious}
        aria-label={t('Accessibility.prevMediaButton')}
        className={`media-preview-controllers ${styles.carouselButton}`}
      >
        <CaretLeftIcon aria-hidden className="media-preview-controllers" size={48} weight="bold" />
      </button>
      <button
        onClick={goToNext}
        disabled={!hasNext}
        aria-label={t('Accessibility.nextMediaButton')}
        className={`media-preview-controllers ${styles.carouselButton} next`}
      >
        <CaretRightIcon aria-hidden data-safe="true" className="media-preview-controllers" size={48} weight="bold" />
      </button>
    </dialog>
  );
}