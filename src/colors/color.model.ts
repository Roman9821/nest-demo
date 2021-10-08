import * as mongoose from 'mongoose';

export const ColorSchema = new mongoose.Schema({
  name: { type: String },
});

export interface Color {
  id: string;
  name: string;
}
