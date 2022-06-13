const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');
const app = express();

// const logger = (req, res, next) => {
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// };

// app.use(logger);

// Handlebar
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// render using handlebars
app.get('/', (req, res) => {
    res.render('index',{
        title: 'Member App',
        members
    });
})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})