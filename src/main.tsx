import React from 'react';
import ReactDOM from 'react-dom';

import {AbexProvider, AbexClient, AbexSwitch, AbexCase } from './index';

const experimentKey = 'your-experiment-key';
const experimentData = {};

const onInit = (abexClient: AbexClient) => {
  // Perform identification logic here
  const userID = '12345'; // Replace with your logic to get the user ID
  abexClient.identify(userID);
};

ReactDOM.render(
  <AbexProvider
    experimentKey={experimentKey}
    experimentData={experimentData}
    onInit={onInit}
  >
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
  </AbexProvider>,
  document.getElementById('root')
);