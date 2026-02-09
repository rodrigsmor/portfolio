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
  const { project, setMediaPreviewId, initialId, mediaPreviewId, showMediaPreview, closeMediaPreview } = useProject();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: initialId ?? 0
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setMediaPreviewId(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, setMediaPreviewId]);

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

  if (mediaPreviewId === null) return null;

  const hasNext = emblaApi?.canScrollNext() ?? false;
  const hasPrevious = emblaApi?.canScrollPrev() ?? false;

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();
 
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
                      alt={media.alt ?? `Media Preview: ${index}`}
                      width={1200}
                      height={800}
                      priority={index === initialId}
                      loading={index === initialId ? undefined : "lazy"}
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
        className={`PreviewButton_Controllers ${styles.carouselButton}`}
      >
        <CaretLeftIcon aria-hidden className="PreviewButton_Controllers" size={48} weight="bold" />
      </button>
      <button
        onClick={goToNext}
        disabled={!hasNext}
        aria-label={t('Accessibility.nextMediaButton')}
        className={`PreviewButton_Controllers ${styles.carouselButton} next`}
      >
        <CaretRightIcon aria-hidden data-safe="true" className="PreviewButton_Controllers" size={48} weight="bold" />
      </button>
    </dialog>
  );
}