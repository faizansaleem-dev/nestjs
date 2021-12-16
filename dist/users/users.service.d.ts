import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { UserDocument } from './models/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): void;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
