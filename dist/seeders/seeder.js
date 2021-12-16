"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nestjs_seeder_1 = require("nestjs-seeder");
const mongoose_1 = require("@nestjs/mongoose");
const role_schema_1 = require("../roles/models/role.schema");
const role_seeder_1 = require("./role.seeder");
(0, nestjs_seeder_1.seeder)({
    imports: [
        mongoose_1.MongooseModule.forRoot("mongodb://localhost/practice"),
        mongoose_1.MongooseModule.forFeature([{ name: role_schema_1.Role.name, schema: role_schema_1.RoleSchema }]),
    ],
}).run([role_seeder_1.RolesSeeder]);
//# sourceMappingURL=seeder.js.map