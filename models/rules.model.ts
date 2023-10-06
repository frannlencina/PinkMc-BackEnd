import * as mongoose from 'mongoose';

const rulesSchema = new mongoose.Schema(
  {
    modality: {type: String, },
    rules: {type: String, },
    date: {type: String, required: true },
  }
);

export type Rules = mongoose.InferSchemaType<typeof rulesSchema>;
export const Rules = mongoose.model('Rules', rulesSchema);