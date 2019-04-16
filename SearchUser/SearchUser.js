const Router   = require('koa-router');
const nunjucks = require('nunjucks');
const knex     = require('./knex');
const router   = new Router();

router.get('/search', async(context, next) => {
  let items    = await knex.select('*').from('users');
  context.body = nunjucks.render('index.html',{items});
  next();
});

router.get('/search/:keyword', async(context) => {
    let items    = await knex.select('*').from('users').where('username', 'like', '%' + context.params.keyword + '%');
    context.body = nunjucks.render('index.html',{items});
});

module.exports = router;