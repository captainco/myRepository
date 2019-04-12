const Koa    = require('koa');
const Router = require('koa-router');
const app    = new Koa();
const router = new Router();

let users = [
    {
        name : 'Huong'
    },
    {
        name : 'Co'
    },
    {
        name : 'Phuong'
    },
    {
        name : 'Khoi'
    },
    {
        name : 'Quang'
    }
];

router.get('/user', (context, next) => {
    context.body = users;
    return next();
});

router.get('/user/:id', (context) => {
    if(context.params.id > users.length)
        return context.body = {message : 'Do not exist Id'}
    context.body = users[context.params.id]
});

app
.use(router.routes())
.use(router.allowedMethods());

app.listen(3000);