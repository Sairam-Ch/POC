
var conf = {
    web : {
        host : '0.0.0.0',
        port : '84',
        method : 'session',
        views : {},
        static : {}
    },
    database : {
        api : 'mongodb',
        host : '10.0.2.26',
        port : '27017',
        schema : 'neo',
        auth : false,
        username : '',
        password : '',
        url:'mongodb://10.0.2.26:27017/neo'
    }
};

module.exports = conf;
