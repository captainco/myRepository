const Koa           = require('koa');
const ShowUserById  = require('./ShowUserById');
const app           = new Koa();

app.use(ShowUserById);

app.listen(3000);