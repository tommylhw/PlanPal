import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const HomeSvg = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G strokeWidth={0} />
    <G strokeLinecap="round" strokeLinejoin="round" />
    <Path
      d="M22 12.204v1.521c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715M15 18H9"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default HomeSvg;
