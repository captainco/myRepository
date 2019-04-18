const nunjucks      = require('nunjucks');
const Router        = require('koa-router');
const configuration = require('../knexfile')['development']; 
const knex          = require('knex')(configuration); 
const router        = new Router();

router.get('/search/:name', async (context) => {
    let users    = await knex.select('*').from('users').where('username', 'like', '%' + context.params.keyword.toString() + '%');
    context.logger.log({query: context.params.name, result: users});
    context.body = nunjucks.render('index.html', { users });
});

module.exports   = router;
