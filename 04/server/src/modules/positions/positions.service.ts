import { HttpService, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose/dist/common/mongoose.decorators";
import { Model } from "mongoose";
import { PositionDto } from "./dto/position.dto";
import { Position } from './interfaces/position.interface';

@Injectable()
export class PositionsService {
    constructor(@InjectModel('Position') private positionModel: Model<Position>) {}

    async getAll() : Promise<Position[]> {
        return this.positionModel.find();
    }

    async create(positionDto: PositionDto) {
        const createdItem = new this.positionModel(positionDto);
        return createdItem.save();
    }
}