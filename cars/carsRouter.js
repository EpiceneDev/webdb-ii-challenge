const express = require("express");
const knex = require("../data/car-dealer.db3");
const router = express.Router();


router.get("/", (req, res) => {
  knex
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
  knex
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