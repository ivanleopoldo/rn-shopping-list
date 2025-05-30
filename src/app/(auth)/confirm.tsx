import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useAuthStore } from '@/store/user-store';
import { router } from 'expo-router';
import { SafeAreaView, View } from 'react-native';

export default function ConfirmEmail() {
  const user = useAuthStore((s) => s.user);
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View className="flex-1 items-center justify-center gap-4 p-4">
        <Text className="text-center text-5xl font-bold">Confirm your email address</Text>
        <View className="flex items-center justify-center gap-2">
          <Text className="text-center text-xl">We sent a confirmation email to: </Text>
          <Text className="text-center text-lg font-bold">{user?.email}</Text>
          <Text className="text-center text-xl">
            Check your email and click on the confirmation link to continue
          </Text>
        </View>
        <Button
          onPress={() => {
            router.back();
          }}>
          <Text>Back</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
