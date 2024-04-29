import styles from "@/styles/modules/UI.module.scss"

const Ticker = () => {
  return (
    <section className={styles.ticker}>
      <div className={styles.scroll}>
        <div>
          {" "}
          • Developer javascript • <span> Developer javascript </span> • Developer javascript •{" "}
          <span> Developer javascript •</span>
        </div>
        <div>
          {" "}
          • Developer javascript • <span> Developer javascript </span> • Developer javascript •{" "}
          <span> Developer javascript •</span>
        </div>
      </div>
    </section>
  )
}

export { Ticker }
