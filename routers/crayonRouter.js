const express = require('express');
const knex = require('knex');
const router = express.Router();

const dbConfig = require('../knexfile');

const db = knex(dbConfig.development);

// INSERT INTO crayons (color, perc_used) VALUES ('Xxxxx', 0.XX);
router.post('/', (req, res) => {
    const crayon = req.body;
    db('crayons').insert(crayon)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(err => {
        res.status(500).json({error: "Failed to insert crayon"});
    });
});

// SELECT * FROM crayons;
router.get('/', (req, res) => {
    db('crayons')
    .then(rows => {
        res.json(rows);
    })
    .catch(err => {
        res.status(500).json({error: "Failed to get crayons"});
    });
});

// SELECT * FROM crayons WHERE id = #;
router.get('/:id', (req, res) => {
    const id = req.params.id;
    db('crayons').where('id', id)
    .then(rows => {
        res.json(rows);
    })
    .catch(err => {
        res.status(500).json({error: "Failed to get crayon"});
    });
});

// UPDATE crayons SET perc_used = 0.XX WHERE id = #;
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const crayon = req.body;
    db('crayons').where('id', id).update(crayon)
    .then(rowCount => {
        res.json(rowCount);
    })
    .catch(err => {
        res.status(500).json({error: "Failed to update crayon"});
    });
});

// DELETE crayons WHERE id = #;
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db('crayons').where('id', id).del()
    .then(rowCount => {
        res.status(201).json(rowCount);
    })
    .catch(err => {
        res.status(500).json({error: "Failed to delete crayon"});
    });
});

module.exports = router;