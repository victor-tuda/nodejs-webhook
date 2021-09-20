// Update with your config settings.

module.exports = {

  development: {
    client: "mssql",
    connection: {
      host: "glip-office.ddns.net",
      user: "thiago",
      password: "K7fcX6wM",
      database: "Vulkan",
      options: {
        port: parseInt(49170, 10)
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
      host: process.env.HOST,
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
