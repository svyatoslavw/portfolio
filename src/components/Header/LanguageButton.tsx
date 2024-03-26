import clsx from "clsx"
import { useTranslation } from "react-i18next"

import styles from "@/styles/modules/Header.module.scss"

const LanguageButton = ({ type }: { type: string }) => {
  const { i18n } = useTranslation("header")

  return (
    <div>
      <button
        className={clsx(styles.button, {
          [styles.activeButton]: i18n.language === type
        })}
        onClick={() => i18n.changeLanguage(type)}
      >
        {type.toUpperCase()}
      </button>
    </div>
  )
}

export { LanguageButton }
