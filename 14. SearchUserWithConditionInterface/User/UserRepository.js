const User = require('./User');

class UserRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async getUser(user) {
        let results = await this.knex.select('*').from('users').where('user', user);
        return results.map(result => new User(result.id, result.user));
    }

    async search(condition) {
        let searchQuery = condition.buildWhereCondition(this.knex.select('*').from('users'));
        let results     = await searchQuery;

        return results.map(result => new User(result.id, result.user));
    }

    async addUser(name) {
        let ids = await this.knex('users').insert({user: name});
        return new User(ids[0], name);
    }
}

module.exports = UserRepository;
