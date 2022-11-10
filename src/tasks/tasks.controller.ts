import {Body, Controller, Delete, Get, Param, Post, Put, HttpCode, HttpStatus, Header} from '@nestjs/common';
import {CreateTasksDto} from "./dto/create-tasks.dto";
import {UpdateTasksDto} from "./dto/update-tasks.dto";
import {TasksService} from "./tasks-service";
import { Task } from "./schemas/task-schemas";

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {
    }

    @Get()
    getAll(): Promise<Task[]>{
        return this.tasksService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string):Promise<Task>{
       return this.tasksService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createTasksDto: CreateTasksDto):Promise<Task>{
        return this.tasksService.create(createTasksDto)
    }

    @Delete(':id')
    remove(@Param('id') id:string):Promise<Task>{
        return this.tasksService.remove(id)
    }

    @Put(':id')
    update(@Body() updateTaskDto: UpdateTasksDto, @Param('id')id:string):Promise<Task>{
        return this.tasksService.update(id, updateTaskDto)
    }

}
