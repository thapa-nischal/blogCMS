import React from "react";
export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Explore = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M9.87868 9.87869L15.5355 8.46448L14.1213 14.1213L8.46446 15.5355L9.87868 9.87869Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

export const Hackathon = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M14.1809 4.2755C14.581 4.3827 14.8185 4.79396 14.7113 5.19406L10.7377 20.0238C10.6304 20.4239 10.2192 20.6613 9.81909 20.5541C9.41899 20.4469 9.18156 20.0356 9.28876 19.6355L13.2624 4.80583C13.3696 4.40573 13.7808 4.16829 14.1809 4.2755Z"
          fill="#1C274C"
        ></path>{" "}
        <path
          d="M16.4425 7.32781C16.7196 7.01993 17.1938 6.99497 17.5017 7.27206L19.2392 8.8358C19.9756 9.49847 20.5864 10.0482 21.0058 10.5467C21.4468 11.071 21.7603 11.6342 21.7603 12.3295C21.7603 13.0248 21.4468 13.5881 21.0058 14.1123C20.5864 14.6109 19.9756 15.1606 19.2392 15.8233L17.5017 17.387C17.1938 17.6641 16.7196 17.6391 16.4425 17.3313C16.1654 17.0234 16.1904 16.5492 16.4983 16.2721L18.1947 14.7452C18.9826 14.0362 19.5138 13.5558 19.8579 13.1467C20.1882 12.7541 20.2603 12.525 20.2603 12.3295C20.2603 12.1341 20.1882 11.9049 19.8579 11.5123C19.5138 11.1033 18.9826 10.6229 18.1947 9.91383L16.4983 8.387C16.1904 8.10991 16.1654 7.63569 16.4425 7.32781Z"
          fill="#1C274C"
        ></path>{" "}
        <path
          d="M7.50178 8.387C7.80966 8.10991 7.83462 7.63569 7.55752 7.32781C7.28043 7.01993 6.80621 6.99497 6.49833 7.27206L4.76084 8.8358C4.0245 9.49847 3.41369 10.0482 2.99428 10.5467C2.55325 11.071 2.23975 11.6342 2.23975 12.3295C2.23975 13.0248 2.55325 13.5881 2.99428 14.1123C3.41369 14.6109 4.02449 15.1606 4.76082 15.8232L6.49833 17.387C6.80621 17.6641 7.28043 17.6391 7.55752 17.3313C7.83462 17.0234 7.80966 16.5492 7.50178 16.2721L5.80531 14.7452C5.01743 14.0362 4.48623 13.5558 4.14213 13.1467C3.81188 12.7541 3.73975 12.525 3.73975 12.3295C3.73975 12.1341 3.81188 11.9049 4.14213 11.5123C4.48623 11.1033 5.01743 10.6229 5.80531 9.91383L7.50178 8.387Z"
          fill="#1C274C"
        ></path>{" "}
      </g>
    </svg>
  );
};

