// Update with your config settings.

module.exports = {

  development: {
    client: process.env.CLIENT,
    connection: {
      connectionString: "Server=glip-office.ddns.net,49170;Database=Vulkan;User Id=thiago;Password=K7fcX6wM;trustServerCertificate=true;" //String de configuração de conexão
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
      connectionString: "Server=glip-office.ddns.net,49170;Database=Vulkan;User Id=thiago;Password=K7fcX6wM;trustServerCertificate=true;" //String de configuração de conexão
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