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
  enableApi: true;
  accountTimeout: 3600;
  refreshEvery: 300;
  accounts: {
    url: "https://3500045x.index-education.net/pronote/eleve.html";
    username: "CHRKA";
    password: "Pronote2024Orange*";
    cas: string;
    google?: {
      email: `${"kchraibi3.0"}@${"gmail"}.${"com"}`;
    };
    modules: {
      googleCalendar?: {
        calendarId?: "kchraibi3.0@gmail.com";
      };
      googleTasks?: {
        taskListId: "MDM1ODAyNzE4NzkzMTE5NTU3MTU6MDow";
      };
      iftttGrades?: {
        key: "3RtS7KZFZEbleRW4f3Ls1";
      };
    };
  }[];
}

export type Account = Config['accounts'][0];
