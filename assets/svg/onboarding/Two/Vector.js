import * as React from "react"
import Svg, { Path } from "react-native-svg"
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

function Vector(props) {
  return (
    <Svg
      width={260}
      height={226}
      viewBox="0 0 260 226"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M120.99 19.44c22.001 2.752 43.986-5.776 64.93 1.202 26.791 8.924 57.582 18.944 69.342 43.528 11.968 25.017-1.46 53.68-10.323 79.842-8.884 26.223-16.748 55.233-40.688 70.729-23.692 15.337-54.655 11.077-83.261 9.507-26.928-1.477-55.29-2.5-76.566-18.277-20.944-15.53-28.894-41.123-36.272-65.395-7.145-23.502-11.224-47.611-5.318-71.423C9.133 43.757 17.27 13.238 42.35 2.686c25.184-10.595 51.338 13.34 78.639 16.755z"
        fill="#F7F7F7"
      />
    </Svg>
  )
}

export default Vector
