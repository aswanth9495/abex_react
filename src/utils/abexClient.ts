import { fetchVariant } from '../api/variant'

class AbexClient {
  private experimentKey: string
  private experimentData: any

  constructor(experimentKey: string, experimentData: any) {
    this.experimentKey = experimentKey
    this.experimentData = experimentData
  }

  async getVariantKey(): Promise<string | null> {
    try {
      const response = await fetchVariant({
        experimentKey: this.experimentKey,
        experimentData: this.experimentData,
      })
      return response.data.variant_key
    } catch (error) {
      // Add error handling here
      return null
    }
  }
}

export default AbexClient
