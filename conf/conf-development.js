
var conf = {
    web: {
        host: "0.0.0.0",
        port: "8601",
        method: "session",
        views: {},
        static: {}
    },
    database: {
        api: 'mongodb',
        host: '127.0.0.1',
        port: '27107',
        schema: 'neoHome',
        auth: false,
        username: '',
        password: '',
        url:'mongodb://127.0.0.1:27017/neoHome'
    },

    'session': {
        store: 'neols', // redis | mongo | inmemory //TODO mongo not implemented
        host: '0.0.0.0',
        port: '6379'
    }

};

module.exports = conf;
