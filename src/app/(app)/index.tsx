import { Text } from '@/components/ui/text';
import { useAuthStore } from '@/store/user-store';
import { Stack } from 'expo-router';

import { View } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View>
        <Text>Hello</Text>
      </View>
    </>
  );
}
