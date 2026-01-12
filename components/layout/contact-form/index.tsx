import styles from './contact-form.module.css';
import { Form, Formik, useFormikContext } from 'formik';
import { BudgetRange, ContactFormData, Currency, ProjectDuration } from '@/types/contact';
import { FormField } from '@/components/forms/form-field';
import { budgetRangeOptions, currencyOptions, durationOptions } from '@/consts/contact-form';
import { useTranslate } from '@/hooks/useTranslate';
import { Button } from '@/components/buttons/button';
import { RocketLaunch } from 'phosphor-react';
import { contactFormSchema } from '@/utils/validations/contact-form';
import { LoadingSpinner } from '@/components/textual/loading-spinner';
import { sendContactEmail } from '@/utils/requests/contact-email';
import toast, { Toaster } from 'react-hot-toast';
import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';

const URLSyncHandler = dynamic(() => import('@/components/uses/url-sync-handler').then(mod => mod.UrlSyncHandler), {
  ssr: false,
});

const initialValues: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  projectDescription: ''
}

function ContactFormContent({ wasSubmitted }: { wasSubmitted: boolean }) {
  const { t } = useTranslate()
  const { 
    touched,
    errors,
    values,
    setValues,
    setFieldTouched,
    isSubmitting,
    dirty,
    isValid
  } = useFormikContext<ContactFormData>();

  function handleChange<K extends keyof ContactFormData>(
    key: K,
    newValue: ContactFormData[K]
  ) {
    setValues((oldValues) => ({
      ...oldValues,
      [key]: newValue,
    }));
  }

  function handleBlur<K extends keyof ContactFormData>(key: K) {
    setFieldTouched(key, true, true);
  };

  return (
    <Form className={styles.contactFormContainer}>
      <Suspense fallback={null}>
        <URLSyncHandler />
      </Suspense>
      <div className={styles.fieldsContainer}>
        <FormField
          variant="input"
          id="Contact_FirstName"
          label={t('Contact.Form.FormLabels.firstName')}
          value={values.firstName}
          onChange={(event) => {
            handleChange('firstName', event.target.value);
          }}
          inputProps={{
            onBlur: () => handleBlur('firstName')
          }}
          placeholder={t('Contact.Form.Placeholders.firstName')}
          {...
            (touched.firstName && errors.firstName
              ? { error: errors.firstName }
              : {}
            )
          }
        />
        <FormField
          variant="input"
          id="Contact_LastName"
          label={t('Contact.Form.FormLabels.lastName')}
          value={values.lastName}
          onChange={(event) => {
            handleChange('lastName', event.target.value);
          }}
          inputProps={{
            onBlur: () => handleBlur('lastName')
          }}
          placeholder={t('Contact.Form.Placeholders.lastName')}
          {...
            (touched.lastName && errors.lastName
              ? { error: errors.lastName }
              : {}
            )
          }
        />
        <FormField
          variant="input"
          id="Contact_Email"
          label={t('Contact.Form.FormLabels.email')}
          onChange={(event) => {
            handleChange('email', event.target.value);
          }}
          inputProps={{
            onBlur: () => handleBlur('email')
          }}
          value={values.email ?? ''}
          placeholder={t('Contact.Form.Placeholders.email')}
          {...
            (touched.email && errors.email
              ? { error: errors.email }
              : {}
            )
          }
        />
        <FormField
          variant="input"
          id="Contact_Phone"
          label={t('Contact.Form.FormLabels.phone')}
          value={values.phoneNumber ?? ''}
          onChange={(event) => {
            handleChange('phoneNumber', event.target.value);
          }}
          inputProps={{
            onBlur: () => handleBlur('phoneNumber')
          }}
          placeholder={t('Contact.Form.Placeholders.phoneNumber')}
          {...
            (touched.phoneNumber && errors.phoneNumber
              ? { error: errors.phoneNumber }
              : {}
            )
          }
        />
        <FormField
          id="Contact_Budget"
          label={t('Contact.Form.FormLabels.budget')}
          variant="select"
          value={values.budgetRange}
          onChange={(event) => {
            const newValue = event.target.value as BudgetRange;
            handleChange('budgetRange', newValue);
          }}
          inputProps={{
            onBlur: () => handleBlur('budgetRange')
          }}
          options={budgetRangeOptions}
          placeholder={t('Contact.Form.Placeholders.budgetRange')}
          {...
            (touched.budgetRange && errors.budgetRange
              ? { error: errors.budgetRange }
              : {}
            )
          }
        />
        <FormField
          id="Contact_Currency"
          label={t('Contact.Form.FormLabels.currency')}
          variant="select"
          value={values.currency}
          onChange={(event) => {
            const newValue = event.target.value as Currency;
            handleChange('currency', newValue);
          }}
          inputProps={{
            onBlur: () => handleBlur('currency')
          }}
          options={currencyOptions}
          placeholder={t('Contact.Form.Placeholders.currency')}
          {...
            (touched.currency && errors.currency
              ? { error: errors.currency }
              : {}
            )
          }
        />
        <FormField
          id="Contact_Duration"
          label={t('Contact.Form.FormLabels.duration')}
          variant="select"
          value={values.estimatedDuration}
          onChange={(event) => {
            const newValue = event.target.value as ProjectDuration;
            handleChange('estimatedDuration', newValue);
          }}
          inputProps={{
            onBlur: () => handleBlur('estimatedDuration')
          }}
          options={durationOptions}
          placeholder={t('Contact.Form.Placeholders.estimatedDuration')}
          {...
            (touched.estimatedDuration && errors.estimatedDuration
              ? { error: errors.estimatedDuration }
              : {}
            )
          }
        />
        <FormField
          id="Contact_Description"
          label={t('Contact.Form.FormLabels.projectDescription')}
          variant="text-area"
          value={values.projectDescription}
          onChange={(event) => {
            handleChange('projectDescription', event.target.value);
          }}
          inputProps={{
            onBlur: () => handleBlur('projectDescription')
          }}
          placeholder={t('Contact.Form.Placeholders.projectDescription')}
          {...
            (touched.projectDescription && errors.projectDescription
              ? { error: errors.projectDescription }
              : {}
            )
          }
        />
      </div>
      <footer className={styles.submitDetails}>
        <Button
          theme="gradient"
          type="submit"
          disabled={!dirty || isSubmitting || (dirty && !isValid)}
        >
          {isSubmitting ? (
            <LoadingSpinner />
          ) : (
            <RocketLaunch size={24} />
          )}
          {isSubmitting
            ? t('Contact.Form.submittingLabel')
            : t('Contact.Form.submitLabel')
          }
        </Button>
        {wasSubmitted && <p>{t('Contact.Form.submittedMessage')}</p>}
      </footer>
    </Form>
  );
}

export function ContactForm() {
  const { t, locale } = useTranslate();

  const [wasSubmitted, setWasSubmitted] = useState<boolean>(false);

  return (
    <>
      <Formik
        validationSchema={contactFormSchema}
        initialValues={initialValues}
        validateOnMount={true}
        validateOnBlur={true}
        onSubmit={async (values, { resetForm }) => {
          return await toast.promise(
            async () => {
              try {
                await sendContactEmail({ data: values, lang: locale  });
                setWasSubmitted(true);
                resetForm();
              } catch (error) {
                console.error(error);
              }
            },
            {
              loading: t('Contact.Form.ToasterStatus.loading'),
              success: t('Contact.Form.ToasterStatus.success'),
              error: t('Contact.Form.ToasterStatus.error'),
            }
          );
        }}
      >
        {() => <ContactFormContent wasSubmitted={wasSubmitted} />}
      </Formik>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </>
  );
}