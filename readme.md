# abex_react

The `abex_react` package provides a set of components for handling A/B experiments in React applications.

## Installation

```bash
yarn add abex_react
```

or


```bash
npm install abex_react
```

## Components

### AbexProvider

The `AbexProvider` component is used to wrap your application and provide the necessary context for A/B experiment evaluation.

#### Usage

```jsx
import React from 'react';
import { AbexProvider } from 'abex_react';

function App() {
  return (
    <AbexProvider experimentKey="Sample Experiment Key" experimentData={SampleData}>
      {/* Your application components */}
    </AbexProvider>
  );
}
```

#### Props

| Name           | Type             | Required | Description                                       |
| -------------- | ---------------- | -------- | ------------------------------------------------- |
| experimentKey  | string           | Yes      | The experiment key to identify the A/B experiment |
| experimentData | object or string | Yes      | The data specific to the user and the experiment  |

### AbexSwitch

The `AbexSwitch` component is a higher-level component that allows rendering different content based on the assigned variant key. It acts as a switch statement to conditionally render the appropriate content based on the assigned variant key.

#### Usage

```jsx
import React from 'react';
import { AbexSwitch, AbexCase } from 'abex_react';

function MyComponent() {
  return (
    <AbexSwitch>
      <AbexCase variant="A">
        Render variant A
      </AbexCase>
      <AbexCase variant="B">
        Render variant B
      </AbexCase>
      <AbexCase variant="default">
        Default Variant
      </AbexCase>
    </AbexSwitch>
  );
}
```

#### Props

| Name     | Type      | Required | Description                      |
| -------- | --------- | -------- | -------------------------------- |
| children | ReactNode | Yes      | The cases to evaluate and render |

### AbexCase

The `AbexCase` component is used within the `AbexSwitch` component to define a case based on the assigned variant key. It allows rendering specific content for each variant.

#### Usage

```jsx
import React from 'react';
import { AbexSwitch, AbexCase } from 'abex_react';

function MyComponent() {
  return (
    <AbexSwitch>
      <AbexCase variant="A">
        Render variant A
      </AbexCase>
      <AbexCase variant="B">
        Render variant B
      </AbexCase>
      <AbexCase variant="default">
        Default Variant
      </AbexCase>
    </AbexSwitch>
  );
}
```

#### Props

| Name     | Type      | Required | Description                                |
| -------- | --------- | -------- | ------------------------------------------ |
| variant  | string    | Yes      | The variant key to match for rendering     |
| children | ReactNode | Yes      | The content to render for the matched case |

---


You can import the components from the `abex_react` package using:
```jsx
import { AbexProvider, AbexSwitch, AbexCase } from 'abex_react';
```

This allows you to use the `AbexProvider`, `AbexSwitch`, and `AbexCase` components in your application.

Here's an example of how you can use the `abex_react` components in your application:

```jsx
import React from 'react';
import { AbexProvider, AbexSwitch, AbexCase } from 'abex_react';

const SampleData = {
  // Your experiment data
};

function App() {
  return (
    <AbexProvider experimentKey="Sample Experiment Key" experimentData={SampleData}>
      <div>
        <h1>A/B Experiment Example</h1>
        <AbexSwitch>
          <AbexCase variant="A">
            <p>Render variant A</p>
          </AbexCase>
          <AbexCase variant="B">
            <p>Render variant B</p>
          </AbexCase>
          <AbexCase variant="default">
            <p>Default Variant</p>
          </AbexCase>
        </AbexSwitch>
      </div>
    </AbexProvider>
  );
}

export default App;
```

This example demonstrates a basic usage of the `abex_react` package to handle A/B experiments in a React application.

For more information and advanced usage, please refer to the package documentation and examples provided by the `abex_react` package.