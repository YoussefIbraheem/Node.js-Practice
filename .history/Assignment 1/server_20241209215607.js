import http from "http";

http.createServer((request, response) => {
  const buildHtmlResponse = (content) => `
<html>
  <head><title>Node.js App</title></head>
  <body>${content}</body>
</html>
`;

  if (request.url === "/")
  {
    const content = `<h1><h1`
  }
    if (request.url === "/create-user") {
      const content = `
          <form method="POST" action="/message">
            <input type="text" name="message">
            <button type="submit">Submit</button>
          </form>
        `;
      response.setHeader("Content-Type", "text/html");
      response.write(buildHtmlResponse(content));
      return;
    }
});