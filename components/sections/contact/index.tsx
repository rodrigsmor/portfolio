import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './contact.module.css';
import { Dictionary } from '@/functions/dictionaries';
import { EnvelopeSimple, MapPin, Phone } from 'phosphor-react';
import { PathToDot, useTranslate } from '@/hooks/useTranslate';
import { ContactForm } from '@/components/layout/contact-form';
import { SocialLinks } from '@/components/layout/social-links';

const UnderlineSVG = () => (
  <svg aria-hidden={true} className="underline-svg" width="128" height="25" viewBox="0 0 128 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M78.7878 0C85.1166 9.37802e-05 90.9237 3.75665 96.2214 10.0361C100.7 15.0772 104.863 17.121 108.72 17.1211C112.625 17.1211 117.066 15.0312 122.076 9.91113C123.246 8.71491 125.165 8.69398 126.361 9.86426C127.557 11.0347 127.578 12.9531 126.408 14.1494C120.823 19.8574 114.917 23.1816 108.72 23.1816C102.481 23.1815 96.7961 19.8153 91.6726 14.041L91.6462 14.0117L91.6208 13.9814C86.8274 8.28689 82.5455 6.06064 78.7878 6.06055C75.0533 6.06055 70.8011 8.25937 66.0437 13.876C61.7397 20.2305 56.4282 24.0605 50.028 24.0605C43.8137 24.0604 37.5487 20.4207 31.3015 14.2812C26.6554 10.3814 22.2978 8.66699 18.1814 8.66699C14.0423 8.66703 9.65899 10.4001 4.98409 14.3457C3.70513 15.4251 1.79397 15.2633 0.714555 13.9844C-0.364816 12.7054 -0.203046 10.7943 1.07588 9.71484C6.50187 5.13533 12.2196 2.60649 18.1814 2.60645C23.9569 2.60645 29.5039 4.97918 34.778 9.29102L35.2878 9.71484L35.3776 9.79102L35.4616 9.87305C41.3417 15.676 46.1735 17.9999 50.028 18C53.6754 18 57.3993 15.8926 61.1189 10.3428L61.2106 10.2061L61.3181 10.0791C66.6255 3.77388 72.4446 0 78.7878 0Z" fill="url(#paint0_linear_555_3622)" />
    <defs>
      <linearGradient id="paint0_linear_555_3622" x1="-9.48252e-07" y1="12.0303" x2="126.894" y2="5.09908" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6805E0" />
        <stop offset="1" stopColor="#ED2BC6" />
      </linearGradient>
    </defs>
  </svg>
);

const ArrowSvg = () => (
  <svg className={styles.arrowIllustration} aria-hidden={true} width="207" height="85" viewBox="0 0 207 85" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.0003 7.91171C46.1039 -1.64556 134.437 -5.59466 145.987 53.9955C153.874 94.6804 106.894 92.1877 99.9129 47.4819C92.9316 2.77609 158.029 -28.1349 203.918 49.5614M203.918 49.5614L186.787 46.7941M203.918 49.5614L204.877 26.1264" stroke="url(#paint0_linear_237_1256)" strokeWidth="4" stroke-linecap="round" />
    <defs>
      <linearGradient id="paint0_linear_237_1256" x1="151.663" y1="86.0606" x2="65.9014" y2="-36.722" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F0ECF8" />
        <stop offset="1" stop-color="#F0ECF8" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

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
    </footer>
  );
}