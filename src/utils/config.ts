export type TAppConfig = {
  supabaseUrl: string;
  supabaseAnonKey: string;
};

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Credentials in .env');
}

export const AppConfig: TAppConfig = {
  supabaseUrl: supabaseUrl,
  supabaseAnonKey: supabaseAnonKey,
};
