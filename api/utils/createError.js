const createError = (status, message) => {
  err = new Error();
  err.status = status;
  err.message = message;

  return err;
};

export default createError;
