import clsx from "clsx"
import React from "react"

import styles from "@/styles/modules/UI.module.scss"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const SectionContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ id, children, className }, ref) => {
    return (
      <section id={id} ref={ref} className={clsx(styles.sectionContainer, className)}>
        {children}
      </section>
    )
  }
)

SectionContainer.displayName = "SectionContainer"

export { SectionContainer }
