import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { readFile } from 'fs';
import { type } from 'os';
import * as config from 'config';
import { Db } from 'typeorm';
import { Comment } from '../article/comment/comment.entiry';

const dbConfig = config.get('db');

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   // type: DBconfig.type || 'mysql',
//   type: 'mysql',
//   // host: process.env.HOSTNAME || DBconfig.host || 'www.amorcycle.com',
//   host: 'www.amorcycle.com' || process.env.HOSTNAME,
//   // port: process.env.PORT || DBconfig.port,
//   // username: process.env.USERNAME || 'amorcycl_tomerking',
//   username: 'amorcycl_tomerking' || process.env.username,
//   // password: process.env.PASSWORD || 'junkerms1',
//   port: 5000,
//   password: process.env.password || '5_K~]rNa~ZC[',
//   // database: process.env.DB_NAME || 'amorcycl_amorcycle',

//   database: 'amorcycl_amorcycle',
//   logging: true,
//   entities: [__dirname + '/../**/*.entity.{js,ts}', Comment],
//   // synchronize: process.env.TYPEORM_SYNC || DBconfig.synchronize,
//   synchronize: true,
// };
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.HOSTNAME || dbConfig.host,
  port: process.env.DB_PORT || dbConfig.port || 3306,
  username: process.env.username || dbConfig.username,
  password: process.env.password || dbConfig.password,
  database: process.env.DB_DATABASE || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.ts', Comment],
  synchronize: dbConfig.synchronize,
};
