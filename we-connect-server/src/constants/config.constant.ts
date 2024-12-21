import dotenv from 'dotenv';

dotenv.config();

const getEnvVariable = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`Environment variable "${key}" is not defined`);
  return value;
};

const configConstant = Object.freeze({
  LOCALHOST_PORT: getEnvVariable('PORT'),
  MONGO_URI: getEnvVariable('mongoURI'),
  JWT_KEY: getEnvVariable('JWT_KEY'),
  SALT_ROUNDS: parseInt(getEnvVariable('SALT_ROUNDS'), 10),
  PASSWORD_TOKEN_EXPIRATION: parseInt(
    getEnvVariable('PASSWORD_TOKEN_EXPIRATION'),
    10,
  ),
  AWS_BUCKET_NAME: getEnvVariable('AWS_BUCKET_NAME'),
  AWS_REGION: getEnvVariable('AWS_REGION'),
  AWS_SECRET_ACCESS_KEY: getEnvVariable('AWS_SECRET_ACCESS_KEY'),
  AWS_ACCESS_KEY_ID: getEnvVariable('AWS_ACCESS_KEY_ID'),
  MAX_REQUESTS_PER_MINUTE: parseInt(
    getEnvVariable('MAX_REQUESTS_PER_MINUTE'),
    10,
  ),
  EMAIL_SERVICE: getEnvVariable('EMAIL_SERVICE'),
  EMAIL_ADDRESS: getEnvVariable('EMAIL_ADDRESS'),
  EMAIL_PASSWORD: getEnvVariable('EMAIL_PASSWORD'),
});

export default configConstant;
