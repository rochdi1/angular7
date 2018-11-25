import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private afs: AngularFirestore) { }

  getClients() {
    return this.afs.collection('clients').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );;
  }

  persistClient(data) {
    return this.afs.collection('clients').add(data);
  }

  getOneClient(id) {
    return this.afs.collection('clients').doc(id).valueChanges();
  }


  setClient(client) {
    return this.afs.collection('clients').doc(client.id).update(client);
  }

  setActive(id, myActive) {
    return this.afs.doc(`clients/${id}`).update({active: !myActive});
  }
}
