import http from "node:http";

const HOST = "127.0.0.1";
const PORT = 8080;

const server = http.createServer((request, response) => {
  // console.log("HTTP request diterima!");
  //
  // console.log("Method:", request.method);
  // console.log("URL:", request.url);
  //
  // response.statusCode = 200;
  // response.setHeader("Content-Type", "text/plain");
  //
  // response.end("wello dari HTTP Server!");

  // routing data:
  const url = new URL(
    request.url ?? "/",
    `http://${request.headers.host}`
  );
  const method = request.method;
  const path = url.pathname;

  console.log(`${method} ${path}`);

  if (method === "GET" && path === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Homepage");
    return;
  }

  if (method === "GET" && path === "/users") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Daftar users");
    return;
  }

  if (method === "GET" && path === "/about") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Tentang server");
    return;
  }

  response.statusCode = 404;
  response.setHeader("Content-Type", "text/plain");
  response.end("Route tidak ditemukan");
});

server.listen(PORT, HOST, () => {
  console.log(`HTTP Server jalan di http://${HOST}:${PORT}`);
});
