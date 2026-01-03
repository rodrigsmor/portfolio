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

const contactItems: ContactItem[] = [
  {
    name: 'phone',
    Icon: <Phone size={24} />,
    href: 'tel:+5511992944712',
    title: 'Contact.AddressLabels.phone',
    address: '+55 (11) 99294-4712',
    anchorLabel: 'Accessibility.callPhone'
  },
  {
    name: 'email',
    Icon: <EnvelopeSimple size={24} />,
    href: 'mailto:rodrigsmor.pf@gmail.com',
    title: 'Contact.AddressLabels.email',
    address: 'rodrigsmor.pf@gmail.com',
    anchorLabel: 'Accessibility.sendEmail'
  },
  {
    name: 'address',
    Icon: <MapPin size={24} />,
    href: 'https://maps.app.goo.gl/ckQjpUnXsYfUiZaW7',
    title: 'Contact.AddressLabels.location',
    address: 'Cubatão, SP - Brazil',
    anchorLabel: 'Accessibility.viewMap'
  },
]

export function Contact() {
  const { t } = useTranslate();
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
          Copyrights &copy; {new Date().getFullYear()} <strong>Rodrigo</strong>. All Rights Reserved.
        </small>
      </footer>
      <BottomBluredSvg />
      <LeftBluredSvg/>
      <RightBluredSvg/>
    </footer>
  );
}