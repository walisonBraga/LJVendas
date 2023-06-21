import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData } from '@angular/fire/firestore';
import { Register } from '../interface/register.interface';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private fire: Firestore) { }

  addRegister(register: Register) {
    const registerUser = collection(this.fire, 'Register');
    return addDoc(registerUser, register  as Register | Register);
  }

  getRegister(id: string): Observable<Register[]> {
    const registerUser = collection(this.fire, 'Register');
    return collectionData(registerUser, {idField: id}) as Observable<Register[]>;
    // return query(registerUser, where('email', '==', email));
  }


}
