

const jsonServer = require("json-server")
const server = jsonServer.create();
const router = jsonServer.router("./src/jobs.json")
const middlewares = jsonServer.defaults({
    static : "./build"
})


server.use(middlewares);
server.use('/api', router);
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

