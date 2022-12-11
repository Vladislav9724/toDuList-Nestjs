import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type TaskDocument = Task & Document

@Schema({timestamps: true} )
export class Task{

    @Prop()
    title: string

    @Prop()
    body: string

    @Prop({default: false})
    isCompleted: boolean

    @Prop()
    createdAt: string

    @Prop()
    updatedAt: string
}

export const TaskSchema = SchemaFactory.createForClass(Task)