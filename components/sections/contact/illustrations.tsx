import styles from './contact.module.css';

export const BottomBluredSvg = () => {
  return (
    <svg aria-hidden={true} className="bg-ellipse bg-ellipse-bottom" width="611" height="331" viewBox="0 0 611 331" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M412 149.788C412 232.514 364.318 299.576 305.5 299.576C246.682 299.576 199 232.514 199 149.788C199 67.0624 246.682 0 305.5 0C364.318 0 412 67.0624 412 149.788Z" fill="#6805E0" />
      <path d="M611 228.872C611 285.276 474.223 331 305.5 331C136.777 331 0 285.276 0 228.872C0 172.468 136.777 126.744 305.5 126.744C474.223 126.744 611 172.468 611 228.872Z" fill="#6805E0" />
    </svg>
  );
}

export const LeftBluredSvg = () => {
  return (
    <svg aria-hidden={true} className="bg-ellipse bg-ellipse-left" width="740" height="248" viewBox="0 0 740 248" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="370" cy="124" rx="370" ry="124" fill="#8F33FF" />
    </svg>
  );
}

export const RightBluredSvg = () => {
  return (
    <svg aria-hidden={true} className="bg-ellipse bg-ellipse-right" width="218" height="348" viewBox="0 0 218 348" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="109" cy="174" rx="109" ry="174" fill="#6805E0" />
    </svg>
  )
};

export const UnderlineSVG = () => (
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

export const ArrowSvg = () => (
  <svg className={styles.arrowIllustration} aria-hidden={true} width="207" height="85" viewBox="0 0 207 85" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.0003 7.91171C46.1039 -1.64556 134.437 -5.59466 145.987 53.9955C153.874 94.6804 106.894 92.1877 99.9129 47.4819C92.9316 2.77609 158.029 -28.1349 203.918 49.5614M203.918 49.5614L186.787 46.7941M203.918 49.5614L204.877 26.1264" stroke="url(#paint0_linear_237_1256)" strokeWidth="4" strokeLinecap="round" />
    <defs>
      <linearGradient id="paint0_linear_237_1256" x1="151.663" y1="86.0606" x2="65.9014" y2="-36.722" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F0ECF8" />
        <stop offset="1" stopColor="#F0ECF8" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);