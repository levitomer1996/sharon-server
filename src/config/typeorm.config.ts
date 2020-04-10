import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { readFile } from 'fs';
import { type } from 'os';

var ccc = `MIIEMTCCApmgAwIBAgIEAJhDgjANBgkqhkiG9w0BAQwFADA6MTgwNgYDVQQDDC82
MGUzYjZjOC02MjMzLTQ3YzgtYTM2OC0xNWJlZTZjZjMzMjAgUHJvamVjdCBDQTAe
Fw0yMDA0MTAwOTA1MjhaFw0zMDA0MDgwOTA1MjhaMDoxODA2BgNVBAMMLzYwZTNi
NmM4LTYyMzMtNDdjOC1hMzY4LTE1YmVlNmNmMzMyMCBQcm9qZWN0IENBMIIBojAN
BgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAw9oOWhh+dmVzYga+h6EdLZ/2EBAH
4CsCZ2k5t2i5h4sxKBkXMgILTpRylltW8pCVd6aY0k8MlPL3/hI0B26/d5jw2XC7
obIdN0qio0DVJi20f+KEemNgjwvOeWlqmwp0z0vOYXZDU/0Dz4y3L5mY+7J3wzj7
Uqea4DKoZLaHp9isToxNPKYWNQfBdBkRSF3RdIrlSnNAYhbgH5QM5TdkMuPT1Brp
4ScRXcGv/z/T0n9AcGHPFV1JIoYkSeXEwxP9PPCH78wFCuOK9HBRYl3sZC0kRIuO
2lYCm8RjZRvmn5qpwcJTv7IiB10uTii+4ISYBSdHZPylI/0k5SUpOXIIxVRqIxpK
swZg0TWtmZ5JJdXlA1tcaJHSaChzYpbKollHdF/HB8xtZnCy/6tRaWmDB9ZbnqMR
iMUQF4RR3jF6FNAiK9yZ4sLTUOOyBSxy+8IiWUSzo0/5cvd5Gh7CZ+OZ6b22vIPh
WoqXOaolzAWMWCcycVGqQjb/hED3R8xd/mUfAgMBAAGjPzA9MB0GA1UdDgQWBBTc
l/Ev6J9zYXQeUh5B6DtJgh/zPDAPBgNVHRMECDAGAQH/AgEAMAsGA1UdDwQEAwIB
BjANBgkqhkiG9w0BAQwFAAOCAYEAdBIdojCL42+zkMP45+s2FEYVgbF72Sgk2VqQ
RpWCacd5qfuE7DF2CuL0wdcSqX+s6m4Wgy0TYpqangfu5o54uEmJ44QGDyx8MnAr
9fFjvKWVQOklBO4DHN+sKRe9rs2DyE4iKEVQMXKs0lS7luSOBr9X1EvWxs5ve9n2
P9h+arwrIdY5mop/DuAt6TNmlM6YbsM40upW42gmGwPu4uV7GxvUVo5wylpzsT5l
C7eug5frr+p5SOs5bqmojXaJM/Wvh/BV+2JNJihOLcyhou8CbbX9kjUDS7YwWhij
H9WvyqydD404LUZUAV4WlC+093nTLOTekm9HrISAqdj/4/GdhaiS1wD1g9m7d1Hc
0oGWdlbWDCqSK4c0fMKvDVoiq/XUYzmLUzFWNSshB49TJLBmS9kY059onS6ZZUwu
YVxGE3JafDvVFfpZtKgszxPqPqMNeJNDfO0HCuadTjM164djuSVCtTGjjuGIvEd2
UjEyYyInAhvjwrVca1zi5giQwUPJ`;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'pg-30be7f7b-levitomer1996-a89f.aivencloud.com',
  port: 12039,
  username: 'avnadmin',
  password: 'jd6f1l8qwx6sfx9s',
  database: 'defaultdb',
  extra: {
    ssl: { ca: ccc },
  },
  logging: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
