import { useTranslate } from '@/hooks/useTranslate';
import { ContactFormData } from '@/types/contact';
import { ServicesType } from '@/types/services';
import { useFormikContext } from 'formik';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function UrlSyncHandler() {
  const { t } = useTranslate()

  const { values, setFieldValue } = useFormikContext<ContactFormData>();

  const searchParams = useSearchParams();

  useEffect(() => {
    const quote = searchParams.get('quote') as ServicesType;
    if (!quote) return;

    const serviceTitle = t(`Services.items.${quote}.title`);

    const currentDescription = values.projectDescription.trim();
    const hasDescription = currentDescription.length > 0;

    const translationKey = hasDescription
      ? 'Contact.Form.autoFillAddon'
      : 'Contact.Form.autoFillMessage';

    const textTemplate = t(translationKey).replace('{service}', serviceTitle);

    const alreadyHasTerm = [serviceTitle, textTemplate].some((term) => currentDescription.includes(term));

    if (alreadyHasTerm) return;

    if (hasDescription) {
      setFieldValue('projectDescription', `${currentDescription}\n\n${textTemplate}`);
    } else {
      setFieldValue('projectDescription', textTemplate);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, setFieldValue, t]);
  
  return <></>
}