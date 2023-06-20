import { fetchVariant, fetchVariantsInBatch } from '../api/variant';


class AbexClient {
  private token: string | null;

  constructor(private experiments: {experimentKey: string, experimentData: object}[], callback?: (client: AbexClient) => void) {
    this.experiments = experiments;
    this.token = null;

    if (callback) {
      callback(this);
    }
  }

  public identify(userID: string): void {
    this.token = userID;
  }

  public async getVariantKey(): Promise<Record<string, string | null>> {
    const experiment = this.experiments[0];
    const variantKeys: Record<string, string | null> = {};
    try {
      if (experiment) {
        const response = await fetchVariant({
          token: this.token || '',
          flag: {
            key: experiment.experimentKey,
            constraints: experiment.experimentData,
          },
        });
        variantKeys[experiment.experimentKey] = response.data.variant_key;
      }
      return variantKeys;
    } catch (error) {
      // Add error handling here
      return {};
    }
  }

  public async getVariantsInBatch(): Promise<Record<string, string | null>> {
    const flags = this.experiments.map((experiment) => ({
      key: experiment.experimentKey,
      constraints: experiment.experimentData,
    }));

    try {
      const response = await fetchVariantsInBatch({
        token: this.token || '',
        flags,
      });

      const variantKeys: Record<string, string | null> = {};
      response.data.forEach((result: any) => {
        variantKeys[result.key] = result.variant_key;
      });
      return variantKeys;
    } catch (error) {
      // Add error handling here
      return {};
    }
  }
}

export default AbexClient;

