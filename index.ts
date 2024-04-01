#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todolist = [];
let condition = true;

console.log(
  chalk.magentaBright.bgYellow.bold("\n\n\t\t Wellcome to SUK Todo list \n\n")
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
  console.log(chalk.redBright(`${addtask.todo} task added in Todo list`));

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

console.log(chalk.blueBright("your Todo list"), todolist);
