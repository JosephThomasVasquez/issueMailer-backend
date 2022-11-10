const PORT = process.env.PORT || 5051;
const app = require("./app");

// Log server running to console
function listener() {
  console.log(`Server running on port: ${PORT}`);
}

// Run server
app.listen(PORT, listener);
