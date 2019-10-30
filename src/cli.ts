import { NestFactory } from "@nestjs/core";
import { Module } from "@nestjs/common";

// import { TodoController } from "./todo/todo.controller";
// import { TypeormModule } from "./typeorm/typeorm.module";
import { AppModule } from "./app.module";

@Module({
  imports: [AppModule],
  // controllers: [TodoController],
  providers: [
    {
      provide: "TodoService",
      useValue: {
        getTodos: () => "poyo"
      }
    },
    {
      provide: "TodoRepository",
      useValue: {}
    },
    {
      provide: "Connection",
      useValue: {}
    }
  ]
})
class CliModule {}

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(CliModule);
  //console.log(app);
  // await app.listen(3001);
}
bootstrap();
