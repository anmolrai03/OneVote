let _token = null;

const getAccessToken = () => {
  return _token;
};

const setAcessToken = (token) => {
  _token = token;
}

const removeAccessToken = () => {
  _token = null;
}

export {getAccessToken , setAcessToken , removeAccessToken};