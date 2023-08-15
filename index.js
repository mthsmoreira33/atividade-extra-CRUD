const users = [];

function createUser(username, password) {
    if (users.some(user => user.username === username)) {
        console.log('Usuário já cadastrado!')
    } else if(!username || !password) {
        console.log('Por favor, insira usuário ou senha');
    } else {
        const user = {
            username,
            password,
            tasks: []
        }
        users.push(user);
    }
}

function login(username, password) {
    if (users.find(user => user.username === username && user.password === password)) {
        console.log(listTasks(username));
    } else if (!username || !password) {
        console.log('Insira usuário ou senha!');
    } else {
        console.log('Não foi possível logar, usuário ou senha errados!');
    }
}

function createTask(title, description, username) {
    if (!title) {
        console.log('Título obrigatório!');
    } else {
        const task = {
            title,
            description,
            completed: false
        }

        const userIndex = users.findIndex((user) => user.username === username);

        if (userIndex === -1) {
            console.log("Usuário não encontrado");
        } else {
            users[userIndex].tasks.push(task);
        }
    }
}

function listTasks(username) {
    const userIndex = users.findIndex((user) => user.username === username);

    if (userIndex === -1) {
        console.log("Usuário não encontrado");
    } else {
      users[userIndex].tasks.forEach((element, index) => console.log(`Index: ${index}, Título: ${element.title}, Descrição: ${element.description}, Completo: ${element.completed ? "Sim" : "Não"}`));
    }

}

function updateTaskStatus(index, isCompleted, username) {
    const userIndex = users.findIndex((user) => user.username === username);
    if (userIndex === -1) {
        console.log('Usuário não encontrado!');
    } else {
        if (index < 0 || index >= users[userIndex].tasks.length) {
          console.log("Índice não econtrado");
        } else {
          users[userIndex].tasks[index].completed = isCompleted;
        }
    }
}

function updateTask(index, newTitle, newDescription, username) {
    const userIndex = users.findIndex((user) => user.username === username);
    if(userIndex === -1) {
        console.log("Índice não encontrado");
    } else {
        if (index < 0 || index >= users[userIndex].tasks.length) {
          console.log("Índice não econtrado");
        } else {
          users[userIndex].tasks[index].title = newTitle;
          users[userIndex].tasks[index].description = newDescription;
        }
    }
}

function deleteTask(index, username) {
    const userIndex = users.findIndex((user) => user.username === username);
    if (userIndex === -1) {
        console.log('Usuário não encontrado');
    } else {
        if (index < 0 || index >= users[userIndex].tasks.length) {
          console.log("Índice não encontrado");
        } else {
          users[userIndex].tasks.splice(index, 1);
        }
    }
}

createUser('Maynard', '123');
createUser('Areirom', '321');
createTask("a", "a", "Areirom");
console.log(login('Areirom', '321'));
