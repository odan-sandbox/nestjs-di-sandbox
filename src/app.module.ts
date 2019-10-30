import { Module } from "@nestjs/common";
import { TypeormModule } from "./typeorm/typeorm.module";
import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [TypeormModule, TodoModule]
})
export class AppModule {}
