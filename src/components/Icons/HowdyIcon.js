import * as React from 'react';

function HowdyIcon() {
  return (
    <svg
      className="howdy drawIn1x"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 482 253"
    >
      <g filter="url(#filter0_d)" className="flicker0">
        <path
          d="M11 165.456c48.893-.44 162.379-154.015 119.275-154.455-37.85-.377-29.701 122.552-48.61 162.973 16.833-30.898 27.845-75.153 44.614-68.27 16.77 6.884-9.69 70.344 2.58 65.724 13.844-14.93 23.031-60.098 54.902-65.347-15.448 2.232-30.33 25.554-30.896 43.847-.283 9.241 3.713 18.828 14.567 18.451 5.978-.22 11.453-3.772 15.323-8.361 9.092-10.781 21.772-57.394 11.672-50.982-10.068 6.381 13.277 19.205 28.065-4.746-2.234 14.458-7.425 58.054-4.122 60.663 6.828 5.406 27.153-52.397 27.153-52.397s-.158 47.053 7.676 49.379c10.226 3.049 7.551-69.212 20.451-63.366 8.967 54.251 22.59-12.164 50.875 3.175-21.929-12.321-40.398 33.757-36.874 51.108 2.58 12.729 14.693 9.366 21.835 3.489 36.151-29.766 56.853-122.74 41.877-123.244-21.772-.723-53.612 228.351 18.563 69.244 1.51 8.298-18.532 53.685.566 59.249 19.067 5.563 52.7-66.164 34.672-59.878-16.895 5.91-21.992 110.545-50.12 137.262-22.559 21.437-55.311-67.263 116.192-95.898"
          stroke="#FF3EBE"
          strokeWidth={7.15}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x={0.425}
          y={0.425}
          width={481.386}
          height={252.432}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={3.5} />
          <feColorMatrix values="0 0 0 0 0.882353 0 0 0 0 0.160784 0 0 0 0 0.639216 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default HowdyIcon;
