export interface CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
export interface UpdateUserDto {
    id: string;
}
export declare type DeleteUserDto = UpdateUserDto;
