// Update with your config settings.

module.exports = {

  development: {
    client: 'mssql',
    connection: {
      server: 'glip-office.ddns.net',
      user: "thiago",
      password: "K7fcX6wM",
      database: "Vulkan"
    },
    options: {
      port: 49170
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
  }

};
