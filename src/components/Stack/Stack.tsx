import { Heading } from "../ui/heading"
import { SectionContainer } from "../ui/section-container"
import { Ticker } from "../ui/ticker"

import { StackList } from "./StackList"
import styles from "@/styles/modules/Stack.module.scss"

const Stack = () => {
  return (
    <SectionContainer id="stack" className={styles.container}>
      <Heading title="stack" />
      <StackList />
      <Ticker />
    </SectionContainer>
  )
}

export { Stack }
