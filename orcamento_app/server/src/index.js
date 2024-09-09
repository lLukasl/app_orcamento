const express = require('express');
const userController = require('./controllers/userController');

const app = express();
const port = 3001;

app.use(express.json());

app.get('/users', userController.getUsers);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});