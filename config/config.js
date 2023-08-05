import pg from 'pg';

module.exports = {
  dialect: "postgres", 
  host: "localhost", 
  username: "postgres", 
  password: "123", 
  database: "transactions", 
  define: {
      timestamps: "true",
  }, 
  dialectModule: pg
};