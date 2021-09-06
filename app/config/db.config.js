module.exports ={
  HOST: 'ec2-34-202-115-62.compute-1.amazonaws.com',
  USER: 'xlokkyhyqvkphd',
  PASSWORD: '48b1400a098247eb68ea05ed8ed56a5bf9c1cf0c4748b38fc83a9df3a81509c2',
  DB: 'dcj0ce3ua8b084',
 // host: 'localhost',
  port: 5432,
  dialect:'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
