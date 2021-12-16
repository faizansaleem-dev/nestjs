import { seeder } from "nestjs-seeder";
import { MongooseModule } from "@nestjs/mongoose";
import { Role, RoleSchema } from "../roles/models/role.schema";
import { RolesSeeder } from "./role.seeder";
 
seeder({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/practice"),
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
  ],
}).run([RolesSeeder]);