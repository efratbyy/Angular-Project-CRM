import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, UserCredential } from '@angular/fire/auth';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  login(user: User): Promise<UserCredential>{
    return signInWithEmailAndPassword(this.auth, user.email, user.password)
  }
  
  loginGoogle(): Promise<UserCredential>{
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  register(newUser: User): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, newUser.email, newUser.password);
  }

  logout(){
    return this.auth.signOut();
  }
}
