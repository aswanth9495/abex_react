import React, { useEffect, useState } from 'react';
import AbexClient from '../utils/abexClient';
import { AbexContext } from '../context';

interface AbexProviderProps {
  experiments: { experimentKey: string; experimentData: object }[];
  onInit?: (client: AbexClient) => void;
  children: React.ReactNode;
}

const AbexProvider: React.FC<AbexProviderProps> = ({ experiments, onInit, children }) => {
  const [variantKeys, setVariantKeys] = useState<Record<string, string | null>>({});
  const abexClient = new AbexClient(experiments, async (client) => {
    if (onInit && typeof onInit === 'function') {
      onInit(client);
    }
  });

  useEffect(() => {
    async function fetchVariantKeys() {
      let keys: Record<string, string | null> = {};

      if (experiments.length > 1) {
        keys = await abexClient.getVariantsInBatch();
      } else if (experiments.length === 1) {
        keys = await abexClient.getVariantKey();
      }

      setVariantKeys(keys);
    }

    if (experiments.length > 0) {
      fetchVariantKeys();
    }
  }, [experiments]);

  return <AbexContext.Provider value={variantKeys}>{children}</AbexContext.Provider>;
};

export default AbexProvider;
