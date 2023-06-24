import { Register } from 'src/app/interface/register.interface';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { deleteDoc, doc } from '@firebase/firestore';
import { updateDoc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private firestore: Firestore) { }

  getData(id: string): Observable<Register[]> {
    const cartRef = collection(this.firestore, 'Register' + id);
    return collectionData(cartRef, { idField: 'uid' }) as Observable<Register[]>;
  }

   deleteData(uid: string) {
    const cardRef = doc(this.firestore, 'Register/' + uid);
    return deleteDoc(cardRef);
  }

}
