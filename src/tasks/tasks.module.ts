import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {TasksService} from "./tasks-service";
import {TasksController} from "./tasks.controller";
import {Task, TaskSchema} from "./schemas/task-schemas";


@Module({
    providers: [TasksService],
    controllers: [TasksController],
    imports: [
        MongooseModule.forFeature([
            {name: Task.name, schema: TaskSchema}
        ])
    ]
})

export class TasksModule{

}