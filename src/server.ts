import * as http from "http"

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
        const winner= "will be from method";
        
        response.setHeader("Content-Type", "application/json");
        response.writeHead(200);
        response.end(`${JSON.stringify(winner)}`);
        });
        }).listen(5000); 
    }
}