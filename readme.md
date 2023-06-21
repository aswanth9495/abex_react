## abex-react

`abex-react` is a React package that provides components and utilities for handling A/B testing experiments using the Abex platform. It allows you to define and render different content based on assigned variant keys. The package includes the following modules:

### Installation

To install `abex-react`, you can use npm or yarn:

```shell
npm install abex-react
```

or

```shell
yarn add abex-react
```

### AbexProvider

The `AbexProvider` component is used to wrap your application and provide access to the variant keys for experiments. It serves as the context provider for the child components that rely on A/B testing experiments. The `AbexProvider` component accepts the following props:

| Prop          | Type                                                | Description                                                                                                 |
| ------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| experiments   | Array of objects: `{ experimentKey: string, experimentData: object }` | An array of experiments with their keys and data.                                                           |
| onInit        | Function                                            | An optional callback function called after the `AbexClient` instance is created.                           |
| children      | ReactNode                                           | The child components to be wrapped by the `AbexProvider`.                                                    |

#### Examples

1. Basic Usage:

```jsx
import React from 'react';
import { AbexProvider } from 'abex-react';

const experiments = [
  { experimentKey: 'experiment1', experimentData: {} },
  { experimentKey: 'experiment2', experimentData: {} },
];

const App = () => {
  return (
    <AbexProvider experiments={experiments}>
      {/* Your application components */}
    </AbexProvider>
  );
};
```

2. With `onInit` Callback:

```jsx
import React from 'react';
import { AbexProvider } from 'abex-react';

const experiments = [
  { experimentKey: 'experiment1', experimentData: {} },
  { experimentKey: 'experiment2', experimentData: {} },
];

const onProviderInit = (client) => {
  console.log('AbexClient instance created:', client);
  // Perform initialization or other tasks with the client
};

const App = () => {
  return (
    <AbexProvider experiments={experiments} onInit={onProviderInit}>
      {/* Your application components */}
    </AbexProvider>
  );
};
```

In the examples above, we demonstrate the usage of the `AbexProvider` component. In the first example, we provide an array of experiments to the `experiments` prop, and in the second example, we also specify an `onInit` callback function that will be called after the `AbexClient` instance is created. The `AbexProvider` component wraps your application components, making the variant keys available through the `AbexContext` for child components to access and render different content based on the assigned variant keys.

### Identifying the User with `abexClient.identify`

To identify the user and associate a user ID with the `AbexClient` instance, you can use the `abexClient.identify(userID)` method. This allows you to retrieve the user ID and use it as a token for A/B testing experiments.

Here's an example of how to use `abexClient.identify` in conjunction with `AbexProvider`:

```jsx
import React from 'react';
import { AbexProvider } from 'abex-react';
import AbexClient from '../utils/abexClient';

const experiments = [
  { experimentKey: 'experiment1', experimentData:

 {} },
  { experimentKey: 'experiment2', experimentData: {} },
];

const onProviderInit = (client) => {
  console.log('AbexClient instance created:', client);
  // Perform initialization or other tasks with the client
  client.identify('user123'); // Identify the user with a user ID
};

const App = () => {
  return (
    <AbexProvider experiments={experiments} onInit={onProviderInit}>
      {/* Your application components */}
    </AbexProvider>
  );
};
```

In this example, we define an `onProviderInit` callback function, which is called after the `AbexClient` instance is created. Inside this callback, we have access to the `AbexClient` instance, and we use the `identify` method to associate the user with the ID `'user123'`. By identifying the user, the `AbexClient` instance will use the user ID as a token when retrieving variant keys for experiments.

Note: Make sure to adapt the example to your specific use case and replace `'user123'` with the appropriate user ID.

By combining the `abexClient.identify` method with `AbexProvider`, you can effectively identify the user and leverage the assigned variant keys in your A/B testing experiments.


## AbexCase

The `AbexCase` component is used within the `AbexSwitch` component to define different cases or variants based on the assigned variant key. It allows rendering different content based on the variant assigned to the user.

### Usage

```jsx
<AbexCase variant={variantName}>
  {/* Content for the specified variant */}
</AbexCase>
```

### Props

| Prop     | Type   | Required | Description                                                  |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| variant  | string | Yes      | The variant key that defines which content to render.         |
| children | ReactNode | Yes      | The content to be rendered when the variant matches. It can be any valid React element or JSX. |

### Example

```jsx
import { AbexCase } from 'abex-react';

const MyComponent = () => {
  const variant = 'variant1';

  return (
    <AbexCase variant={variant}>
      <h1>Welcome to Variant 1</h1>
      <p>This is the content for variant 1.</p>
    </AbexCase>
  );
};
```

In the example above, we define an `AbexCase` component with the `variant` prop set to `'variant1'`. When the assigned variant key matches `'variant1'`, the content within the `AbexCase` component will be rendered. In this case, it renders a heading and a paragraph specific to variant 1.

Use the `AbexCase` component within an `AbexSwitch` component to handle different cases or variants based on the assigned variant key in your A/B testing implementation.

## AbexSwitch

The `AbexSwitch` component is a higher-level component that allows rendering different content based on the assigned variant key. It acts as a switch statement to conditionally render the appropriate content based on the assigned variant key.

### Usage

