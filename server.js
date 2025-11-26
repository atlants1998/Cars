const app = require('./app')
const mongoose = require('mongoose');

let DB = 'mongodb://127.0.0.1:27017/Car_shop';

mongoose.connect(DB).then((con) => {
    console.log('connected\n', con);
});

const port = 3000;

app.listen(port, () => {
    console.log(`server sunning port ${port}`);
});

