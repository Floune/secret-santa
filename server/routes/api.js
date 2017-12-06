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
            { id: "1", name: 'helow', match: '', ss: '', ekonne: '', pw: 'cafenoir', lp: 'helow.mp3' },
            { id: "2", name: 'lagru', match: '', ss: '', ekonne: '', pw: 'deuxchiens', lp: 'chiens.wav' },
            { id: "3", name: 'ano', match: '', ss: '', ekonne: '', pw: 'grocheveu', lp: 'ano.mp3' },
            { id: "4", name: 'arnaud', match: '', ss: '', ekonne: '', pw: 'josa', lp: 'arno.mp3' },
            { id: "5", name: 'graba', match: '', ss: '', ekonne: '', pw: 'beuh', lp: 'zelda.mp3' },
            { id: "6", name: 'charly', match: '', ss: '', ekonne: '', pw: 'darlenelove', lp: 'charl.mp3' },
            { id: "7", name: 'yann', match: '', ss: '', ekonne: '', pw: 'cendrier', lp: 'tireli.mp3' },
            { id: "8", name: 'bmargaux', match: '', ss: '', ekonne: '', pw: 'pigeonvoyageur', lp: 'mb.mp3' },
            { id: "9", name: 'blucas', match: '', ss: '', ekonne: '', pw: 'meilleurjambon', lp: 'lulu.mp3' },
            { id: "10", name: 'marie', match: '', ss: '', ekonne: '', pw: 'aperitif', lp: 'conemara.mp3' },
            { id: "11", name: 'martin', match: '', ss: '', ekonne: '', pw: 'mangeduriz', lp: 'jonatan.mp3' },
            { id: "12", name: 'lisa', match: '', ss: '', ekonne: '', pw: 'chatoune', lp: 'twin.mp3' },
            { id: "13", name: 'guip', match: '', ss: '', ekonne: '', pw: 'cornemuse', lp: 'guip.mp3' },
            { id: "14", name: 'pouxy', match: '', ss: '', ekonne: '', pw: 'arthrose', lp: 'pouxy.mp3' },
            { id: "15", name: 'marco', match: '', ss: '', ekonne: '', pw: 'badenwürttemberg', lp: 'jarrive.wav' },
            { id: "16", name: 'simon', match: '', ss: '', ekonne: '', pw: 'oiesauvage', lp: 'simon.mp3' },
            { id: "17", name: 'rivz', match: '', ss: '', ekonne: '', pw: 'puteavouvray', lp: 'virgin.mp3' },
            { id: "18", name: 'kloup', match: '', ss: '', ekonne: '', pw: 'unpetitpara', lp: 'dania.mp3' },
            { id: "19", name: 'flyette', match: '', ss: '', ekonne: '', pw: 'jetaime', lp: 'hayate.mp3' },
            { id: "20", name: 'mina', match: '', ss: '', ekonne: '', pw: 'boarf', lp: 'mina.mp3' },
            { id: "21", name: 'ledam', match: '', ss: '', ekonne: '', pw: 'islamogauchiste', lp: 'interna.mp3' },
            { id: "22", name: 'fela', match: '', ss: '', ekonne: '', pw: 'uncrocstp', lp: 'painOuQuoi.mp3' },
            { id: "23", name: 'floune', match: '', ss: '', ekonne: '', pw: 'moiaussi', lp: 'pet.wav' },
            { id: "24", name: 'kcuf-kcuf', match: '', ss: '', ekonne: '', pw: 'rienafoutre', lp: 'kcuf.mp3' }
            ]
            );
        
    });
});

module.exports = router;