import { Model } from 'mongoose';
import { CreateLocationDto } from './dto/create-location.dto';
import { LocationDocument } from './model/location.schema';
export declare class LocationService {
    private locationModel;
    constructor(locationModel: Model<LocationDocument>);
    addLocation: (createLocationDto: CreateLocationDto) => Promise<void>;
    findAll: () => Promise<any[]>;
    findOne(id: number): string;
    remove(id: number): string;
}
