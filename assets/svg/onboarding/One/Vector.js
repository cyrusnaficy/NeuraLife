import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

function Vector(props) {
  return (
    <Svg
      width={wp(93)}
      height={hp(29)}
      viewBox="0 0 318 212"
      fill="none"
      preserveAspectRatio="xMinYMin slice"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M146.118 18.236c26.571 2.582 53.122-5.418 78.417 1.127 32.354 8.372 69.54 17.771 83.743 40.832 14.453 23.467-1.763 50.355-12.467 74.895-10.729 24.599-20.227 51.812-49.138 66.349-28.613 14.387-66.007 10.39-100.555 8.918-32.52-1.386-66.773-2.346-92.467-17.145-25.294-14.568-34.896-38.576-43.806-61.344C1.216 109.821-3.71 87.206 3.422 64.869 11.03 41.046 20.858 12.42 51.146 2.52c30.415-9.94 62.001 12.514 94.972 15.716z"
        fill="#F6F6F6"
      />
    </Svg>
  )
}

export default Vector
