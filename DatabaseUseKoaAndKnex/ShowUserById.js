const knex  = require('./knex');

module.exports = async(context) => {
    if( ! context.query.id) {
        return context.body = {
            message : 'Id is required'
        }
    }

    const result = await knex.select('*').from('users').where('id', context.query.id);
    context.body = result[0] || {messgae : 'No user'}
}
