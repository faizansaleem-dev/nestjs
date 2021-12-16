import { Model } from "mongoose";
import { Role } from "../roles/models/role.schema";
import { Seeder } from "nestjs-seeder";
export declare class RolesSeeder implements Seeder {
    private readonly role;
    constructor(role: Model<Role>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
