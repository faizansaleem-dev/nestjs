import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Role } from "../roles/models/role.schema";
import { Seeder } from "nestjs-seeder";

@Injectable()
export class RolesSeeder implements Seeder {
  constructor(@InjectModel(Role.name) private readonly role: Model<Role>) {}
 
  async seed(): Promise<any> {
    // Generate 10 users.
    const roles = [{role: "ADMIN"}, {role: "EMPLOYEE"}]
 
    // Insert into the database.
    return this.role.insertMany(roles);
  }
 
  async drop(): Promise<any> {
    return this.role.deleteMany({});
  }
}