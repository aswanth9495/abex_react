// import { apiRequest } from '../utils/api';
// import { ABEX_API_BASE_URL } from '../utils/constants';

export function fetchVariant({
  token,
  flag,
}: {
  token: string;
  flag: object;
}): {
  data: {
    variantKey: string;
    token: string;
    flag: object;
  };
} {
  // return apiRequest(
  //   'POST',
  //   `${ABEX_API_BASE_URL}/evaluate`,
  //   {
  //     experiment_key: experimentKey,
  //     user_context: experimentData,
  //   },
  // );
  return {
    data: {
      variantKey: 'A',
      token,
      flag,
    },
  };
}

export function fetchVariantsInBatch({
  token,
  flags,
}: {
  token: string;
  flags: { key: string; constraints: object }[];
}): {
  token: string;
  flags: { key: string; constraints: object }[];
  data: {
    variantKey: string;
    key: string;
  }[];
} {
  // return apiRequest(
  //   'POST',
  //   `${ABEX_API_BASE_URL}/evaluate`,
  //   {
  //     experiment_key: experimentKey,
  //     user_context: experimentData,
  //   },
  // );
  return {
    token,
    flags,
    data: [
      {
        key: 'experiment1',
        variantKey: 'A',
      },
      {
        key: 'experiment2',
        variantKey: 'B',
      },
    ],
  };
}
