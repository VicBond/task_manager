const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');


// middleware

app.use(express.json());



// routes 
app.get('/hello', (req, res) => {
  res.send('Task Manager App')
});

app.use('/api/v1/tasks', tasks);


// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get specific task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete tasks

const port = 3000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`Server listening on ${port}...`));
  } catch (error) {
    console.log('error', error);
  }
};

start();
