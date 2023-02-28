import * as React from "react"
import { SVGProps } from "react"

const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAED0lEQVR4nO2cz4tcRRDHW1fF5KCgJgbEHyF6FQ8ikUSQEIMePPorehBUhHjwX8hRFExEDSHoyST/gODFg0j8RVx/EGenayYbIgtJnKl6MxsFTdTar/SbERPCxsxm3uve1/WBgmV3YOgPtUW/6nrtnGEYhmEYhmEYhjE5rR7uJcZrJHrYi35PrAWx/jkOKX8nepgYu7o9bFrBV+TLZ8B1nvE8sX5FsoSJgvVLz9gJYCb2OpKGCjxOot2JBV8SSm3BjtjrSY7ZU1jrWT+4esEXhxc9sLCANbHXlwTzZ7CeRL+btuQLsvvb7mmsczkzP5JM1Un+r5RkK3v2FNZWm8mXZvbJk7jR5YavoCZfgez9Lifagh31Sx5HgSdcLvtkmsoWbmXhRX0W+2xivBAtm8fR6eNZ13SI9evYoj3rF67xvQuJK3kseomG2OiaCpUNoviiR7LxqmsqFDptCUgehR50TcWL/pCQ6FnXVIhVkikdon3XVIj1fEKiz7mmQgkIvjBcU6EE5JpoMdHTy2i2Gl0LZLuOevC2j64HEj2U0PbuI9dUiLErGdFN7nV0e9hUds6iS9YlP8Q9rsnQSiaQpi/6iGs6nrEztmgq8LRrOgBm6pnlWDab57I4Mwy0BY9Fy2bGNpcTXvRA7dksus/lxsIC1oTpoRpLxjdZTioFwjxcHfU6zHLQr7jN5Uz3NNZ50aNVZnK2A47LlJH9VdTkbMvF5egItpf/5lefxXPZ7S4mBcBMu4/nwjTRJI/r5WM16xEq8AyAa2OvY1VBQ2wMzZ8wg1HOUod+djg8YD3vWTmMDIS/hc80vndhGIZhGIZhGIaRDScGuLld4OFOH68Q617P+knowI3aqXrGi/4RYvyzDy8fjT+zhwq83BZs7gpuir2O5Gj1sKE8sGX90IuemGLnbj68nRv6Jsd+we0uRzo9PECibxJrq+qm/78NJ2I95kXfoAHud02mNcBdXvD66Hqe6uX+XxvVs+6e6+M+1xRogK0k+nEKE0rLtFY/9YwnAVzjVhst4AYSvESsP8WWSVcu/UcveHEWuN6tBkJ2kOjx2OJoxaFdKvBUshneETwUTkXii1qaToaLfu4ZD7q0rk/T3Z7179hyaNqyWZVY34leTsLxUbhrLrYQqj67j4YLA+JIZjzqWRdjS6D6snvY6eORWiWHLxw9BscXQPVm9u9UYEstkttncevoBDr+wilOZnNrEbdULtqzvh17sRQ99K3KRce8eIoSCc/arlx0WacSWCzFzejfKhdNrD9T7hktOl+H6HdjL5Rii2bdU7nojuAOYh1kLHnxeIE7XV0v+3jWsxlKHtY+DlxOeoq+X+5CWP+KLYGqinJt2vWi780NcHetkg3DMAzDMAzDMAzDMFya/AMrKbNzNwCsVAAAAABJRU5ErkJggg=="
      fill={props.fill}
     />
    </defs>
  </svg>
)

export default ProfileIcon
