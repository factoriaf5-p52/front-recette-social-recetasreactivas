import * as React from "react"
import { SVGProps } from "react"

const RecipeIcon = (props: SVGProps<SVGSVGElement>) => (
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEd0lEQVR4nO2dSYskRRTHwwV3DyLughcX8CKIeBoQBbVb8SP4AQQVZ06tKApuJ1FGRUHx6Dfw4kHBg3oYcRirM6ILYWDUGavey9JxRrTVl3+JrB4HtZZcKyoj3x8eNN105Itf/+vFkpHZxqhUKpVKpVKpVCpVX5QwHrAk7zkW51hOO87QvZDTluRLy3hyOMSFZp1kCbdZls/CQ8oaDUtyeMi40ayDkjHusSQ/hYbi2oQd2tm5kyOG7M7AZjwRFnSE5cLNCpIvgkFOGPcHB8CrCvklGGhL8n54ANnKIhjo6RQuPADXA9CnQnfe9QN0+M47BR0ejFNHZ8GhaenghsCQpI7koE3xoF9CH/kZVwyP4ypLuNeSvO6na2Xb1BrNZ2FYlt8cyUuHT+DSRWC+PYGrHcsnCpqrOFmOW8JdRZ33KXB+GdjddTTJi5bl9yZKhSX5bnuCm8r24ciPuKZoGTGhVA+OfJW3kWKzLmz/+zsj3FG1H9OaHStowmP/tFMTtmU8W6sfhPuiBZ2Mceu/2qoI27KMlw18y5ScxJVRgrYso5ntVYFN8kbdfvg/VJSgHcuhuW2WhO3vUdbthyVcHyVoy/LRwnZLwB6McG3tfqTYjBK0I/l4adsFYR89iovq9sOyvN270lEWtl9WmxoajHCZI5nECZpkAuCcJmD7vYtafSB5pWjepnuOzjBk3F74OnNg59+bYF/V/HcYd5cZeE0XQTvGU6Wu9R/Y+WpwjIeq5u6X635vpEzOpougLcl26evtwc6Bp9ismncyxp2W5PuyOZtuOjqDS7FRaSpWEbIlXG5JXnAku1XyNV0FbVnsALig0Zwm2OcHSD+/PvQDLskXIyk2HMmbjoTr5Ntknqt1NOczkJebysfX7Ka2XaMDbUkyR3i0di4pNvK7Ky1B7jxod2aaVmNwa9vJ0YB20xKyawmPrKOT4wLN5WGvEnJcoLk47FVDjg60LVCvl9Zkkj8VNNdz83In//W8PzTThttNKK0jZLOnNmCvBOrMjq8p5LZgm1BaZ8htwDahVDdxW2Crs9DAt2TwbOKQTndBk+zujPHwovb9z4sAKjJTaQK26SZobDUBuRRswlbvQA8WHBOovBhZUu+nBxp7BjoZ47pWVnwLYBc9KBMVaMt4pm65KFtGEsbTvQPtSP7wsHcYN/jwX1e9xTQXNmHLf3J85PW5ZvvdBM3dCwXNCjq4C506OgsOTksHh4eqNZoVdNRhSU7qrIMjf9VPaJe5FUbCeFxBc8tlg+Xrps8IqqP5/5D9FoEJqdAfZ9dayClH8rkvF0GdvAz0dJsT+5t4NE210NHYr4BWAFqd3LDmPWyjoBuWZXl1pqtTHGj6Wr2Wf0Zk1ttb8sEwxYF59wVVFeRIPgg/HctaC//KZsvy1rFjuDioQbbHuMXf/wsNxLUe8q4JLcd4rgegfwVwblDQPgHH8mF4GFncoPdgn+dfr9bWaXsXPOQds04ajHCzJXnNkXzT3X8Pkp0N/y4PkoPBB0OVSqVSqVQqlUqlMi3pbzf5+Uz3ZxB0AAAAAElFTkSuQmCC"
        fill={props.fill}
      />
    </defs>
  </svg>
)

export default RecipeIcon
