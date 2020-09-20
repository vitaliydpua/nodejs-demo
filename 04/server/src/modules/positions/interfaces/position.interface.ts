import { Document } from 'mongoose';


export interface Position extends Document {
    readonly name: string;
}