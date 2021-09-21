// Update with your config settings.

module.exports = {

  development: {
    client: process.env.CLIENT,
    connection: {
      server: '172.16.20.210',
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
    client: process.env.CLIENT,
    connection: {
      server: process.env.HOST,
      database: process.env.DATABASE,
      user:     process.env.USER,
      password: process.env.PASSWORD,
      options: {
        port: parseInt(process.env.PORT, 10)
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