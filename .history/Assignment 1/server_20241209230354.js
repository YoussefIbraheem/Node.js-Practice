import http from "http";
import fs from "fs";
import { URLSearchParams } from "url";

const server = http.createServer((request, response) => {
  const buildHtmlResponse = (content) => `
<html>
  <head><title>Node.js App</title></head>
  <body>${content}</body>
</html>
`;

  if (request.url === "/") {
    const content = `<h1>Welcome To Users List</h1><a href="http://localhost:3000/create-user">create user</a>`;
    response.setHeader("Content-Type", "text/html");
    response.write(buildHtmlResponse(content));
    return;
  }
  if (request.url === "/create-user") {
    const content = `
          <form method="POST" action="/create">
            <input type="text" required placeholder="Name" name="user-name">
            <button type="submit">Submit</button>
          </form>
        `;
    response.setHeader("Content-Type", "text/html");
    response.write(buildHtmlResponse(content));
    return response.end();
  }

  if (request.url === "/create" && request.method === "POST") {
    const body = [];
    request.on("data", (chunk) => {
      body.push(chunk);
    });

    request.on("end", () => {
      const parsedData = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedData);
      const message = params.get("user-name");
      const getNextLine = () =>{
        const file = fs.readFileSync("message.txt");
        con
      }

      fs.writeFileSync("message.txt", message, (err) => {
        if (err) {
          console.error("Error writing file:", err);
          response.statusCode = 500;
          response.setHeader("Content-Type", "text/html");
          response.write(buildHtmlResponse("<h1>Internal Server Error</h1>"));
          return response.end();
        }
      });
    });
  }
  response.statusCode = 302;
  response.setHeader("Location", "/");
  return response.end();
});

server.listen(3000);
