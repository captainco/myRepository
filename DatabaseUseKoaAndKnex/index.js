const Koa = require('koa');
const app = new Koa();

const knex = require('knex')({
    client : 'mysql',
    connection : {
        host : '127.0.0.1',
        user : 'nodeApp',
        password : 'nodeApp',
        database : 'training'
    }
});

async function showUserById(context) {
    if( ! context.query.id) {
        return context.body = {
            message : 'Id is required'
        }
    }

    const result = await knex.select('*').from('users').where('id', context.query.id);
    context.body = result[0] || {messgae : 'No user'}
}

app.use(showUserById);

app.listen(3000);