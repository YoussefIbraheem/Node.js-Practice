import fs from "fs";

const buildHtmlResponse = (content) => `
<html>
  <head><title>Node.js App</title></head>
  <body>${content}</body>
</html>
`;

const routesHandler = (request, response) => {
  if (request.url === "/") {
    const content = `
      <form method="POST" action="/message">
        <input type="text" name="message">
        <button type="submit">Submit</button>
      </form>
    `;
    response.setHeader("Content-Type", "text/html");
    response.write(buildHtmlResponse(content));
    return response.end();
  }

  if (request.url === "/message" && request.method === "POST") {
    const body = [];
    request.on("data", (chunk) => body.push(chunk));

    request.on("end", () => {
      const parsedData = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedData);
      const message = params.get("message");

      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.error("Error writing file:", err);
          response.statusCode = 500;
          response.setHeader("Content-Type", "text/html");
          response.write(buildHtmlResponse("<h1>Internal Server Error</h1>"));
          return response.end();
        }
        response.statusCode = 302;
        response.setHeader("Location", "/");
        response.end();
      });
    });
   
  }

  response.setHeader("Content-Type", "text/html");
  response.write(buildHtmlResponse("<h1>Hello from my Node.js Server!</h1>"));
  response.end();
};

export const handler = routesHandler;
export const hardCode = "<h1>Hard Code!</h1>";
