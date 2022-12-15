import * as React from "react";
import { SVGProps } from "react";
import { Icon, IconProps } from "@template-pro/rc-ui";
function SvgCloseCircleFilled(componentProps: IconProps) {
  const IconNode = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M511.33 63.68C264.19 63.68 63.84 264 63.84 511.17s200.35 447.49 447.49 447.49 447.5-200.35 447.5-447.49S758.48 63.68 511.33 63.68zm200.49 597.13a24 24 0 0 1 0 33.94l-17 17a24 24 0 0 1-33.94 0L511.71 562.53 362.52 711.72a24 24 0 0 1-33.94 0l-17-17a24 24 0 0 1 0-33.94L460.8 511.62l-149.19-149.2a24 24 0 0 1 0-33.94l17-17a24 24 0 0 1 33.94 0L511.71 460.7l149.2-149.19a24 24 0 0 1 33.94 0l17 17a24 24 0 0 1 0 33.94L562.63 511.62z"
        data-spm-anchor-id="a313x.7781069.0.i3"
      />
    </svg>
  );
  return <Icon {...componentProps} component={IconNode} />;
}
SvgCloseCircleFilled.displayName = "CloseCircleFilled";
export default SvgCloseCircleFilled;
