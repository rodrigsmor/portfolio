import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './contact.module.css';
import { Dictionary } from '@/functions/dictionaries';
import { EnvelopeSimple, MapPin, Phone } from 'phosphor-react';
import { PathToDot, useTranslate } from '@/hooks/useTranslate';
import { ContactForm } from '@/components/layout/contact-form';
import { SocialLinks } from '@/components/layout/social-links';
import { ArrowSvg, BottomBluredSvg, LeftBluredSvg, RightBluredSvg, UnderlineSVG } from './illustrations';

interface ContactItem {
  name: 'email' | 'phone' | 'address',
  Icon: ReactNode;
  title: PathToDot<Dictionary>;
  href: string;
  address: string;
  anchorLabel: PathToDot<Dictionary>;
}

export function Contact() {
  const { t } = useTranslate();

  const contactItems: ContactItem[] = [
    {
      name: 'phone',
      Icon: <Phone size={24} />,
      href: process.env.NEXT_PUBLIC_CONTACT_PHONE_HREF ?? '',
      title: 'Contact.AddressLabels.phone',
      address: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '',
      anchorLabel: 'Accessibility.callPhone'
    },
    {
      name: 'email',
      Icon: <EnvelopeSimple size={24} />,
      href: process.env.NEXT_PUBLIC_CONTACT_EMAIL_HREF ?? '',
      title: 'Contact.AddressLabels.email',
      address: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
      anchorLabel: 'Accessibility.sendEmail'
    },
    {
      name: 'address',
      Icon: <MapPin size={24} />,
      href: process.env.NEXT_PUBLIC_CONTACT_GOOGLE_MAPS ?? '',
      title: 'Contact.AddressLabels.location',
      address: process.env.NEXT_PUBLIC_CONTACT_GOOGLE_MAPS ?? '',
      anchorLabel: 'Accessibility.viewMap'
    },
  ]

  return (
    <footer id="contact" className={styles.contactContainer} aria-labelledby="contact-heading">
      <p className={styles.footerHeading}>
        {t('Contact.headingPrimary')}
        <strong>{t('Contact.headingSecondary')}</strong>
      </p>
      <h2 id="contact-heading" className={styles.callToAction}>
        <UnderlineSVG />
        {t('Contact.callToAction')}
        <ArrowSvg />
      </h2>
      <address className={styles.contactsMethodsWrapper}>
        {contactItems.map(({ Icon, href, address, name, title, anchorLabel }) => {
          const ariaLabel = t(anchorLabel).replace('{replace}', address);
          return (
            <div key={name} className={styles.contactItem}>
              <span className="icon" aria-hidden="true">
                {Icon}
              </span>
              <div className="info">
                <span className="label">{t(title)}</span>
                <Link
                  href={href}
                  aria-label={ariaLabel}
                  {...(
                    name === 'address'
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {}
                  )}
                >
                  {address}
                </Link>
              </div>
            </div>
          );
        })}
      </address>
      <ContactForm />
      <footer className={styles.copyrightsFooter}>
        <SocialLinks />
        <small>
          &copy; {new Date().getFullYear()} <strong>Rodrigo</strong>. All Rights Reserved.
        </small>
      </footer>
      <BottomBluredSvg />
      <LeftBluredSvg/>
      <RightBluredSvg/>
    </footer>
  );
}