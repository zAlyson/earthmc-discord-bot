import dotenv from 'dotenv';

dotenv.config();

export const {
  VERIFY_CHANNEL_ID = '',
  GUILD_ID = '',
  DISCORD_TOKEN = '',
  CLIENT_ID = '',
  CLIENT_SECRET = '',
  PORT = '',
} = process.env;
