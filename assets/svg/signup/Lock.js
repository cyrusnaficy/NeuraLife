import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Lock(props) {
  return (
    <Svg
      width={20}
      height={25}
      viewBox="0 0 20 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 0a6.257 6.257 0 00-6.25 6.25V10H2.5A2.5 2.5 0 000 12.5v10A2.5 2.5 0 002.5 25h15a2.5 2.5 0 002.5-2.5v-10a2.5 2.5 0 00-2.5-2.5h-1.25V6.25A6.257 6.257 0 0010 0zM6.25 6.25A3.755 3.755 0 0110 2.5a3.755 3.755 0 013.75 3.75V10h-7.5V6.25zm5 13.404V22.5h-2.5v-2.846a2.491 2.491 0 01.709-4.596A2.501 2.501 0 0112.5 17.5c0 .924-.505 1.721-1.25 2.154z"
        fill="#EC6060"
        fillOpacity={0.6}
      />
    </Svg>
  )
}

export default Lock
