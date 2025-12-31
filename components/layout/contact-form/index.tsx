import styles from './contact-form.module.css';
import { Form, Formik, useFormikContext } from 'formik';
import { BudgetRange, ContactFormData, Currency, ProjectDuration } from '@/types/contact';
import { FormField } from '@/components/forms/form-field';
import { budgetRangeOptions, currencyOptions, durationOptions } from '@/consts/contact-form';
import { useTranslate } from '@/hooks/useTranslate';
import { Button } from '@/components/buttons/button';
import { RocketLaunch } from 'phosphor-react';

const initialValues: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  projectDescription: ''
}

function ContactFormContent() {
  const { t } = useTranslate()
  const { values, setValues, isSubmitting, dirty, isValid } = useFormikContext<ContactFormData>();

  function onChange<K extends keyof ContactFormData>(
    key: K,
    newValue: ContactFormData[K]
  ) {
    setValues((oldValues) => ({
      ...oldValues,
      [key]: newValue,
    }));
  }

  return (
    <Form className={styles.contactFormContainer}>
      <div className={styles.fieldsContainer}>
        <FormField
          variant="input"
          id="Contact_FirstName"
          label={t('Contact.Form.FormLabels.firstName')}
          value={values.firstName}
          onChange={(event) => {
            onChange('firstName', event.target.value);
          }}
          placeholder={t('Contact.Form.Placeholders.firstName')}
        />
        <FormField
          variant="input"
          id="Contact_LastName"
          label={t('Contact.Form.FormLabels.lastName')}
          value={values.lastName}
          onChange={(event) => {
            onChange('lastName', event.target.value);
          }}
          placeholder={t('Contact.Form.Placeholders.lastName')}
        />
        <FormField
          variant="input"
          id="Contact_Email"
          label={t('Contact.Form.FormLabels.email')}
          onChange={(event) => {
            onChange('email', event.target.value);
          }}
          value={values.email ?? ''}
          placeholder={t('Contact.Form.Placeholders.email')}
        />
        <FormField
          variant="input"
          id="Contact_Phone"
          label={t('Contact.Form.FormLabels.phone')}
          value={values.phoneNumber ?? ''}
          onChange={(event) => {
            onChange('phoneNumber', event.target.value);
          }}
          placeholder={t('Contact.Form.Placeholders.phoneNumber')}
        />
        <FormField
          id="Contact_Budget"
          label={t('Contact.Form.FormLabels.budget')}
          variant="select"
          value={values.budgetRange}
          onChange={(event) => {
            const newValue = event.target.value as BudgetRange;
            onChange('budgetRange', newValue);
          }}
          options={budgetRangeOptions}
          placeholder={t('Contact.Form.Placeholders.budgetRange')}
        />
        <FormField
          id="Contact_Currency"
          label={t('Contact.Form.FormLabels.currency')}
          variant="select"
          value={values.currency}
          onChange={(event) => {
            const newValue = event.target.value as Currency;
            onChange('currency', newValue);
          }}
          options={currencyOptions}
          placeholder={t('Contact.Form.Placeholders.currency')}
        />
        <FormField
          id="Contact_Duration"
          label={t('Contact.Form.FormLabels.duration')}
          variant="select"
          value={values.estimatedDuration}
          onChange={(event) => {
            const newValue = event.target.value as ProjectDuration;
            onChange('estimatedDuration', newValue);
          }}
          options={durationOptions}
          placeholder={t('Contact.Form.Placeholders.estimatedDuration')}
        />
        <FormField
          id="Contact_Description"
          label={t('Contact.Form.FormLabels.projectDescription')}
          variant="text-area"
          value={values.projectDescription}
          onChange={(event) => {
            onChange('projectDescription', event.target.value);
          }}
          placeholder={t('Contact.Form.Placeholders.projectDescription')}
        />
      </div>
      <footer className={styles.submitDetails}>
        <Button
          disabled={isSubmitting || !dirty || !isValid}
        >
          <RocketLaunch size={24} />
          {t('Contact.Form.submitLabel')}
        </Button>
        <p>{t('Contact.Form.submittedMessage')}</p>
      </footer>
    </Form>
  );
}

export function ContactForm() {
  return (
    <Formik
      initialValues={initialValues}
      // validate={(values) => {
      //   // 
      // }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {() => <ContactFormContent />}
    </Formik>
  );
}