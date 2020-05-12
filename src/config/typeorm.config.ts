import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { readFile } from 'fs';
import { type } from 'os';
import * as config from 'config';
import { Db } from 'typeorm';
import { Comment } from '../article/comment/comment.entiry';

const DBconfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: DBconfig.type,
  host: process.env.RDS_HOSTNAME || DBconfig.host,
  port: process.env.RDS_PORT || DBconfig.port,
  username: process.env.RDS_USERNAME || 'postgres',

  password: process.env.RDS_PASSWORD || 'junkerms1',
  database: process.env.RDS_DB_NAME || 'amor-cycle',
  logging: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}', Comment],
  // synchronize: process.env.TYPEORM_SYNC || DBconfig.synchronize,
  synchronize: true,
};
