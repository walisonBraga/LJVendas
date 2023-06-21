import { Firestore, collectionData } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { collection } from 'firebase/firestore';
import { Register } from '../interface/register.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private firestore: Firestore) { }

  getData(id: string): Observable<Register[]> {
    const cartRef = collection(this.firestore, 'Register');
    return collectionData(cartRef, { idField: 'uid' }) as Observable<Register[]>;
  }

}
