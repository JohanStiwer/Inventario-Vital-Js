const mysql = require("mysql2");

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "inventariosuero",
  port: 3306,
});

// Conecta a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos:", err);
    return;
  }
  console.log("Conexión exitosa a la base de datos");
});

// Ejemplo de consulta a la base de datos
connection.query("SELECT * FROM usuario", (err, results) => {
  if (err) {
    console.error("Error al realizar la consulta:", err);
    return;
  }
  console.log("Resultados de la consulta:", results);
});

// Cierra la conexión a la base de datos cuando hayas terminado
connection.end((err) => {
  if (err) {
    console.error("Error al cerrar la conexión a la base de datos:", err);
  }
  console.log("Conexión cerrada");
});
