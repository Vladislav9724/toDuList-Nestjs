import {Body, Controller, Delete, Get, Param, Post, Put, HttpCode, HttpStatus, Header} from '@nestjs/common';
import {CreateTasksDto} from "./dto/create-tasks.dto";
import {UpdateTasksDto} from "./dto/update-tasks.dto";
import {TasksService} from "./tasks-service";

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {
    }

    @Get()
    getAll(){
        return this.tasksService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string):string{
       return this.tasksService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createTasksDto: CreateTasksDto){
        return this.tasksService.create(createTasksDto)
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return 'Remove ' + id
    }

    @Put(':id')
    update(@Body() updateTaskDto: UpdateTasksDto, @Param('id')id:string){
        return 'Updete ' + id
    }

}
