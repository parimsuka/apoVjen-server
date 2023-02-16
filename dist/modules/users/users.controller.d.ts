import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEditProfile } from '../model/userd-edit-profile';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: string): Promise<FirebaseFirestore.DocumentData>;
    update(id: string, userRegister: UserEditProfile): Promise<FirebaseFirestore.WriteResult>;
    changePassword(id: string, password: {
        currentPassword: string;
        newPassword: string;
    }): Promise<object>;
    remove(id: string): string;
}
