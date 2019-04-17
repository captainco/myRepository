const Router   = require('koa-router');
const nunjucks = require('nunjucks');
const knex     = require('./knex');
const router   = new Router();

router.get('/search', async(context, next) => {
  let users    = await knex.select('*').from('users');
  context.body = nunjucks.render('index.html',{users});
  next();
});

router.get('/search/:keyword', async(context) => {
    let users    = await knex.select('*').from('users').where('username', 'like', '%' + context.params.keyword.toString() + '%');
    context.body = nunjucks.render('index.html', {users});
});

module.exports = router;
