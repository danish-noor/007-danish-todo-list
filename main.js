#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.red.bold("\n\t WellCome To Danish Todo-List Application \n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await DeleteTask();
        }
        else if (option.choice === "Update Task") {
            await updatedTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter Your New Task:",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);
};
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}:${task}`);
    });
};
let DeleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index no. of the task you want to delete:"
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted from your Todo-List `);
};
let updatedTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index no of the task you want to update:",
        },
        {
            name: "newTask",
            type: "input",
            message: "Now enter new task name:",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.newTask;
    console.log(`task at index no. ${update_task_index.index - 1} updated successfully[for updated list cheak option: "view Todo-List"]`);
};
main();
