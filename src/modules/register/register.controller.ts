import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserRegister } from '../model/user-register';
import { RegisterService } from './register.service';
import * as firebase from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  register(@Body() userRegister: UserRegister) {
    return firebase.auth().createUser({ 
      email: userRegister.email,
      password: userRegister.password
    }).then(credential => {
      delete userRegister.password;

      return getFirestore().collection('users').doc(credential.uid).set({...JSON.parse(JSON.stringify(userRegister)), uid: credential.uid});
    }).catch(error => {throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: error.message,
    }, HttpStatus.FORBIDDEN);});
  }

  @Get()
  async getData(@Body() userRegister: UserRegister) {
    // delete userRegister.password;
    // getFirestore().collection('users').add(JSON.parse(JSON.stringify(userRegister)));
    // return firebase.auth().getUserByEmail('sukaparim@gmail.com');
  }
}
