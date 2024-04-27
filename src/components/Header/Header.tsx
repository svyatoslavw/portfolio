import clsx from "clsx"
import { useTranslation } from "react-i18next"

import { LanguageButton } from "@/components/Header/LanguageButton.tsx"

import styles from "@/styles/modules/Header.module.scss"
import { links } from "@/utits/constants/links.constants.ts"
import { useOutside } from "@/utits/hooks/useOutside"

const Header = () => {
  const { isShow, ref, setIsShow } = useOutside(false)
  const { t } = useTranslation("header")

  return (
    <header
      ref={ref}
      className={clsx(styles.container, {
        [styles.active]: isShow
      })}
    >
      <img src="/logo.svg" draggable={false} alt="header logo" height={40} width={40} />
      <section className={isShow ? styles.menu : styles.links}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsShow(false)}>
            {t(link.label)}
          </a>
        ))}
        <div className={styles.buttons}>
          <LanguageButton type={"en"} />
          <LanguageButton type={"ua"} />
          <LanguageButton type={"ru"} />
        </div>
      </section>

      <div className={styles.burger} onClick={() => setIsShow(!isShow)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </header>
  )
}

export { Header }
