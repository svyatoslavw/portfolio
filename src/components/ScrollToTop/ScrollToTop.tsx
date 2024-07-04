import { useLayoutEffect, useState } from "react"

import { ArrowUpIcon } from "../icons/ArrowUpIcon"

import "./scrollToTop.css"

const ScrollToTop = () => {
  const [isShow, setIsShow] = useState(false)

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsShow(scrollTop > 0)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    isShow && (
      <div className="scroll-top">
        <a href="#top">
          <ArrowUpIcon width={30} height={30} />
        </a>
      </div>
    )
  )
}

export default ScrollToTop
