import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String },
  color: { type: JSON },
});

export interface User {
  id: string;
  name: string;
  color: JSON;
}
