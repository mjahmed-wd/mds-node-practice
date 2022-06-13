const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');

router.get('/', (req, res) => {
    res.json(members);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const member = members.find(member => member.id === parseInt(id));
    if (!member) {
        res.status(404).json({ message: 'Member not found' });
    }
    res.json(member);
});

router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if (!newMember.name || !newMember.email) {
        res.status(400).json({ message: 'Please include a name and email' });
    } else {
        members.push(newMember);
        // res.json(members);
        res.redirect('/');
    }
});

router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (!found) {
        res.status(404).json({ message: 'Member not found' });
    }
    const updatedMember = {
        id: parseInt(req.params.id),
        name: req.body.name,
        email: req.body.email,
        status: req.body.status
    }
    const memberIndex = members.findIndex(member => member.id === parseInt(req.params.id));
    members[memberIndex] = updatedMember;
    res.json(members);

}
);

router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (!found) {
        res.status(404).json({ message: 'Member not found' });
    }
    const memberIndex = members.findIndex(member => member.id === parseInt(req.params.id));
    members.splice(memberIndex, 1);
    res.json(members);
}
);

module.exports = router;