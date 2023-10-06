import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    id: {type: String, required: true },
    name: {type: String,},
    ppImage: {type: String, },
    token: {type: String, },
    password: {type: String, },
    date: {type: String, required: true },
  }
);

export type User = mongoose.InferSchemaType<typeof userSchema>;
export const User = mongoose.model('User', userSchema);