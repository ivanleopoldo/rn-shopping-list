export type TAppConfig = {
  supabaseUrl: string;
  supabaseAnonKey: string;
  powersyncUrl: string;
};

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
const powersyncUrl = process.env.EXPO_PUBLIC_POWERSYNC_URL;

if (!supabaseUrl || !supabaseAnonKey || !powersyncUrl) {
  throw new Error('Missing Credentials in .env');
}

export const AppConfig: TAppConfig = {
  supabaseUrl: supabaseUrl,
  supabaseAnonKey: supabaseAnonKey,
  powersyncUrl: powersyncUrl,
};
