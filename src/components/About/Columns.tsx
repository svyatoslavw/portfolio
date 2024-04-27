import { Description } from "./Description"
import { Skills } from "./Skills"
import styles from "@/styles/modules/About.module.scss"

const Columns = () => {
  return (
    <div className={styles.information}>
      <Description />
      <Skills />
    </div>
  )
}

export { Columns }
