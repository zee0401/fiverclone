import createError from "../utils/createError";

export const verifyToken = (req, res, next) => {
  const token = req.cookie.accessToken;
  if (!token) return next(createError(401, "you are not authenticated"));

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403, "token is not valid"));
    req.userId = payload.id;
    req.isSeller = payload.isSeller;

    next();
  });
};
