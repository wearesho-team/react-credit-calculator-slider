import * as React from "react";
import * as Calculator from "react-credit-calculator";
import BaseSlider, { SliderProps } from "rc-slider";

export const Slider: React.FunctionComponent<SliderProps> = (props) => (
    <Calculator.ControlContext.Consumer>
        {(value: Calculator.ControlContextValue) => <BaseSlider {...props} {...value} />}
    </Calculator.ControlContext.Consumer>
);
