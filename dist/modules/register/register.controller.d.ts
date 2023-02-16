import { UserRegister } from '../model/user-register';
import { RegisterService } from './register.service';
import * as firebase from 'firebase-admin';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
    register(userRegister: UserRegister): Promise<firebase.firestore.WriteResult>;
    getData(userRegister: UserRegister): Promise<void>;
}
