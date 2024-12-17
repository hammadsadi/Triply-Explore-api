import { model, Schema } from 'mongoose';
import { TUser, TUserName } from './user.interface';
import { userRole, userStatus } from './user.constant';

// User Name Sub Schema
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'Please Provide Your First Name!'],
    minlength: [2, 'First Name Minimum 3 Character Allow!'],
    maxlength: [10, 'First Name Maximum 30 Character Allow!'],
  },
  middleName: {
    type: String,
    default: null,
    minlength: [2, 'Middle Name Minimum 3 Character Allow!'],
    maxlength: [10, 'Middle Name Maximum 10 Character Allow!'],
  },
  lastName: {
    type: String,
    required: [true, 'Please Provide Your Last Name!'],
    minlength: [2, 'Last Name Minimum 3 Character Allow!'],
    maxlength: [10, 'Last Name Maximum 30 Character Allow!'],
  },
});

// User Main Schema
const userSchema = new Schema<TUser>(
  {
    name: {
      type: userNameSchema,
      required: true,
    },
    email: {
      type: String,
      required: [true, 'Please Provide Your Email'],
      unique: true,
      validate: {
        validator: function (email) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        },
        message: 'Imvalid Email Format!',
      },
    },
    age: {
      type: Number,
      required: [true, 'Please Inter Your Age!'],
    },
    photo: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: userRole,
      default: 'user',
    },
    status: {
      type: String,
      enum: userStatus,
      default: 'active',
    },
  },
  {
    timestamps: true,
  },
);

export const User = model<TUser>('User', userSchema);
