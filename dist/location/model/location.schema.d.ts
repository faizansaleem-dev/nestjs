import { Document } from "mongoose";
export declare type LocationDocument = Location & Document;
export declare class Location {
    location: {
        type: string;
        coordinates: number[];
    };
}
export declare const LocationSchema: import("mongoose").Schema<Document<Location, any, any>, import("mongoose").Model<Document<Location, any, any>, any, any, any>, any>;
