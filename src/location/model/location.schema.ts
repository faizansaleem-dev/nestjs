import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type LocationDocument = Location & Document;

@Schema()
export class Location {
    @Prop({required: true, type: {}})
    location: {
        type: string;
        coordinates: number[];
    }
}

export const LocationSchema = SchemaFactory.createForClass(Location);
LocationSchema.index({location: "2dsphere"})