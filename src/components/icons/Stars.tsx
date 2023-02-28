import * as React from "react"
import { SVGProps } from "react"

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.264.293a.1.1 0 0 1 .19 0l1.679 5.166a.1.1 0 0 0 .095.069h5.432a.1.1 0 0 1 .059.18l-4.395 3.194a.1.1 0 0 0-.036.111l1.678 5.166a.1.1 0 0 1-.154.112l-4.394-3.193a.1.1 0 0 0-.118 0l-4.394 3.193a.1.1 0 0 1-.154-.112L5.43 9.013a.1.1 0 0 0-.036-.111L1 5.709a.1.1 0 0 1 .058-.181H6.49a.1.1 0 0 0 .095-.07L8.264.294Z"
      fill={props.fill}
    />
  </svg>
)

export default StarIcon
