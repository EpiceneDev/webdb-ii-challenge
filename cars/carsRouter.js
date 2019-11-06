const express = require("express");
const knex = require('knex');
const KnexConfig = require('../knexfile.js');
const db = knex(KnexConfig.development);
const router = express.Router();


router.get("/", (req, res) => {
  db
    .select("*")
    .from("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({ error: "Failed to get cars from database" });
    });
});

router.post("/", (req, res) => {
  db
    .insert(req.body, "id")
    .into("cars")
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      res.status(500).json({ error: "Failed to insert cars" });
    });
});

module.exports = router;