import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLocationDto } from './dto/create-location.dto';
// import { UpdateLocationDto } from './dto/update-location.dto';
import { Location, LocationDocument } from './model/location.schema';

@Injectable()
export class LocationService {
  constructor(@InjectModel(Location.name) private locationModel: Model<LocationDocument>) {}
  addLocation = async(createLocationDto: CreateLocationDto) => {
    this.locationModel.create(createLocationDto)
  }

  findAll = async () => {
    return await this.locationModel.aggregate( [
      {
         $geoNear: {
            near: { type: "Point", coordinates: [ -73.9667, 40.78 ] },
            spherical: true,
            // query: { category: "Parks" },
            distanceField: "calcDistance"
         }
      }
   ] )
  //  console.log(locations, "<<<LOCATIONS")
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  // update(id: number, updateLocationDto: UpdateLocationDto) {
  //   return `This action updates a #${id} location`;
  // }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
