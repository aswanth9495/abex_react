// import { apiRequest } from '../utils/api';
// import { ABEX_API_BASE_URL } from '../utils/constants';

export function fetchVariant({
  token,
  flags,
}: {
  token: string
  flags: object
}): {
  data: {
    variant_key: string,
    token: string,
    flags: object
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
      flags
    }
  }
}
