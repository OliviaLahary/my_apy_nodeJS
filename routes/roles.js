const express = require('express');
const connection = require('../config');
const router = express.Router();

//Retrive all roles
router.get('/', (req, res) => {
    connection.query("SELECT * FROM role", (err, results) => {
        if(err) {
            res.sendStatus(500)
        } else {
            res.status(200).send(results)
        }
    })
})

// retrive one role with id 1
router.get('/:id', (req, res) => {
    connection.query("SELECT * FROM role WHERE id = ?",[req.params.id], (err, results) => {
        if(err) {
            res.sendStatus(500)
        } else {
            res.status(200).send(results)
        }
    })
})


// Create one role
router.post('/', (req, res) => {
    // console.log(req.query)
    connection.query("INSERT INTO role SET ?", [req.body], (err, results) => {
        console.log(err)
        if(err) {
            res.sendStatus(500);
        } else {
        res.sendStatus(201)
        }
    }) 
})

// Modifier un role avec un id spécifique
router.put('/:id', (req, res) => {
    // res.send("Ok c'est gagné")
    // console.log(req.body)
connection.query("UPDATE role SET ? WHERE id = ?", [req.body, req.params.id], (err, results) => {
        if(err) {
            res.sendStatus(500)
        } else {
            res.status(200).send(results)
        }
    })
})

// effacer un role
router.delete('/:id', (req, res) =>{
    //  res.send("ok ca va")
    connection.query("DELETE FROM role WHERE id = ?", [req.params.id], (err, results) => {
        if(err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            res.status(200).send(results)
        }
    })
})

module.exports = router;


