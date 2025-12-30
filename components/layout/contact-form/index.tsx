import styles from './contact-form.module.css';
import { Form, Formik, useFormikContext } from 'formik';
import { BudgetRange, ContactFormData } from '@/types/contact';
import { FormField } from '@/components/forms/form-field';
import { budgetRangeOptions } from '@/consts/contact-form';
import { useTranslate } from '@/hooks/useTranslate';

const initialValues: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  projectDescription: ''
}

function ContactFormContent() {
  const { t } = useTranslate()
  const { values, setValues, isSubmitting } = useFormikContext<ContactFormData>();

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
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
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