import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: string,
      required: false,
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: string,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
