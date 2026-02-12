const app = require("./src/app");

const PORT = process.env.PORT || 5000; // Use Render's PORT if available
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});