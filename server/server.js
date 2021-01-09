const app = require('express')();
const PORT = 3000;
const connectDB = require('./config/db');
connectDB();

app.use(express.json());
app.use('/api/image', require('./api/image'));

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});
