import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    create(createLocationDto: CreateLocationDto): Promise<void>;
    findAll(): Promise<any[]>;
    findOne(id: string): string;
    remove(id: string): string;
}