```jsx
<AbexSwitch experimentKey={experimentKey}>
  {/* AbexCase components for different variants */}
</AbexSwitch>
```

### Props

| Prop          | Type   | Required | Description                                                       |
| ------------- | ------ | -------- | ----------------------------------------------------------------- |
| experimentKey | string | Yes      | The experiment key that defines which variant to render.           |
| children      | ReactNode | Yes      | The `AbexCase` components representing different variants/cases.   |

### Example

```jsx
import { AbexSwitch, AbexCase } from 'abex-react';

const MyComponent = () => {
  const experimentKey = 'experiment1';

  return (
    <AbexSwitch experimentKey={experimentKey}>
      <AbexCase variant="variant1">
        <h1>Welcome to Variant 1</h1>
        <p>This is the content for variant 1.</p>
      </AbexCase>
      <AbexCase variant="variant2">
        <h1>Welcome to Variant 2</h1>
        <p>This is the content for variant 2.</p>
      </AbexCase>
      <AbexCase variant="default">
        <h1>Welcome to Default Variant</h1>
        <p>This is the default content.</p>
      </AbexCase>
    </AbexSwitch>
  );
};
```

In the example above, we define an `AbexSwitch` component with the `experimentKey` prop set to `'experiment1'`. Inside the `AbexSwitch`, we define multiple `AbexCase` components with different `variant` props. When the assigned variant key matches a particular variant, the content within the corresponding `AbexCase` component will be rendered. If no matching variant is found, the content within the `AbexCase` component with `variant="default"` will be rendered.

Use the `AbexSwitch` component along with `AbexCase` components to conditionally render different content based on the assigned variant key in your A/B testing implementation.

## abexClient

The `abexClient` is a utility class provided by the `abex-react` package that interacts with the Abex platform APIs and handles A/B testing experiments. It allows you to fetch variant keys for experiments and identify users with a user ID. Here is the documentation for the `abexClient` class and its available methods:

### Constructor

The `abexClient` constructor creates an instance of the `AbexClient` class.

```typescript
const abexClient = new AbexClient(experiments: { experimentKey: string; experimentData: object; }[], callback?: (client: AbexClient) => void)
```

| Parameter  | Type                                                         | Description                                                  |
| ---------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| experiments | Array of objects: `{ experimentKey: string; experimentData: object; }` | An array of experiments with their keys and data.             |
| callback   | Function                                                     | An optional callback function called after the `AbexClient` instance is created. |

#### Examples

```jsx
import AbexClient from 'abexClient';

const experiments = [
  { experimentKey: 'experiment1', experimentData: {} },
  { experimentKey: 'experiment2', experimentData: {} },
];

const onClientInit = (client) => {
  console.log('AbexClient instance created:', client);
  // Perform initialization or other tasks with the client
};

const abexClient = new AbexClient(experiments, onClientInit);
```

In the example above, we create an instance of the `AbexClient` class with an array of experiments and an `onClientInit` callback function. The `onClientInit` function will be called after the `AbexClient` instance is created, allowing you to perform any necessary initialization or tasks with the client.

### Methods

#### `identify`

The `identify` method is used to associate a user with a user ID in the `AbexClient` instance.

```typescript
abexClient.identify(userID: string): void
```

| Parameter | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| userID    | string | The user ID to be associated. |

#### Example

```jsx
const userID = 'user123';
abexClient.identify(userID);
```

In the example above, we use the `identify` method to associate the user with the ID `'user123'`. This allows the `AbexClient` instance to use the user ID as a token when fetching variant keys for experiments.

#### `getVariantKey`

The `getVariantKey` method retrieves the variant key for each experiment in the `AbexClient` instance.

```typescript
abexClient.getVariantKey(): Promise<Record<string, string | null>>
```

#### Example

```jsx
abexClient.getVariantKey().then((variantKeys) => {
  console.log('Variant Keys:', variantKeys);
  // Use the variant keys for rendering different content based on experiments
});
```

In the example above, we use the `getVariantKey` method to fetch the variant keys for experiments. The method returns a promise that resolves to an object containing experiment keys and their corresponding variant keys. You can then use the variant keys to render different content based on the assigned variants.

#### `getVariantsInBatch`

The `getVariantsInBatch` method retrieves the variant keys for experiments in batch.

```typescript
abexClient.getVariantsInBatch(): Promise<Record<string, string | null>>
```

#### Example

```jsx
abexClient.getVariantsInBatch().then((variantKeys) => {
  console.log('Variant Keys:', variantKeys);
  // Use the variant keys for rendering different content based on experiments
});
```

In the example above, we use the `getVariantsInBatch` method to fetch the variant keys for experiments in a batch. The method returns a promise that resolves to an object containing experiment keys and their corresponding variant keys. You can then use the variant keys to render different content based on the assigned variants.

## useAbex

The `useAbex` hook provides a simple way to access the variant key for a particular experiment within a component. It takes an experiment key as an argument and returns the variant key associated with that experiment. Example usage:

```jsx
import React from 'react';
import { useAbex } from 'abex-react';

const MyComponent = () => {
  const variantKey = useAbex('experiment1');

  return (
    <div>
      {/* Use the variant key in your component */}
    </div>
  );
};
```
