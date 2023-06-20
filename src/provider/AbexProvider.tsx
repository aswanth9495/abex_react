import React, { useEffect, useState } from 'react'
import AbexClient from '../utils/abexClient'
import { AbexContext } from '../context'

interface AbexProviderProps {
  experimentKey: string
  experimentData: any
  onInit?: (client: AbexClient) => void;
  children: React.ReactNode
}

const AbexProvider: React.FC<AbexProviderProps> = ({ experimentKey, experimentData, onInit, children }) => {
  const [variantKey, setVariantKey] = useState<string | null>(null);
  const abexClient = new AbexClient(experimentKey, experimentData, async (client) => {
    if (onInit && typeof onInit === 'function') {
      onInit(client);
    }
  });

  useEffect(() => {
    async function fetchVariantKey() {
      const key = await abexClient.getVariantKey()
      setVariantKey(key)
      // You can store other variant details as well
    }
    fetchVariantKey()
  }, [experimentKey, experimentData])

  return <AbexContext.Provider value={variantKey}>{children}</AbexContext.Provider>
}

export default AbexProvider
