var config = {};
config.bodyParserLimit = 10000;
config.FAYTHE_DB_HOST = process.env.FAYTHE_DB_HOST;
config.FAYTHE_DB_SCHEMA = process.env.FAYTHE_DB_SCHEMA;
config.FAYTHE_DB_USERNAME = process.env.FAYTHE_DB_USERNAME;
config.FAYTHE_DB_PASSWORD = process.env.FAYTHE_DB_PASSWORD;
config.FAYTHE_DB_PORT = process.env.FAYTHE_DB_PORT;
config.BCRYPT_SALT_ROUNDS = 10;
config.JWT_SIGNING_KEY = process.env.JWT_SIGNING_KEY;
config.SERVER_HOST = process.env.SERVER_HOST;
config.SERVER_PROTOCOL = process.env.SERVER_PROTOCOL;
config.SERVER_PORT = process.env.SERVER_PORT;
config.CLIENT_PORT = process.env.CLIENT_PORT;
config.FAYTHE_CLIENT_HOST = process.env.FAYTHE_CLIENT_HOST;
config.database = process.env.FAYTHE_DB_SCHEMA;
config.username = process.env.FAYTHE_DB_USERNAME;
config.password = process.env.FAYTHE_DB_PASSWORD;
config.port = process.env.FAYTHE_DB_PORT;
config.dialect = process.env.DIALECT;
config.host = process.env.SERVER_HOST;
config.MODEL_SYNC = process.env.MODEL_SYNC;
// config.ISSUER = process.env.ISSUER;
config.DEPLOYMENT_MODE = process.env.DEPLOYMENT_MODE;
// config.AWS_S3_BUCKET_REGION = process.env.AWS_S3_BUCKET_REGION;
// config.AWS_S3_BUCKET_ACCESS_KEY = process.env.AWS_S3_BUCKET_ACCESS_KEY;
// config.AWS_S3_BUCKET_SECRET_KEY = process.env.AWS_S3_BUCKET_SECRET_KEY;
// config.TRIPJACK_TOKEN = process.env.TRIPJACK_TOKEN;
// config.TRIPJACK_HOST = process.env.TRIPJACK_HOST;

var missingKeys = [];
Object.keys(config).forEach((key) => {
  if (!config[key]) {
    missingKeys.push(key);
  }
});

if (missingKeys.length > 0) {
  console.log(
    "***** IMPORTANT - The following environment variables must be set before running the server: "
  );
  console.log(missingKeys);
  console.log("      Exiting process");
  process.exit(1);
}

module.exports = config;
