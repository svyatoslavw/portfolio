import { StackItem } from "./StackItem"
import styles from "@/styles/modules/Stack.module.scss"
import { frontend_stack } from "@/utits/constants/stack.contans"

const StackList = () => {
  return (
    <article className={styles.stack}>
      {frontend_stack.map((image, index) => (
        <StackItem
          key={index}
          src={image.src}
          width={image.width}
          height={image.height}
          index={index}
          text={image.skill}
        />
      ))}
    </article>
  )
}

export { StackList }
