// Update with your config settings.

module.exports = {

  development: {
    client: process.env.CLIENT,
    connection: {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      options: {
        port: parseInt(process.env.PORT, 10)
      }
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: CLIENT,
    connection: {
      host: HOST,
      database: DATABASE,
      user:     USER,
      password: PASSWORD,
      options: {
        port: parseInt(PORT, 10)
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
