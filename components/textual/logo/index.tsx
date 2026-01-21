import Image from "next/image";
import styles from "./logo.module.css";

import LogoImage from "../../../public/Logo.svg";
import Link from "next/link";
import { useTranslate } from "@/hooks/useTranslate";

export function Logo() {
  const { locale } = useTranslate();

  return (
    <Link href={`/${locale}`} className={styles.logoContainer}>
      <figure className={styles.logo}>
        <Image
          src={LogoImage}
          alt="Rodrigo Moreira's Logo"
          height={36}
          width={36}
          className={styles.logoImage}
        />
        <figcaption className={styles.logoTypo}>
          <span>.</span>Rodrigo<span>()</span>
        </figcaption>
      </figure>
    </Link>
  );
}