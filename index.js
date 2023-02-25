const express = require('express');
const app = express();
const path = require('path');
const ejsLayout = require('express-ejs-layouts');
const chalk = require('chalk');
const port = 3001;

const users = [
    { id: 1, name: 'April', email: 'april@email.com' },
    { id: 2, name: 'Lacey', email: 'lacey@email.com' },
    { id: 3, name: 'Sofia', email: 'sofia@email.com' },
    { id: 4, name: 'Booba', email: 'booba@email.com' }
];

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//layout
app.use(ejsLayout);
app.set('layout', 'layouts/main');

//public folder
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/kontakt', (req, res) => {
    res.render('pages/contact');
});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(el => el.id === parseInt(id));

    res.render('pages/user', {
        user: user
    });
});

app.get('*', (req, res) => {
    res.render('errors/404');
});

app.listen(port, () => {
    console.log(chalk.green(`server is listening on port ${port}`));
});