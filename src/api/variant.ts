// import { apiRequest } from '../utils/api';
// import { ABEX_API_BASE_URL } from '../utils/constants';

export function fetchVariant({
  token,
  flag,
}: {
  token: string
  flag: object
}): {
  data: {
    variant_key: string,
    token: string,
    flag: object
  }
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
      variant_key: 'A', 
      token,
      flag
    }
  }
}

export function fetchVariantsInBatch({
    token,
    flags,
  }: {
    token: string
    flags: { key: string; constraints: any; }[]
  }): {
    data: {
      variant_key: string,
      key: string,
    }[]
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
      data: [
        {
          key: "experiment1",
          variant_key: "A"
        },
        {
          key: "experiment2",
          variant_key: "B"
        }
      ]
    }
}
