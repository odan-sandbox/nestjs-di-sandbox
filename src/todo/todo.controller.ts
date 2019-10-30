import { Controller, Get } from "@nestjs/common";
import { TodoService } from "./todo.service";

@Controller("todo")
export class TodoController {
  private todoService: TodoService;
  public constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  @Get()
  public get() {
    return this.todoService.getTodos();
  }
}
