const PORT = process.env.PORT || 3000;

const appConfig = require("./src/config/app.config");

const connection = require("./src/config/db");

const app = appConfig();

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Mysql connected Id: ${connection.threadId}`);
    app.listen(PORT, (error) => {
      if (error) {
        console.log("erro ao inicializar o servidor");
      } else {
        console.log(`Servidor inicializado: http://localhost:${PORT}`);
      }
    });
  }
});
