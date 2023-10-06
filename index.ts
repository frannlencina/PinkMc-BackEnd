import * as mongoose from 'mongoose';
import { News } from './models/news.model';
import { Request, Response, NextFunction } from 'express';

const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000'); // Cambia esto a tu origen
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', cors(), (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Escuchando puerto: ${port}`);
});

(async () => {
  // connect to database
  await mongoose.connect('mongodb://127.0.0.1:27017/pinkmc');

  interface Noticias {
    slug: String,
    title: String,
    description: String,
    urlImage: String,
  }

  const noticia: Noticias = {
    slug: 'test',
    title: 'test',
    description: 'test',
    urlImage: 'test',
  };

  const agregarNews = (noticias: Noticias) => {
    News.create(
      {
        slug: noticias.slug,
        title: noticias.title,
        description: noticias.description,
        urlImage: noticias.urlImage,
      }
    )
  }
  
  agregarNews(noticia);

  const eliminarNews = (cardId: String) => {
    News.deleteOne({ _id: cardId })
  }

  let cardId = '123as';
  eliminarNews(cardId);

  // read all News
  const newsItems = await News.find();
  console.log(newsItems);

  app.get(`/news`, async (req: Request, res: Response) => {
    await res.send(newsItems);
  });

  // disconnect
  await mongoose.disconnect();
})();
