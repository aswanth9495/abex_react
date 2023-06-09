// import { apiRequest } from '../utils/api';
// import { ABEX_API_BASE_URL } from '../utils/constants';

export function fetchVariant({
  experimentKey,
  experimentData,
}: {
  experimentKey: string
  experimentData: any
}): {
  data: {
    variant_key: string
    experimentKey: string
    experimentData: any
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
      variant_key: 'sample_variant123',
      experimentKey,
      experimentData,
    },
  }
}
