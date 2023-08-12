import User from "../models/user.model";
import jwt from "jsonwebtoken";
import createError from "../utils/createError";

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.parm.id);
  if (req.userId == user._id.toString()) {
    return next(createError(403, "you can delete only your account"));
  }
  await User.findByIdAndDelete(req.param.id);
  res.status(200).send("Deleted Successfully");
};
