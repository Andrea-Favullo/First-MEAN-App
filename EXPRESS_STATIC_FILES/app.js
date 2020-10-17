// Get dependencies
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'about.html'));
});
app.get('/sitemap', function (req, res) {
    res.sendFile(path.join(__dirname, 'sitemap.html'));
});
app.get('/api', (req, res) => {
  res.send('api works');
});
app.get('/api/products', function (req, res) {
    jsonProducts = { "products": [{ "_id": { "$oid": "5968dd23fc13ae04d9000001" }, "product_name": "sildenafil citrate", "supplier": "Wisozk Inc", "quantity": 261, "unit_cost": "$10.47" }, { "_id": { "$oid": "5968dd23fc13ae04d9000002" }, "product_name": "Mountain Juniperus ashei", "supplier": "Keebler-Hilpert", "quantity": 292, "unit_cost": "$8.74" }, { "_id": { "$oid": "5968dd23fc13ae04d9000003" }, "product_name": "Dextromathorphan HBr", "supplier": "Schmitt-Weissnat", "quantity": 211, "unit_cost": "$20.53" }] }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(jsonProducts));
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => { console.log('Example app listening on port 3000!'); });