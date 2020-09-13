import { IPosition } from './position.interface'

export interface IPerson {
    readonly _id?: string;
    firstname: string;
    lastname: string;
    age: number;
    position?: IPosition;
}