// Update with your config settings.

module.exports = {

  development: {
    client: 'mssql',
    connection: {
      host: '172.16.20.210',
      user: 'thiago',
      password: "K7fcX6wM",
      database: "Vulkan",
      options: {
        port: 49170
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
    client: 'mssql',
    connection: {
      host: 'glip-office.ddns.net',
      database: 'Vulkan',
      user:     'thiago',
      password: 'K7fcX6wM',
      options: {
        port: 49170
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
