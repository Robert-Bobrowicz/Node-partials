const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('server is listening');
});

app.get('/firmy/:name', (req, res) => {
    console.log(req.params);
    const { name } = req.params;
    const companies = [
        { slug: 'skycash', name: 'SkyCash Ltd.' },
        { slug: 'skyshow', name: 'skyShow Entertainment Inc.' }
    ]
    const company = companies.find(x => x.slug === name);

    if (company) {
        res.send(`Company name: <b>${company.name}</b>`);
    } else {
        res.send(`requested company named "<b>${name}</b>" not found`);
    }
});

app.listen(port, () => console.log(`server is listening on port: ${port}`));