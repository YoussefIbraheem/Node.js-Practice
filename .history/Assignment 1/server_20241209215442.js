import http from 'http';


http.createServer((request , response)=>{

    
    if (request.url === "/") {
        const content = `
          <form method="POST" action="/message">
            <input type="text" name="message">
            <button type="submit">Submit</button>
          </form>
        `;
        response.setHeader("Content-Type", "text/html");
        response.write(buildHtmlResponse(content));
        return
})