import { HttpService, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose/dist/common/mongoose.decorators";
import { Model } from "mongoose";
import { PersonDto } from "./dto/person.dto";
import { Person } from "./interfaces/person.interface";

@Injectable()
export class PeopleService {
    constructor(@InjectModel('Person') private peopleModel: Model<Person>) {}

    async getAll() : Promise<Person[]> {
        return this.peopleModel.find().populate('position');
    }

    async create(personDto: PersonDto): Promise<Person> {
        const createdItem = new this.peopleModel(personDto);
        return createdItem.save();
    }
}