/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />

module App {

    var express = require("express");
    var app = express();
    var uuid = require("node-uuid");
    var router = express.Router();

    var todos = [
        {
            id: uuid.v4(),
            description: "Tarea 1",
            done: false
        },
        {
            id: uuid.v4(),
            description: "Tarea 2",
            done: false
        }
    ];

    app.use(require("body-parser").json());

    app.use(express.static('public'));

    router.get('/todos',  (req, res) => {
        res.send(todos);
    });

    router.post('/todos', (req, res) => {
        var todo = req.body;
        todo.id = uuid.v4();
        todos.push(todo);

        res.send(todo);
    });

    router.delete('/todos/:uid', (req, res) => {
        console.log("Borrando: " + req.param('uid'));
        todos = todos.filter((t) => {
            return t.id != req.id;
        });
        res.send(true);
    });

    router.put('/todos/:uid', (req, res) => {
        console.log("Modificando: " + req.param('uid'));
        var todo = todos.filter((t) => req.param('uid') == t.id)[0];
        todo.done = !todo.done;

        res.send(todo);
    });

    app.use(router);

    var server = app.listen(3000, () => {

        var host = server.address().address;
        var port = server.address().port;

        console.log('TODO app listening at http://%s:%s', host, port);

    });

}