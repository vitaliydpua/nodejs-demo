import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


export const PersonSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number,
    position: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Position'
    }
});