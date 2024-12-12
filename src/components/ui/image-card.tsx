"use client"

import Image from "next/image"
import { forwardRef, useCallback, useState } from "react"

import { throttle } from "@/lib/utils"

export const ImageCard = forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ src = "", ...props }, ref) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 })
    const [scale, setScale] = useState(1)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onMouseMove = useCallback(
      throttle((e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget
        const box = card.getBoundingClientRect()
        const x = e.clientX - box.left
        const y = e.clientY - box.top
        const centerX = box.width / 2
        const centerY = box.height / 2
        const rotateX = (y - centerY) / 50
        const rotateY = (centerX - x) / 50

        setRotate({ x: rotateX, y: rotateY })
        setScale(1.03)
      }, 100),
      [setRotate, setScale]
    )

    const onMouseLeave = () => {
      setRotate({ x: 0, y: 0 })
      setScale(1)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { width, height, ...rest } = props

    return (
      <div className="transition-[all_2000ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform">
        <Image
          ref={ref}
          src={src}
          alt={crypto.randomUUID()}
          height={1920}
          width={1080}
          className="rounded-lg"
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${scale}, ${scale}, ${scale})`,
            transition: "all 2000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s"
          }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          {...rest}
        />
      </div>
    )
  }
)

ImageCard.displayName = "ImageCard"
