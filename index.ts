#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todolist = [];
let condition = true;

console.log(
   chalk.blackBright.bgYellow.bold("\n\n\t\t Wellcome to SUK Todo list \n\n")
);

while (condition) {
  let addtask = await inquirer.prompt([
    {
      name:"todo",
      type: "input",
      message: chalk.blueBright("Enter your task :"),
    },
  ]);
  todolist.push(addtask.todo);
  console.log(chalk.redBright(`${chalk.greenBright(addtask.todo)} task added in Todo list`));

  let addmoretask = await inquirer.prompt([
    {
      name: "addmore",
      type: "confirm",
      message: chalk.blueBright("Do you want to add more task"),
      default: "false",
    },
  ]);
  condition = addmoretask.addmore;
}

console.log(chalk.magentaBright(`\n*** ${chalk.blackBright.bgYellow("your Todo list")} ***`));
todolist.forEach((list) => console.log(`${chalk.greenBright(list)}`));

let ans = await inquirer.prompt({
  type: "list",
  message: chalk.blueBright("select an operation"),
  name: "select",
  choices: ["update", "view", "delete"],
});

if (ans.select == "update") {
  let updatetodo = await inquirer.prompt({
    type: "list",
    message: chalk.blueBright("update value in the list"),
    name: "todo",
    choices: todolist.map((item) => item),
  });
  let addtodo = await inquirer.prompt({
    type: "input",
    message: chalk.blueBright("add value in  the list"),
    name: "todo",
  });

  let newtodo = todolist.filter((va1) => va1 !== updatetodo.todo);
  todolist = [...newtodo, addtodo.todo];
}

if (ans.select == "view") {
}

if (ans.select == "delete") {
  let deletetodo = await inquirer.prompt({
    type: "list",
    message: chalk.blueBright("delete value in list"),
    name: "todo",
    choices: todolist.map((item) => item),
  });
  let newtodo = todolist.filter((va1) => va1 !== deletetodo.todo);
  todolist = [...newtodo];
}
console.log(chalk.magentaBright(`\n*** ${chalk.blackBright.bgYellow("your Todo list")} ***`));

todolist.forEach((list) => console.log(`${chalk.greenBright(list)}`));
