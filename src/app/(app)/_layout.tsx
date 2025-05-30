import { PowerSyncProvider } from '@/lib/providers/PowerSyncProvider';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <PowerSyncProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'black',
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
          }}
        />
      </Tabs>
    </PowerSyncProvider>
  );
}
