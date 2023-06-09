import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

function Maps(props) {
  return (
    <Svg
      width={wp(50)}
      height={hp(18)}
      viewBox="0 0 175 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.182 44.578L0 70.832l20.82-11.883" fill="#B59659" />
      <Path
        d="M175 120.843l-75.687 45.08-57.109-31.382-38.7-22.146 74.36-42.934"
        fill="#C9C9C9"
      />
      <Path
        d="M175 120.843l-75.878 43.284-52.9-29.922-40.04-89.627L80.652 0l35.037 86.643 59.311 34.2z"
        fill="#FFF3D9"
      />
      <Path
        d="M168.081 119.84l-69.676 39.742-48.577-27.478-37.292-85.932L78.9 7.858l34.715 80.575 54.467 31.407z"
        fill="#68E1FD"
      />
      <Path
        opacity={0.1}
        d="M78.9 7.858l34.714 80.575-31.893 21.835-31.893 21.836-37.292-85.932L78.9 7.858z"
        fill="#000"
      />
      <Path
        d="M15.793 43.245l33.362 8.627 15.424 34.492 53.808 39.64 3.961 19.918 7.725-4.405-5.561-19.499-55.674-38.003-15.983-36.587-30.175-7.115"
        fill="#F9EFD7"
      />
      <Path
        d="M78.683 96.59l-7.496 22.209H40.142l3.014 2.781h29.821l8.264-23.34M55 58.15L78.119 3.35l-8.886 5.307-18.205 43.163c1.613 1.714 2.228 4.76 3.974 6.328zM139.473 102.893l-22.47 14.802-2.825-2.723 22.737-13.882"
        fill="#F9EFD7"
      />
      <Path
        d="M156.516 126.004c.197.317-27.294-16.37-27.294-16.37L105.87 93.727l4.443-13.901.736 2.222-3.421 10.492 50.697 32.867"
        fill="#F9EFD7"
      />
      <Path
        d="M146.487 115.562c2.51 0 4.545-.932 4.545-2.082s-2.035-2.082-4.545-2.082-4.545.932-4.545 2.082 2.035 2.082 4.545 2.082z"
        fill="#B3B3B3"
      />
      <Path
        d="M118.387 126.004s-28.672-5.275-36.359 7.191c-7.686 12.467-2.266 15.869-2.266 15.869l-4.862-2.786s-.26-14.809 14.04-20.877c14.302-6.068 26.73-2.539 26.73-2.539"
        fill="#F9EFD7"
      />
      <Path
        opacity={0.28}
        d="M109.545 143.808c-.483-.241-12.91-4.64-12.91-4.64l-1.55 2.539 9.471 7.065 4.989-4.964z"
        fill="url(#paint0_linear_17_84)"
      />
      <Path
        d="M98.05 145.637a.864.864 0 001.726 0v-9.725a.863.863 0 10-1.727 0v9.725z"
        fill="#BC532A"
      />
      <Path
        d="M94.654 137.398c.4-1.727 2.17-9.344 5.306-7.103 1.606 1.149 2.063 2.939 2.704 4.69.583 1.447.92 2.981.997 4.539.05 3.174-3.174 3.555-5.637 3.542-1.422 0-3.453-.844-3.808-2.393-.203-.933.14-2.031.342-2.939l.096-.336z"
        fill="#2C9135"
      />
      <Path
        d="M94.501 137.721l.076-.336c.356-1.53 1.778-7.662 4.272-7.509-.742 3.231-1.834 6.646-1.27 9.953a7.56 7.56 0 001.321 3.173h-.971c-1.422 0-3.453-.844-3.809-2.393-.177-.869.184-1.967.381-2.888z"
        fill="#156819"
      />
      <Path
        d="M94 151.375a.603.603 0 001.206 0v-6.779a.603.603 0 00-1.206 0v6.779z"
        fill="#BC532A"
      />
      <Path
        d="M91.626 145.624c.28-1.206 1.51-6.513 3.7-4.951 1.118.8 1.435 2.05 1.905 3.269a9.738 9.738 0 01.698 3.174c.038 2.208-2.209 2.481-3.93 2.469-.99 0-2.405-.591-2.64-1.663-.06-.693.02-1.39.235-2.051l.032-.247z"
        fill="#2C9135"
      />
      <Path
        d="M91.524 145.859l.051-.235c.248-1.067 1.27-5.338 2.977-5.237-.514 2.254-1.27 4.634-.87 6.938.13.806.445 1.571.92 2.234h-.678c-.99 0-2.406-.59-2.64-1.663a5.158 5.158 0 01.24-2.037z"
        fill="#156819"
      />
      <Path
        d="M103.921 151.146a.825.825 0 101.65 0v-9.299a.825.825 0 10-1.65 0v9.299z"
        fill="#BC532A"
      />
      <Path
        d="M100.665 143.263c.381-1.651 2.069-8.931 5.078-6.792 1.536 1.098 1.967 2.812 2.583 4.487.558 1.382.879 2.848.952 4.336.051 3.028-3.034 3.402-5.389 3.389-1.358 0-3.301-.806-3.618-2.285-.19-.888.133-1.942.324-2.812l.07-.323z"
        fill="#2C9135"
      />
      <Path
        d="M100.519 143.586l.069-.323c.337-1.46 1.702-7.325 4.082-7.179-.711 3.091-1.752 6.347-1.193 9.521a7.224 7.224 0 001.269 3.059h-.933c-1.358 0-3.301-.806-3.618-2.285-.19-.869.133-1.923.324-2.793z"
        fill="#156819"
      />
      <Path
        opacity={0.28}
        d="M58.53 113.772c3.421 1.27 8.391 3.072 8.588 3.174l-4.824 3.11-5.547-4.113a6.576 6.576 0 001.783-2.171z"
        fill="url(#paint1_linear_17_84)"
      />
      <Path
        d="M56.816 116.14l-.063-.07V94.171h2.869v21.969a2.423 2.423 0 01-2.806 0z"
        fill="#D3894C"
      />
      <Path
        d="M58.187 101.674l4.736 2.882 1.656-.959-.679-2.133-4.59-2.672-1.123 2.882z"
        fill="#D3894C"
      />
      <Path
        d="M59.31 99.338l4.165 2.482.742 1.987-1.294.749-3.536-2.152-.076-3.066z"
        fill="#C66B28"
      />
      <Path
        d="M57.876 96.882l-3.954-2.089-1.81 1.124 1.81 1.872 2.748.616"
        fill="#D3894C"
      />
      <Path
        d="M56.816 116.14l-.063-.07V94.171h1.27v22.394a2.412 2.412 0 01-1.207-.425z"
        fill="#C66B28"
      />
      <Path
        d="M58.035 97.662l-4.932-2.469-.99.724.38 1.498 4.793 2.71"
        fill="#C66B28"
      />
      <Path
        d="M58.187 94.895c.793 0 1.435-.324 1.435-.724 0-.4-.642-.723-1.435-.723-.792 0-1.434.324-1.434.723 0 .4.642.724 1.434.724z"
        fill="#EAA068"
      />
      <Path
        opacity={0.28}
        d="M158.782 116.946c-.304-.152-11.774-4.335-11.774-4.335l-1.27 1.339 8.252 6.106 4.792-3.11z"
        fill="url(#paint2_linear_17_84)"
      />
      <Path
        d="M145.656 113.886l-.038-.069v-21.9h1.732v21.944a1.026 1.026 0 01-1.694.025z"
        fill="#E6E6E6"
      />
      <Path
        d="M145.656 113.886l-.038-.069v-21.9h.774v22.395a1.161 1.161 0 01-.736-.426z"
        fill="#B3B3B3"
      />
      <Path
        d="M146.487 92.641c.48 0 .87-.324.87-.723 0-.4-.39-.724-.87-.724s-.869.324-.869.724c0 .4.389.723.869.723z"
        fill="#DDDAA5"
      />
      <Path
        d="M147.683 98.093c2.709-.638 4.317-3.656 3.591-6.74-.727-3.085-3.512-5.069-6.221-4.43-2.71.637-4.317 3.655-3.591 6.74.726 3.085 3.512 5.068 6.221 4.43z"
        fill="#CA4050"
      />
      <Path
        d="M147.297 97.194c2.242-.528 3.573-3.022 2.972-5.571-.6-2.549-2.904-4.187-5.146-3.66-2.241.528-3.572 3.023-2.972 5.572.6 2.549 2.904 4.187 5.146 3.66z"
        fill="#fff"
      />
      <Path
        d="M143.847 88.21l4.951 8.253s-.768 2.03-1.149 1.136c-.381-.895-5.008-8.519-5.008-8.519l1.206-.87z"
        fill="#CA4050"
      />
      <Path
        opacity={0.28}
        d="M128.01 101.09c3.421 1.269 8.391 3.072 8.588 3.174l-4.367 2.818-5.218-4.558c.749-.59.571-.59.997-1.434z"
        fill="url(#paint3_linear_17_84)"
      />
      <Path
        opacity={0.28}
        d="M118.812 107.767c3.421 1.27 8.391 3.073 8.588 3.174l-4.367 2.819-5.217-4.558c.749-.59.571-.59.996-1.435z"
        fill="url(#paint4_linear_17_84)"
      />
      <Path
        opacity={0.28}
        d="M119.675 96.558c3.422 1.27 8.392 3.072 8.589 3.174l-4.368 2.818-5.198-4.564c.73-.584.546-.584.977-1.428z"
        fill="url(#paint5_linear_17_84)"
      />
      <Path
        d="M118.507 109.627h.007c.55 0 .996-.446.996-.996v-3.707a.996.996 0 00-.996-.997h-.007a.996.996 0 00-.996.997v3.707c0 .55.446.996.996.996z"
        fill="#BC532A"
      />
      <Path
        d="M118.514 107.767a3.834 3.834 0 100-7.667 3.834 3.834 0 000 7.667z"
        fill="#9CD861"
      />
      <Path
        d="M118.514 100.093c.213.002.425.021.635.058a4.492 4.492 0 00-2.254 4.443 3.811 3.811 0 002.431 3.066 3.813 3.813 0 01-3.38-6.185 3.816 3.816 0 012.561-1.401l.007.019z"
        fill="#54BA56"
      />
      <Path
        d="M128.213 103.115h.12c.656 0 1.187-.532 1.187-1.187V97.18c0-.656-.531-1.187-1.187-1.187h-.12c-.656 0-1.187.531-1.187 1.187v4.748c0 .655.531 1.187 1.187 1.187z"
        fill="#BC532A"
      />
      <Path
        d="M128.27 100.785a4.799 4.799 0 100-9.598 4.799 4.799 0 000 9.598z"
        fill="#9CD861"
      />
      <Path
        d="M128.27 91.194c.27 0 .54.024.806.07a5.616 5.616 0 00-2.818 5.58 4.739 4.739 0 003.04 3.808 4.805 4.805 0 01-5.812-4.17 4.804 4.804 0 012.83-4.903 4.796 4.796 0 011.96-.41l-.006.025z"
        fill="#54BA56"
      />
      <Path
        d="M119.326 98.227h.007c.55 0 .996-.446.996-.996v-3.707a.996.996 0 00-.996-.997h-.007a.996.996 0 00-.996.997v3.707c0 .55.446.996.996.996z"
        fill="#BC532A"
      />
      <Path
        d="M119.333 96.367a3.833 3.833 0 100-7.666 3.833 3.833 0 000 7.666z"
        fill="#9CD861"
      />
      <Path
        d="M119.333 88.693c.212.002.425.02.634.057a4.493 4.493 0 00-2.253 4.444 3.81 3.81 0 002.431 3.066 3.809 3.809 0 11-.812-7.567z"
        fill="#54BA56"
      />
      <Path
        d="M26.4 78.118l28.677-14.79 44.667-7.077 1.162 2.692-44.82 7.223-28.43 14.847"
        fill="#F9EFD7"
      />
      <Path
        opacity={0.48}
        d="M97.89 121.637l-14.65-5.066-34.225 19.747 23.378 13.406 25.498-28.087z"
        fill="url(#paint6_linear_17_84)"
      />
      <Path
        d="M97.967 110.897c.184.749-.102 10.702-.501 12.593-.4 1.892-3.314 1.6-4.183 1.384-.87-.216-2.476-1.308-3.568-1.53-1.091-.222-6.982-2.367-6.55-3.954.431-1.587 1.745-2.965 3.129-2.819 1.384.146 5.078.991 5.078.991l1.079-8.887"
        fill="#063507"
      />
      <Path
        d="M76.95 36.93a.774.774 0 00-.279-.927 19.175 19.175 0 01-2.977-2.596 3.877 3.877 0 010-.59c.133-1.537.299-3.073.444-4.609.058-.596-.495-.819-.945-.679l.038-.959a.73.73 0 00-1.162-.596c0-.222 0-.444.038-.667.064-.97-1.447-.97-1.51 0-.083 1.2-.14 2.406-.197 3.606a96.58 96.58 0 01-.089-2.71.755.755 0 00-1.51 0c0 2.29.152 4.57.348 6.855-.495-.895-.444-1.835-.577-2.876-.133-1.04-1.644-.965-1.51 0 .19 1.435.088 2.692.964 3.93.472.65 1.015 1.246 1.618 1.777.032.062.073.12.121.171a27.82 27.82 0 004.33 3.332c.666.42 1.269-.349 1.06-.933a.827.827 0 00.056-.247.893.893 0 00.076-.089.826.826 0 00.464-.248l.14.121c.723.616 1.796-.438 1.06-1.066z"
        fill="#F7931E"
      />
      <Path
        d="M93.308 39.126c-3.37-.584-7.236-1.301-8.5-1.758-2.399-.857-9.85-6.348-9.85-6.348s-4.038 4.367-4.057 7.154c-.019 2.786 11.927 9.413 15.38 9.959 1.27.197 3.561.825 6.062 1.479.66-3.456.983-6.968.965-10.486z"
        fill="#7DB53C"
      />
      <Path
        d="M97.193 65.24a86.037 86.037 0 011.656 13.45c.096 4.671 1.524 39.481 1.524 39.481s-3.942 2.336-11.426.159c-1.085-.318-2.463-32.24-2.463-32.24l2.54-16.47"
        fill="#C66B28"
      />
      <Path
        d="M64.287 57.692a.634.634 0 00-.558-.793l-2.984-.425c-.672-.438-1.421-.908-2.1-1.448a26.321 26.321 0 01-.051-2.875c.044-1.035-1.562-1.028-1.606 0v1.01c-.451-1.01-.495-2.426-.686-3.435-.159-.819-1.187-.685-1.479-.07-.063-.304-.14-.634-.203-.914-.203-1.009-1.752-.584-1.549.426.07.361.159.723.235 1.079a.8.8 0 00-1.27.8c.134.463.286.92.458 1.364-.559-.171-1.27.229-1.022.927.634 1.84 1.231 4.19 2.888 5.395 2.095 1.517 5.02 1.81 7.502 2.158a.901.901 0 001.003-.977l.394.076c.882.133 1.327-1.035.736-1.428a.907.907 0 00.292-.87z"
        fill="#F7931E"
      />
      <Path
        d="M83.933 47.48S73.3 52.766 70.85 53.451c-2.45.686-11.699.527-11.699.527s-.774 5.897.825 8.182c1.6 2.285 15.164.762 18.307-.787 3.141-1.549 15.132-5.224 14.56-6.938-.57-1.714-8.911-6.957-8.911-6.957z"
        fill="#9CD861"
      />
      <Path
        d="M81.882 125.413c.184.749-.101 10.702-.501 12.594-.4 1.891-3.313 1.599-4.183 1.384-.87-.216-2.475-1.308-3.567-1.53-1.092-.222-6.983-2.368-6.55-3.955.43-1.586 1.745-2.964 3.128-2.818 1.384.146 5.078.99 5.078.99l1.08-8.886"
        fill="#063507"
      />
      <Path
        d="M82.517 68.597s-4.773 17.62-6.722 33.401c-.47 3.808-4.386 26.367-4.386 26.367s6.456 2.361 12.2.514c0 0 6.83-28.817 7.122-29.376.292-.558 1.358-17.868 1.904-31.261"
        fill="#C66B28"
      />
      <Path
        d="M92.781 43.906l-2.837-.635c-.686.14-6.564 2.97-8.804 7.42a26.87 26.87 0 00-.368 4.018c-.12 1.803-.197 3.605-.172 5.408.003 1.966.154 3.928.451 5.871.14.832.216 1.27.412 2.063.342.263.726.465 1.137.597 8.537 2.387 14.377-2.685 14.599-3.377.222-.692 0-10.353-.133-16.097a5.529 5.529 0 00-4.285-5.268z"
        fill="#9CD861"
      />
      <Path
        d="M84.796 34.429s-1.301 9.553 2.24 10.359c3.543.806 7.395-3.377 7.573-5.338.178-1.962-5.11-8.468-9.813-5.021z"
        fill="#F7931E"
      />
      <Path
        d="M97.116 36.162a8.917 8.917 0 00-1.326-4.158c-1.08-1.968-3.402-2.64-5.44-3.034a4.753 4.753 0 00-2.602.222 2.171 2.171 0 00-3.01-.228 1.74 1.74 0 00-.342 1.904 1.771 1.771 0 00-1.618 1.618 2.538 2.538 0 00.882 2.54 1.537 1.537 0 00-.083 2.043c.895 1.13 2.704.959 3.993 1.054a.546.546 0 00.28-.05c.106.071.219.135.336.19l.203.082a.6.6 0 000 .089c.216.787-.299 1.44.235 2.203.186.281.45.502.761.634.102.045.33.057.4.12.343.312.07.978-.095 1.27a.597.597 0 00.273.826.68.68 0 00.152.203.482.482 0 00.54.336 4.329 4.329 0 002.393-1.27c.374-.255.732-.532 1.072-.83 1.181-1.334 2.387-2.82 2.838-4.584.1-.385.154-.782.158-1.18z"
        fill="#653200"
      />
      <Path
        d="M92.21 79.362a500.704 500.704 0 01-9.267 49.289c-.19.793 1.034 1.13 1.225.336a500.67 500.67 0 009.267-49.288c.108-.793-1.117-1.143-1.225-.337z"
        fill="#063507"
      />
      <Path d="M80.6 60.092l4.704-1.943-3.84 9.87-.864-7.927z" fill="#7DB53C" />
      <Defs>
        <LinearGradient
          id="paint0_linear_17_84"
          x1={105.349}
          y1={145.224}
          x2={96.9451}
          y2={139.943}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopOpacity={0} />
          <Stop offset={1} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_17_84"
          x1={64.3698}
          y1={118.285}
          x2={53.8076}
          y2={111.532}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopOpacity={0} />
          <Stop offset={1} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_17_84"
          x1={156.535}
          y1={118.622}
          x2={143.326}
          y2={109.094}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopOpacity={0} />
          <Stop offset={1} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_17_84"
          x1={134.021}
          y1={105.419}
          x2={123.763}
          y2={98.862}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopOpacity={0} />
          <Stop offset={1} />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_17_84"
          x1={124.823}
          y1={112.096}
          x2={114.566}
          y2={105.54}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopOpacity={0} />
          <Stop offset={1} />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_17_84"
          x1={125.68}
          y1={100.887}
          x2={115.429}
          y2={94.3299}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopOpacity={0} />
          <Stop offset={1} />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear_17_84"
          x1={64.5983}
          y1={142.26}
          x2={79.6038}
          y2={119.752}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.01} stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#29ABE2" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Maps
