import mongoose from 'mongoose';
import appConstant from '../constants/app.constant';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    phoneNumber: {
      type: {
        countryCode: {type: String, required: true},
        number: {type: String, required: true},
      },
      required: true,
    },
    email: {type: String, required: true},
    role: {
      type: String,
      enum: Object.values(appConstant.userRoles),
      default: appConstant.userRoles.USER,
      required: true,
    },
    profilePicture: {type: String},
    dateOfBirth: {type: Date},
    password: {type: String, required: true},
    createdType: {
      type: Date,
      default: Date.now,
      required: true,
    },
    updatedTime: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema);

export default User;
