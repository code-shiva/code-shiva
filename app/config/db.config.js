module.exports ={
  //HOST: 'ec2-52-22-161-59.compute-1.amazonaws.com',
  HOST:'postgres://heceuejmfwcuhi:204ad16b44a356cbbc030961192d4982fb9b50956c4b02f2f7eeb5a47f66d3bf@ec2-52-22-161-59.compute-1.amazonaws.com:5432/d4a3n2sq0q91ii',
  USER: 'heceuejmfwcuhi',
  PASSWORD: '204ad16b44a356cbbc030961192d4982fb9b50956c4b02f2f7eeb5a47f66d3bf',
  DB: 'd4a3n2sq0q91ii',
  dialect:'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};