import { PositionDto } from "src/modules/positions/dto/position.dto";

export class PersonDto {
    readonly _id?: string;
    readonly firstname: string;
    readonly lastname: string;
    readonly age: number;
    readonly position: PositionDto;
}