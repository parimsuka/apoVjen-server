import { CreateUserDto } from './dto/create-user.dto';
import * as firebase from 'firebase-admin';
import { UserEditProfile } from '../model/userd-edit-profile';
export declare class UsersService {
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: string): Promise<firebase.firestore.DocumentData>;
    update(id: string, userRegister: UserEditProfile): Promise<firebase.firestore.WriteResult>;
    remove(id: number): string;
    changePassword(id: string, password: {
        currentPassword: string;
        newPassword: string;
    }): Promise<object>;
}
