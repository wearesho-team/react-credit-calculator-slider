import * as React from "react";
import * as Calculator from "react-credit-calculator";
import * as renderer from "react-test-renderer";

import { Slider } from "../src";

describe("<Slider />", () => {
    const value: Calculator.ControlContextValue = {
        min: 250,
        max: 2000,
        value: 1000,
        step: 50,
        onChange: (next) => next,
    };

    it("renders correctly", () => {
        const tree = renderer
            .create(
                <Calculator.ControlContext.Provider value={value}>
                    <Slider/>
                </Calculator.ControlContext.Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
