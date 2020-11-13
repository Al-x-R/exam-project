module.exports = {
  development: {
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'squadhelp_db',
    dialect: 'postgres',
  },
  test: {
    host: 'localhost',
    port: 5432,
    password: null,
    username: 'postgres',
    database: 'squadhelp-test-2',
    dialect: 'postgres',
    logging: false,
  },
  production: {},
};
