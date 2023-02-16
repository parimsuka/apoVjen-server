import { ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserRegister } from '../model/user-register';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

describe('RegisterController', () => {
  let controller: RegisterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterController],
      providers: [RegisterService],
    }).compile();

    controller = module.get<RegisterController>(RegisterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('given user register validation, when name is empty, then return error 400', done => {
    const userRegister = createUserRegister();
    userRegister.name = "";

    validateFail(userRegister, done);
  });

  it('given user register validation, when email is empty, then return error 400', done => {
    const userRegister = createUserRegister();
    userRegister.email = "invalid";

    validateFail(userRegister, done);
  });

  it('given user register validation, when email is invalid, then return error 400', done => {
    const userRegister = createUserRegister();
    userRegister.email = "";

    validateFail(userRegister, done);
  });

  it('given user register validation, when password is less than 6 characters, then return error 400', done => {
    const userRegister = createUserRegister();
    userRegister.password = "12345";

    validateFail(userRegister, done);
  });

  it('given user register validation, when phone is empty, then return error 400', done => {
    const userRegister = createUserRegister();
    userRegister.phone = "";

    validateFail(userRegister, done);
  });

  it('given user register validation, when phone is invalid, then return error 400', done => {
    const userRegister = createUserRegister();
    userRegister.phone = "invalid";

    validateFail(userRegister, done);
  });

  it('given user register validation, when address is empty, then return error 400', done => {
    const userRegister = createUserRegister();
    userRegister.address.address = "s";

    validateFail(userRegister, done);
  });

  it('given user register validation, when number is empty, then return error 400', done => {
    const userRegister = createUserRegister();
    userRegister.address.number = "";

    validateFail(userRegister, done);
  });

  it('given user register validation, when number is invalid, then return error 400', done => {
    const userRegister = createUserRegister();
    userRegister.address.number = "invalid";

    validateFail(userRegister, done);
  });

  it('given user register validation, when zip is empty, then return error 400', done => {
    const userRegister = createUserRegister();
    userRegister.address.zip = "";

    validateFail(userRegister, done);
  });

  it('given user register validation, when zip is invalid, then return error 400', done => {
    const userRegister = createUserRegister();
    userRegister.address.zip = "invalid";

    validateFail(userRegister, done);
  });

  it('given user register validation, when state is empty, then return error 400', done => {
    const userRegister = createUserRegister();
    userRegister.address.state = "";

    validateFail(userRegister, done);
  });


  it('given user register validation, when city is empty, then return error 400', done => {
    const userRegister = createUserRegister();
    userRegister.address.city = "";

    validateFail(userRegister, done);
  });

  function validate(userRegister: UserRegister) {
    const validationPipe = new ValidationPipe({transform: true});

    return validationPipe.transform(userRegister, {
      type: "body",
      metatype: UserRegister
    });
  }

  function validateFail(userRegister: UserRegister, done: any) {
    validate(userRegister).catch(error => {
      expect(error.getResponse().statusCode).toEqual(400);
      done();
    });
  }

  function createUserRegister() {
    return {
      name: "anyName",
      email: "any@email.com",
      password: "anyPassword",
      phone: "anyPhone",
  
      address: {
          address: "anyAddress",
          number: "anyNumber",
          zip: "anyZip",
          state: "anyState",
          city: "anyCity"
      }
    }
  }
});
