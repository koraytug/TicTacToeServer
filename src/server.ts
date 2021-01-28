import * as http from "http"
import { TicTacToe } from "./tic-tac-toe";

export class Server{
    public static init(port: number) {
        http.createServer((request, response) => {
        const { headers, method, url } = request;
        
        let body ="";
        request.on('error', (err) => {
        console.error(err);
        }).on('data', (chunk) => {
        body += chunk;
        }).on('end', () => {
        const winner=  TicTacToe.getWinner(body);
        
        response.setHeader("Content-Type", "application/json");
        response.writeHead(200);
        response.end(`${JSON.stringify(winner)}`);
        });
        }).listen(5000); 
    }
}