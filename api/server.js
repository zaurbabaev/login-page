import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  }),
);

server.use(router);

server.listen(3001, () => {
  console.log("✅ JSON Server running on http://localhost:3001");
});
