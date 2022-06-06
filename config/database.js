module.exports = ({ env }) => {
  let settings = env('NODE_ENV') === 'production'
    ? {
      client: 'postgres',
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 27017),
      database: env('DATABASE_NAME', 'strapi'),
      username: env('DATABASE_USERNAME', ''),
      password: env('DATABASE_PASSWORD', ''),
    }
    : {
      client: 'sqlite',
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    };

  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings,
        options: {
          useNullAsDefault: true,
          ssl: false
        },
      },
    },
  }
};
