export const API_URL = process.env.REACT_APP_API_URL;

export const validateEnvVars = (): boolean => {
  return API_URL !== undefined;
};
