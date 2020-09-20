import { Document } from 'mongoose';
import { Position } from '../../positions/interfaces/position.interface';

export interface Person extends Document{
    readonly firstname: string;
    readonly lastname: string;
    readonly age: number;
    readonly position: Position;
}