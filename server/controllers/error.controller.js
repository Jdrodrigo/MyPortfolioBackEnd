import dbErrorHandler from "../helpers/dbErrorHandler.js";

// simple wrapper so existing imports keep working
const getErrorMessage = (err) => {
  return dbErrorHandler.getErrorMessage(err);
};

export default { getErrorMessage };
