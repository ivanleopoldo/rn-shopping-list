import '@azure/core-asynciterator-polyfill';
import { createBaseLogger, PowerSyncContext, PowerSyncDatabase } from '@powersync/react-native';
import { ReactNode, useEffect, useMemo } from 'react';

import { Connector } from '@/utils/powersync/connector';
import { schema } from '@/utils/powersync/schema';
import { useAuthStore } from '@/store/user-store';

createBaseLogger().useDefaults();

const connector = new Connector();

export const PowerSyncProvider = ({ children }: { children: ReactNode }) => {
  const isSyncEnabled = useAuthStore((s) => s.isSyncEnabled);

  const powersync = useMemo(() => {
    const powersync = new PowerSyncDatabase({
      schema,
      database: { dbFilename: 'test.sqlite' },
    });
    powersync.init();
    return powersync;
  }, []);

  useEffect(() => {
    if (isSyncEnabled) {
      powersync
        .connect(connector)
        .then(() => console.log('connected'))
        .catch(console.error);
    } else {
      powersync
        .disconnect()
        .then(() => console.log('not connected'))
        .catch(console.error);
    }
  }, [isSyncEnabled, powersync]);

  return <PowerSyncContext.Provider value={powersync}>{children}</PowerSyncContext.Provider>;
};
