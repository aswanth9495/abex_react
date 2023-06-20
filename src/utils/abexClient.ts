import { fetchVariant } from '../api/variant'

class AbexClient {
  private experimentKey: string
  private experimentData: object
  private token: string | null;

  constructor(experimentKey: string, experimentData: object, callback?: (client: AbexClient) => void) {
    this.experimentKey = experimentKey
    this.experimentData = experimentData
    this.token = "";

    if (callback) {
      callback(this);
    }
  }

  public identify(userID: string): void {
    this.token = userID;
  }

  public async getVariantKey(): Promise<string | null> {
    try {
      const response = await fetchVariant({
        token: this.token || '',
        flags: {
          key: this.experimentKey,
          constraints: this.experimentData
        }
      });
      return response.data.variant_key;
    } catch (error) {
      // Add error handling here
      return null;
    }
  }
}

export default AbexClient
