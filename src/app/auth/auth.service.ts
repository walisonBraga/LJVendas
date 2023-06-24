import { Injectable } from '@angular/core';
import { Auth, User, UserInfo, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, collection, doc, query, where, getDocs, deleteDoc } from '@angular/fire/firestore';
import { auth } from 'firebaseui';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user!: User;

  constructor(public afAuth: Auth, private firestore: Firestore) { }

  async login(email: string, password: string) {
    const LoginUser = await signInWithEmailAndPassword(this.afAuth, email, password);
    return LoginUser;
  }

  async register(email: string, password: string) {
    const RegisterUser = await createUserWithEmailAndPassword(this.afAuth, email, password);
    return RegisterUser;
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('user')!) as User;
    const userInfo = JSON.parse(localStorage.getItem('userInfo')!) as UserInfo;
    return userInfo;
  }

  deleteDoc(uid: string) {
    const authRef = this.afAuth.currentUser ? this.afAuth.currentUser
      .delete() : this.afAuth.languageCode;
    return authRef
  }

  getUserInfo(id: string): void {
    const registerRef = collection(this.firestore, 'register');
    const userRef = query(registerRef, where("uid", "==", id));
    getDocs(userRef)
      .then(res => {
        if (res.docs.length > 0 && res.docs) {
          const data = res.docs[0].data();
          delete data['confirmPassword'];
          delete data['password'];
          delete res.docs[res.docs.length - 1];
          localStorage.setItem('userInfo', JSON.stringify(data));
        }
      })
  }

}
