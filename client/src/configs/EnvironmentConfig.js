const dev = {
  API_BASE_URL: "http://localhost:8080",
};
// configuration setting for backend api
const getEnv = () => {
  return dev;
};

export const env = getEnv();
