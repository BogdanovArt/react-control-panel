const getApiUrl = () => {
  if (process.env.NODE_ENV === "development")
    return "http://188.72.76.55/api/token/v1/675ffe5e39927a5979ff2a498e0dcdc4";
  else return "/exec";
};

export default getApiUrl;
