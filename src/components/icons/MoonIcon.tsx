import React from "react"

export const MoonIcon = React.forwardRef<SVGSVGElement, React.ComponentProps<"svg">>(
  (props, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      ref={ref}
    >
      <path fill="currentColor" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
)
