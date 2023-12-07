const express = require('express');
const cors = require('cors');
const session = require('express-session');
const db = require('./db/db');
const { sessionConfig, sessionStore } = require('./db/session'); // Corrected import path

const app = express();
const port = 5000;

// Use session middleware
app.use(session(sessionConfig));

app.use(cors());
app.use(express.json());

// Import your routers
const loginRouter = require('./routes/login.js');
const itemsRouter = require('./routes/addItem.js');
const viewTableRouter = require('./routes/viewTable.js');
const updateItemRouter = require('./routes/updateItem.js');
const removeItemRouter = require('./routes/removeItem.js');
const addUserRouter = require('./routes/addUser.js');
const viewItems = require('./routes/viewItems.js');
const checkEmail = require('./routes/checkEmail.js');
const viewUsersRouter = require('./routes/viewUsers.js');
const removeUserRouter = require('./routes/removeUser.js');



// Use your routers
app.delete('/removeItem/:itemId', removeItemRouter);
app.post('/login', loginRouter);
app.get('/viewItems', viewItems);
app.post('/addItem', itemsRouter);
app.get('/viewTable', viewTableRouter); 
app.put('/updateItem/:itemId', updateItemRouter);
app.post('/addUser', addUserRouter);
app.get('/checkEmail/:email', checkEmail);
app.get('/viewUsers', viewUsersRouter);
app.delete('/removeUser/:email', removeUserRouter);



app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Error handling for db.promise() connection
db.promise()
  .connect()
  .then(() => {
    console.log('Connected to the database');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
