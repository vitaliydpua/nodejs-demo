import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


export const PositionSchema = new mongoose.Schema({
    name: String,
});