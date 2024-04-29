import styles from "@/styles/modules/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>
        &copy; All rights reserved - Designed by{" "}
        <a
          className={styles.link}
          href="https://github.com/svyatoslavw"
          target="_blank"
          rel="noreferrer noopenner"
        >
          svyatoslavw
        </a>
      </small>
    </footer>
  )
}

export { Footer }
