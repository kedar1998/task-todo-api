const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
require('./db/connect')

// MIDDLEWARE
app.use(express.json())


// Routes
app.use("/api/v1/tasks", tasks)


const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}`);
})