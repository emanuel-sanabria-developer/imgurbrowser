require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const pino = require('express-pino-logger')();
const cache = require('./cache');

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`
  }
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get(
  '/api/1/images',
  cache(2000),
  async (req, res, next) => {
    try {
      const {
        section,
        sort,
        window,
        page,
        showViral
      } = req.query;
      const {
        data: { data }
      } = await axiosInstance({
        url: `gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}`
      });

      res.json(data);
    } catch (error) {
      next(error);
    }
  }
);

app.get(
  '/api/1/images/:id',
  cache(10000),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const {
        data: { data }
      } = await axiosInstance({
        url: `gallery/image/${id}`
      });

      res.json(data);
    } catch (error) {
      next(error);
    }
  }
);

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
