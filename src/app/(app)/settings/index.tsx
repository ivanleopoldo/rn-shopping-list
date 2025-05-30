import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import { supabase } from '@/utils/supabase';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function Settings() {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  function toggleColorScheme() {
    const newTheme = isDarkColorScheme ? 'light' : 'dark';
    console.log(newTheme);
    setColorScheme(newTheme);
  }

  return (
    <View className="gap-4">
      <Text>Settings</Text>
      <Button
        onPress={async () => {
          await supabase.auth.signOut();
        }}>
        <Text>Sign Out</Text>
      </Button>
      <Button onPress={() => toggleColorScheme()}>
        <Text>Toggle Theme</Text>
      </Button>
    </View>
  );
}
