import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import { Model} from 'mongoose'
import {CreateTasksDto} from "./dto/create-tasks.dto";
import {Task, TaskDocument} from "./schemas/task-schemas";


@Injectable()
export class TasksService{
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument> ) {
    }

    async getAll(): Promise<Task[]>{
        return this.taskModel.find().exec()
    }

    async getById(id: string): Promise<Task>{
        return this.taskModel.findById(id)
    }

    async create(tasksDto: CreateTasksDto): Promise<Task>{
        const new
    }
}