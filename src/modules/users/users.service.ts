import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as firebase from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { UserRegister } from '../model/user-register';
import { UserEditProfile } from '../model/userd-edit-profile';

var admin = require('firebase-admin');

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string) {
    const userSnapshot = await getFirestore().collection('users').doc(id).get();
    return userSnapshot.data();
  }

  update(id: string, userRegister: UserEditProfile) {
    const userSnapshot = getFirestore().collection('users').doc(id);
    return userSnapshot.update(JSON.parse(JSON.stringify(userRegister)));
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  changePassword(id: string, password: { currentPassword: string, newPassword: string }) {

    // admin.reauthenticateWithCredential(admin.auth
    //                                   .EmailAuthProvider
    //                                   .credential(admin.auth().getUserByID(id).email, '123'))
    //                                   .then(() => {
                                        
    //                                   }).catch(error => {throw new HttpException({
    //                                     status: HttpStatus.FORBIDDEN,
    //                                     error: error.message,
    //                                   }, HttpStatus.FORBIDDEN);});
    return firebase.auth().updateUser(id, {password: password.newPassword})
                                            .then(function(userRecord) {
                                              return userRecord.toJSON();
                                            });
  }
}
