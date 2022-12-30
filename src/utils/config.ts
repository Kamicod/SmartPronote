import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const configPath = join(
  __dirname,
  '..',
  '..',
  process.env.PROD === 'true' ? 'config.prod.json' : 'config.json'
);

export const config: Config = JSON.parse(readFileSync(configPath, 'utf8'));

export interface Config {
  enableApi: boolean;
  accountTimeout: number;
  refreshEvery: number;
  accounts: {
    url: string;
    username: string;
    password: string;
    cas: string;
    modules: {
      googleCalendar?: {
        refreshToken: string;
        calendarId?: string;
      };
      googleTasks?: {
        refreshToken: string;
        taskListId: string;
      };
      iftttGrades?: {
        key: string;
      };
    };
  }[];
}

export type Account = Config['accounts'][0];
