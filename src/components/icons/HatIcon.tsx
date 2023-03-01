import * as React from "react"
import { SVGProps } from "react"

const HatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h40v40H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.01111)" />
      </pattern>
      <image
        id="b"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,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"
        fill={props.fill}
      />
    </defs>
  </svg>
)

export default HatIcon
