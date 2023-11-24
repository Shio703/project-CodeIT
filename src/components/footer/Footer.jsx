import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      {/* hello */}
      <span>@all rights reserved</span>
      <div className={styles.socialNetworks}>
        <Image
          src="/1.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="facebook"
        />
        <Image
          src="/2.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="instagram"
        />
        <Image
          src="/3.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="x"
        />
        <Image
          src="/4.png"
          width={15}
          className={styles.icon}
          height={15}
          alt="youtube"
        />
      </div>
      {/* bye bye */}
    </div>
  );
}

export default Footer;
