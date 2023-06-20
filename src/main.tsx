import React from 'react';
import ReactDOM from 'react-dom';

import {AbexProvider, AbexClient, AbexSwitch, AbexCase } from './index';



const experiments = [
  {
    experimentKey: "experiment1",
    experimentData: {}
  },
  {
    experimentKey: "experiment2",
    experimentData: {}
  }
]

const onInit = (abexClient: AbexClient) => {
  // Perform identification logic here
  const userID = '12345'; // Replace with your logic to get the userID
  abexClient.identify(userID);
};

ReactDOM.render(
  <AbexProvider
    experiments={experiments}
    onInit={onInit}
  >
    <AbexSwitch experimentKey="experiment2">
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

    <AbexSwitch experimentKey="experiment1">
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