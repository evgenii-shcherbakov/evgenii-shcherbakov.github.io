const express = require('express');
const { join } = require('path');

const app = express();

app.use(express.json());
app.use(express.static(join(__dirname, 'dist')));

app.listen(3000, () => console.log(`Listen at 3000`));
