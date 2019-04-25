const Router        = require('koa-router');
const router        = new Router();

router.get('/search/:name', async (context) => {
    let users    = await context.userRepository.getUser(context.params.name);

    context.logger.log({query: context.params.name, result: users});
    context.render('index.html', { users });
});

router.get('/add/:name', async (context) => {
    let user = await context.userRepository.getUser(context.params.name);
    if(user.length == 0) {
        let addUser = await context.userRepository.addUser(context.params.name);
        context.render('index.html', { addUser, messageSuccess : 'Add success'});
        return addUser;
    } else {
        context.render('index.html', {messageUnsuccess : 'User already exist'});
    }
});

module.exports   = router;
