const express = require('express');
const activities = require('./data/activities');

const app = express();

app.use(express.json());

const findById = (req, res) => {
  const activity = activities.find((item) => item.id === Number(req.params.id));
  res.
};

app.get('/myActivities/:id', findById);

app.get('/myActivities', (req, res) => {

});
app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;
  let filteredActivities = [];

  if (q) {
    filteredActivities = activities.filter((activity) => activity.description.includes(q));
  }

  res.status(200).json({ activities: filteredActivities });
});

module.exports = app;
