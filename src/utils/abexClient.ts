import { fetchVariant, fetchVariantsInBatch } from '../api/variant';
import { ABEX_FEATURE_COOKIE_KEY } from './constants';
import { getCookie } from './cookies';

/**
 * Represents a client for handling AB testing experiments.
 */
class AbexClient {
  private token: string | null;
  private experiments: { experimentKey: string; experimentData: object }[];
  private experimentCache: Record<string, string | null>;

  /**
   * Creates an instance of AbexClient.
   * @param experiments - Array of experiments to be handled.
   * @param callback - Optional callback function to be called
   * after the AbexClient instance is created.
   */
  constructor(
    experiments: { experimentKey: string; experimentData: object }[],
    callback?: (client: AbexClient) => void,
  ) {
    this.token = null;
    this.experiments = experiments;
    this.experimentCache = this.getExperimentCache();

    if (callback) {
      callback(this);
    }
  }

  /**
   * Retrieves the experiment cache from the cookie.
   * @returns The experiment cache object.
   */
  private getExperimentCache(): Record<string, string | null> {
    const cacheCookie = getCookie(ABEX_FEATURE_COOKIE_KEY);
    if (cacheCookie) {
      try {
        const cacheData = JSON.parse(cacheCookie);
        if (cacheData.experiments) {
          return cacheData.experiments;
        }
      } catch (error) {
        // handle Error
      }
    }
    return {};
  }

  /**
   * Identifies the user by setting the user ID token.
   * @param userID - The user ID to be set.
   */
  public identify(userID: string): void {
    this.token = userID;
  }

  /**
   * Retrieves the variant key for each experiment.
   * @returns A promise resolving to an object containing the experiment
   *  keys and their corresponding variant keys.
   */
  public async getVariantKey(): Promise<Record<string, string | null>> {
    const variantKeys: Record<string, string | null> = {};

    for (const experiment of this.experiments) {
      const cachedVariantKey = this.experimentCache[experiment.experimentKey];
      if (cachedVariantKey) {
        variantKeys[experiment.experimentKey] = cachedVariantKey;
        continue;
      }

      try {
        const response = await fetchVariant({
          token: this.token || '',
          flag: {
            key: experiment.experimentKey,
            constraints: experiment.experimentData,
          },
        });
        variantKeys[experiment.experimentKey] = response.data.variantKey;
      } catch (error) {
        // Add error handling here
      }
    }

    return variantKeys;
  }

  /**
   * Retrieves the variant keys for experiments in batch.
   * @returns A promise resolving to an object containing
   * the experiment keys and their corresponding variant keys.
   */
  public async getVariantsInBatch(): Promise<Record<string, string | null>> {
    const variantKeys: Record<string, string | null> = {};
    const experimentsToFetch: {
      experimentKey: string;
      experimentData: object;
    }[] = [];

    for (const experiment of this.experiments) {
      const cachedVariantKey = this.experimentCache[experiment.experimentKey];
      if (cachedVariantKey) {
        variantKeys[experiment.experimentKey] = cachedVariantKey;
      } else {
        experimentsToFetch.push(experiment);
      }
    }

    if (experimentsToFetch.length > 0) {
      const flags = experimentsToFetch.map((experiment) => ({
        key: experiment.experimentKey,
        constraints: experiment.experimentData,
      }));

      try {
        const response = await fetchVariantsInBatch({
          token: this.token || '',
          flags,
        });

        response.data.forEach((result: any) => {
          variantKeys[result.key] = result.variantKey;
        });
      } catch (error) {
        // Add error handling here
      }
    }

    return variantKeys;
  }
}

export default AbexClient;
