import { Observable } from 'rxjs';
import * as firebase from 'firebase-admin';
import { Injectable, NestMiddleware } from '@nestjs/common';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AuthService {

    private defaultApp: any;

  constructor() { 
      
  }

//   login(email: string, password: string) : Observable<User> {
//     return new Observable<User>(observer => {
//       this.auth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL).then(() => {
//         this.auth.signInWithEmailAndPassword(email, password)
//           .then((firebaseUser: firebase.default.auth.UserCredential) => {
//             observer.next({email, id: firebaseUser.user.uid});
//             observer.complete();
//           }).catch(error => {
//             observer.error(error);
//             observer.complete();
//           })
//         })
//       })
//     }
  }
