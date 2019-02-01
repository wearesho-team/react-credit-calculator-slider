# React Credit Calculator

[![Build Status](https://travis-ci.org/wearesho-team/react-credit-calculator-slider.svg?branch=master)](https://travis-ci.org/wearesho-team/react-credit-calculator-slider)

## Features
- Integrates [rc-slider](https://www.npmjs.com/package/rc-slider) 
with [react-credit-calculator](https://www.npmjs.com/package/react-credit-calculator)
context
- Written on Typescript

## Installation
Using [npm](https://npmjs.com/)
```bash
npm i react-credit-calculator-slider@^2.0
```

## Usage

```typescript jsx
import * as React from "react";
import * as Calculator from "react-credit-calculator";
import { Slider } from "react-credit-calculator-slider";

const conditions: Calculator.ControllerProps;

return (
    <Calculator.Controller {...conditions}>
    
        {/** Controls for amount */}
        <Calculator.ControlWrapper type="amount">
            <Slider /> {/** See rc-slider for more props */}
        </Calculator.ControlWrapper>
    </Calculator.Controller>
);
```

## Contributors
- [Alexander <horat1us> Letnikow](mailto:reclamme@gmail.com)

## License
[MIT](./LICENSE)
