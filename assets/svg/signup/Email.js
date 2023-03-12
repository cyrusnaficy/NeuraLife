import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

function Email(props) {
  return (
    <Svg
      width={hp(3.5)}
      height={hp(3.5)}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.357.52c1.45 0 2.84.596 3.866 1.654a5.74 5.74 0 011.602 3.992 5.74 5.74 0 01-1.602 3.992 5.383 5.383 0 01-3.867 1.653 5.383 5.383 0 01-3.866-1.653 5.739 5.739 0 01-1.602-3.992A5.74 5.74 0 017.49 2.174 5.383 5.383 0 0111.357.521zm0 14.114c6.042 0 10.936 2.526 10.936 5.645v2.823H.42v-2.823c0-3.119 4.894-5.645 10.937-5.645z"
        fill="#EC6060"
        fillOpacity={0.5}
      />
    </Svg>
  )
}

export default Email
