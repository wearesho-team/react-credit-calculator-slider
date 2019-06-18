import * as React from "react";
import { ControlContext } from "react-credit-calculator";
import BaseSlider, { SliderProps } from "rc-slider";

export const Slider: React.FC<SliderProps> = (props) => {
    const context = React.useContext(ControlContext);
    return <BaseSlider {...props} {...context} />;
};
