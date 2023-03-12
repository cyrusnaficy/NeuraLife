import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Send(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 77 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.743 64.674l55.232-23.676c2.564-1.108 2.564-4.716 0-5.824L11.743 11.5c-2.089-.918-4.4.633-4.4 2.88l-.031 14.592c0 1.582 1.171 2.943 2.754 3.133l44.723 5.982-44.723 5.95a3.202 3.202 0 00-2.754 3.166l.032 14.591c0 2.247 2.31 3.798 4.4 2.88z"
        fill="#EC6060"
      />
    </Svg>
  )
}

export default Send
