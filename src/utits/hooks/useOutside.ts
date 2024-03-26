import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from "react"

type TypeOut = {
  ref: RefObject<HTMLElement>
  isShow: boolean
  setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initialVisible: boolean): TypeOut => {
  const [isShow, setIsShow] = useState(initialVisible)
  const ref = useRef<HTMLElement>(null)

  const handleClick = (e: MouseEvent | TouchEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick, true)

    return () => {
      document.addEventListener("click", handleClick, true)
    }
  }, [])

  return { ref, isShow, setIsShow }
}
