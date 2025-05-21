import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { SafeAreaView, View } from 'react-native';
import { useState } from 'react';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState<Boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    alert('Sign In');
  };
  const handleSignUp = () => {
    alert('Sign Up');
  };

  const clearText = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <SafeAreaView className="relative h-full w-full">
      <View className="flex-1 gap-24 p-12">
        <View className="mt-28">
          <Text className="text-3xl font-bold">{isSignUp ? 'Register' : 'Sign In'}</Text>
          <Text className="text-xl font-light">
            {isSignUp
              ? 'Create an account now to use the app'
              : 'Login to your account to use this app'}
          </Text>
        </View>
        <View className="gap-4">
          <Input
            onChangeText={(text) => setEmail(text)}
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            className="w-full"
            placeholder="john@doe.com"
          />
          <Input
            onChangeText={(text) => setPassword(text)}
            value={password}
            className="w-full"
            placeholder="Password"
            textContentType="password"
            secureTextEntry
          />
          <Button
            onPress={() => {
              if (isSignUp) {
                handleSignUp();
              } else {
                handleSignIn();
              }
              clearText();
            }}
            className="w-full">
            <Text>{isSignUp ? 'Sign Up' : 'Login'}</Text>
          </Button>
        </View>
      </View>
      <View className="items-center">
        <View className="flex-row">
          <Text>{isSignUp ? 'Already have an account?' : "Don't have an account?"} </Text>
          <Text onPress={() => setIsSignUp((prev) => !prev)} className="text-primary">
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
