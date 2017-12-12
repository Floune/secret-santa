const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/hangar', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
        .find()
        .toArray()
        .then((users) => {
            response.data = users;
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        });
    });
    console.log('ouiiiiiiiiiii');
}).get('/match/:idD/:idR/:matchD/:ssR', (req, res) => {
    let matchD = req.params.matchD;
    let id = req.params.idD;
    let idR = req.params.idR;
    let ssR = req.params.ssR;
    let obj= req.body;
    connection((db) => {
        db.collection('users')
        .updateOne(
            { id: id },     // query
            { $set: {match: matchD} },  // update statement
            { update: true }
        )
        .catch((err) => {
            sendError(err, res);
        });
    });

    connection((db) => {
        db.collection('users')
        .updateOne(
            { id: idR },     // query
            { $set: {ss: ssR} },  // update statement
            { update: true }
        )
        .catch((err) => {
            sendError(err, res);
        });
    });

    console.log("+ " + id);
});

// Put users
router.get('/', (req, res) => {
    connection((db) => {

        db.collection('users').insert(
            [
            { id: "1", name: 'Helow', match: '', ss: '', ekonne: '', pw: 'Cafenoir', lp: 'helow.mp3' },
            { id: "2", name: 'Lagru', match: '', ss: '', ekonne: '', pw: 'Deuxchiens', lp: 'chiens.wav' },
            { id: "3", name: 'Ano', match: '', ss: '', ekonne: '', pw: 'Grocheveu', lp: 'ano.mp3' },
            { id: "4", name: 'Arnaud', match: '', ss: '', ekonne: '', pw: 'Josa', lp: 'arno.mp3' },
            { id: "5", name: 'Graba', match: '', ss: '', ekonne: '', pw: 'Beuh', lp: 'zelda.mp3' },
            { id: "6", name: 'Charly', match: '', ss: '', ekonne: '', pw: 'Darlenelove', lp: 'charl.mp3' },
            { id: "7", name: 'Yann', match: '', ss: '', ekonne: '', pw: 'Cendrier', lp: 'tireli.mp3' },
            { id: "8", name: 'Bmargaux', match: '', ss: '', ekonne: '', pw: 'Pigeonvoyageur', lp: 'mb.mp3' },
            { id: "9", name: 'Blucas', match: '', ss: '', ekonne: '', pw: 'Meilleurjambon', lp: 'lulu.mp3' },
            { id: "10", name: 'Marie', match: '', ss: '', ekonne: '', pw: 'Aperitif', lp: 'conemara.mp3' },
            { id: "11", name: 'Martin', match: '', ss: '', ekonne: '', pw: 'Mangeduriz', lp: 'jonatan.mp3' },
            { id: "12", name: 'Lisa', match: '', ss: '', ekonne: '', pw: 'Chatoune', lp: 'twin.mp3' },
            { id: "13", name: 'Guip', match: '', ss: '', ekonne: '', pw: 'Cornemuse', lp: 'guip.mp3' },
            { id: "14", name: 'Pouxy', match: '', ss: '', ekonne: '', pw: 'Arthrose', lp: 'pouxy.mp3' },
            { id: "15", name: 'Marco', match: '', ss: '', ekonne: '', pw: 'Badenwürttemberg', lp: 'jarrive.wav' },
            { id: "16", name: 'Simon', match: '', ss: '', ekonne: '', pw: 'Oiesauvage', lp: 'simon.mp3' },
            { id: "17", name: 'Rivz', match: '', ss: '', ekonne: '', pw: 'Puteavouvray', lp: 'virgin.mp3' },
            { id: "18", name: 'Kloup', match: '', ss: '', ekonne: '', pw: 'Unpetitpara', lp: 'dania.mp3' },
            { id: "19", name: 'Flyette', match: '', ss: '', ekonne: '', pw: 'Jetaime', lp: 'hayate.mp3' },
            { id: "20", name: 'Mina', match: '', ss: '', ekonne: '', pw: 'Boarf', lp: 'mina.mp3' },
            { id: "21", name: 'Ledam', match: '', ss: '', ekonne: '', pw: 'Islamogauchiste', lp: 'interna.mp3' },
            { id: "22", name: 'Fela', match: '', ss: '', ekonne: '', pw: 'Uncrocstp', lp: 'painOuQuoi.mp3' },
            { id: "23", name: 'Floune', match: '', ss: '', ekonne: '', pw: 'Moiaussi', lp: 'pet.wav' },
            { id: "24", name: 'Kcuf-kcuf', match: '', ss: '', ekonne: '', pw: 'Rienafoutre', lp: 'kcuf.mp3' },
            { id: "25", name: 'Foulou', match: '', ss: '', ekonne: '', pw: 'Lamaorange', lp: 'foulou.mp3' }
            ]
            );
        
    });
});

module.exports = router;
