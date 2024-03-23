import mongoose, { Schema } from 'mongoose';
import { Visibility, Weather } from './journal.interface';

const journalModel: Schema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  owner: {
    type: String,
    required: [true, 'User already exists'],
  },
  entries: [
    {
      id: Number,
      date: Date,
      weather: Weather,
      visibility: Visibility,
      comment: String,
    },
  ],
});

export default new mongoose.Model('Journal', journalModel);
