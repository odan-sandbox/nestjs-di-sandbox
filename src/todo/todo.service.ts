import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Todo } from "../schemas/todo.schema";

export interface Todo {
  id: number;
  title: string;
}

@Injectable()
export class TodoService {
  public constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>
  ) {}
  public async getTodos() {
    const count = await this.todoRepository.count();
    await this.todoRepository.save(
      this.todoRepository.create({
        title: `todo ${count}`
      })
    );
    const todos = await this.todoRepository.find();
    return todos;
  }
}
