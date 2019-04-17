const Koa = require('koa');
const app = new Koa();
const SearchUser = require('./SearchUser');

app.use(SearchUser.routes());
app.listen(3000);