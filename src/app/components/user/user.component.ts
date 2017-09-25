import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name:string;
  private age:number;
  private email:string;

  //dictionary
  private address:{
    street:string,
    city:string,
    province:string,
    postcode:string
  }
  private todoList:Todo[];
  private isEditable:boolean = true;

  //array
  private skills:string[];
  constructor(private TodoService:TodoService) { }

  ngOnInit() {
    this.name = "suriya vonpian";
    this.age = 15;
    this.email = "suriya.v@mail.com";

    this.address = {
      street: "59 lpn",
      city: "bkk",
      province: "Bankok",
      postcode: "10120"
    }

    this.skills = ["Program", "tennis", "eat"];

    // Call Service
    this.TodoService.getTodoList().subscribe((Response) => {
        this.todoList = Response;
    })

  }
  addSkill(skill) {
    this.skills.unshift(skill);
    return false;
  }

  toggleEdit() {
    this.isEditable =! this.isEditable;
  }
  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(index, 1);
      }
    });
  }
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
