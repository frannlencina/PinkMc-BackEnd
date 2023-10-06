import * as mongoose from 'mongoose';

const newsSchema = new mongoose.Schema(
  {
    slug: {type: String, },
    title: {type: String, required: true},
    description: {type: String, },
    urlImage: {type: String, },
    date: {type: String },
  }
);

export type News = mongoose.InferSchemaType<typeof newsSchema>;
export const News = mongoose.model('News', newsSchema);