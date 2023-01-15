const router = require('express').Router();
const notes = require('../db/notes');

//GET "/api/notes" route 
router.get('/notes',(req,res) => {
  notes
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post('/notes',(req,res) => {
  notes
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));

});

//DELETE "/API/NOTES"
router.delete('/notees/:id',(req,res) => {
    notes
       .removeNote(req.params.id)
       .then(() => res.json({ ok: true}))
       .catch((err) => res.status(500).json(err));
});

module.exports = router;





























