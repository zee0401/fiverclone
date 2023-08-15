import Gig from "../models/gig.model";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller) return res.send("Only user can create a Gig!");

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });
  try {
    const savedGig = newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.param.id);
    if (gig.userId !== req.userId)
      return next(403, "you can delete only your gig!");

    await gig.findByIdAndDelete(req.param.id);
    res.status(200).send("Gig deleted succesfully");
  } catch (error) {
    next(err);
  }
};

export const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.param.id);
    if (!gig) return next(404, "Gig not Found!");
    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};

export const getGigs = async (req, res, next) => {
  const q = req.query();
  const filter = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: { ...(q.min && { $gt: q.min }), ...(q.max && { $gt: q.max }) },
    }),
    ...(q.searcn && { title: { $regex: q.searcn, $option: "i" } }),
  };

  try {
    const gig = await Gig.find();
  } catch (err) {
    next(err);
  }
};
