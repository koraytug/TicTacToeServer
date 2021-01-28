# TicTacToeServer  

TicTacToeServer is NodeJS based application for returning resul from given input

## **Payload format**

The payload should look like the following:

    {'board': [[0, 1, 2], [3, 4, 5], [6, 7, 8]]}

## **Example curl calls**

$ curl -d '{"board": [["x","x","x"],["o","o", ""],["","",""]]}' -H 'Content-Type: application/json' 127.0.0.1:5000

    result =>  {"winner": "x"}

$ curl -d '{"board": [["o","",""],["x","o", "x"],["","","o"]]}' -H 'Content-Type: application/json' 127.0.0.1:5000

    result =>  {"winner": "o"}

$ curl -d '{"board": [["x","","x"],["o","o", ""],["","",""]]}' -H 'Content-Type: application/json' 127.0.0.1:5000

    result =>  {"winner": "null"}

### starting server

npm run start
