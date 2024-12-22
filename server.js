const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "views")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

// Ruta pentru procesarea formularului de contact
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Afișăm datele primite în consolă
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Trimitem un răspuns utilizatorului
  res.send("<h1>Mulțumesc pentru mesaj! Te voi contacta cât mai curând.</h1>");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
