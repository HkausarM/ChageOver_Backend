const app = require("./app")
require('dotenv').config();
const PORT = process.env.PORT || 3000;
// const PORT = 9000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

