import React, { useEffect, useState } from 'react'
import AbexClient from '../utils/abexClient'
import { AbexContext } from '../context'

interface AbexProviderProps {
  experimentKey: string
  experimentData: any
  children: React.ReactNode
}

const AbexProvider: React.FC<AbexProviderProps> = ({ experimentKey, experimentData, children }) => {
  const [variantKey, setVariantKey] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVariantKey() {
      const abexClient = new AbexClient(experimentKey, experimentData)
      const key = await abexClient.getVariantKey()
      setVariantKey(key)
      // You can store other variant details as well
    }
    fetchVariantKey()
  }, [experimentKey, experimentData])

  return <AbexContext.Provider value={variantKey}>{children}</AbexContext.Provider>
}

export default AbexProvider