export const CodexLogo = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 32 32"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M19.3517 7.61665L15.3929 4.05375C14.2651 3.03868 13.7012 2.53114 13.0092 2.26562L13 5.00011C13 7.35713 13 8.53564 13.7322 9.26787C14.4645 10.0001 15.643 10.0001 18 10.0001H21.5801C21.2175 9.29588 20.5684 8.71164 19.3517 7.61665Z"
          fill="#1C274C"
        ></path>{" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V13.5629C22 12.6901 22 12.0344 21.9574 11.5001H18L17.9051 11.5001C16.808 11.5002 15.8385 11.5003 15.0569 11.3952C14.2098 11.2813 13.3628 11.0198 12.6716 10.3285C11.9803 9.63726 11.7188 8.79028 11.6049 7.94316C11.4998 7.16164 11.4999 6.19207 11.5 5.09497L11.5092 2.26057C11.5095 2.17813 11.5166 2.09659 11.53 2.01666C11.1214 2 10.6358 2 10.0298 2C6.23869 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22ZM10.9697 15.4697C11.2626 15.1768 11.7374 15.1768 12.0303 15.4697L13.0303 16.4697C13.3232 16.7626 13.3232 17.2374 13.0303 17.5303L12.0303 18.5303C11.7374 18.8232 11.2626 18.8232 10.9697 18.5303C10.6768 18.2374 10.6768 17.7626 10.9697 17.4697L11.4393 17L10.9697 16.5303C10.6768 16.2374 10.6768 15.7626 10.9697 15.4697ZM10.7022 14.2633C10.8477 13.8755 10.6512 13.4432 10.2633 13.2978C9.8755 13.1523 9.44319 13.3488 9.29775 13.7367L7.79775 17.7367C7.65231 18.1245 7.84882 18.5568 8.23666 18.7022C8.6245 18.8477 9.05681 18.6512 9.20225 18.2633L10.7022 14.2633ZM7.53033 13.4697C7.82322 13.7626 7.82322 14.2374 7.53033 14.5303L7.06066 15L7.53033 15.4697C7.82322 15.7626 7.82322 16.2374 7.53033 16.5303C7.23744 16.8232 6.76256 16.8232 6.46967 16.5303L5.46967 15.5303C5.17678 15.2374 5.17678 14.7626 5.46967 14.4697L6.46967 13.4697C6.76256 13.1768 7.23744 13.1768 7.53033 13.4697Z"
          fill="#1C274C"
        ></path>{" "}
      </g>
    </svg>
  );
};

export const WriteIcon = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.0992 2.39109C15.6207 0.869636 18.0875 0.869636 19.6089 2.39109C21.1304 3.91255 21.1304 6.37932 19.6089 7.90077L12.0149 15.4948C11.5869 15.9228 11.3255 16.1842 11.0342 16.4115C10.691 16.6792 10.3196 16.9087 9.92667 17.096C9.59315 17.2549 9.24244 17.3718 8.66818 17.5632L5.99553 18.4541L5.35386 18.668C4.77951 18.8594 4.14629 18.7099 3.7182 18.2818C3.2901 17.8537 3.14062 17.2205 3.33207 16.6462L4.43683 13.3318C4.62822 12.7576 4.7451 12.4069 4.90405 12.0734C5.09132 11.6804 5.32084 11.309 5.58856 10.9658C5.81578 10.6745 6.07719 10.4131 6.50525 9.98509L14.0992 2.39109ZM5.96092 16.8845L5.11556 16.0391L5.84398 13.8538C6.05606 13.2176 6.14366 12.9589 6.25814 12.7187C6.39854 12.4241 6.57061 12.1457 6.77132 11.8883C6.93497 11.6785 7.12718 11.4845 7.60141 11.0102L13.4924 5.11927C13.7355 5.72927 14.147 6.46549 14.8408 7.15927C15.5345 7.85306 16.2708 8.26447 16.8807 8.50764L10.9898 14.3986C10.5155 14.8728 10.3215 15.065 10.1117 15.2287C9.85436 15.4294 9.57594 15.6015 9.28134 15.7419C9.04113 15.8564 8.78244 15.944 8.14619 16.156L5.96092 16.8845ZM18.076 7.31241C17.9521 7.28522 17.7973 7.24432 17.6213 7.18325C17.1373 7.01532 16.5006 6.69778 15.9014 6.09861C15.3022 5.49944 14.9847 4.86276 14.8168 4.37873C14.7557 4.2027 14.7148 4.04787 14.6876 3.92404L15.1599 3.45175C16.0956 2.51608 17.6126 2.51608 18.5483 3.45175C19.4839 4.38742 19.4839 5.90444 18.5483 6.84011L18.076 7.31241ZM3.25002 22C3.25002 21.5858 3.58581 21.25 4.00002 21.25H20V22.75H4.00002C3.58581 22.75 3.25002 22.4142 3.25002 22Z"
          fill="#1C274C"
        ></path>{" "}
      </g>
    </svg>
  );
};