import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  items = new Map<string, any>();

  constructor(private db: AngularFireDatabase) {
    let $items = db.list('/people', ref => ref.orderByChild('firstname')).valueChanges();
    let people = db.list('/people');
    //console.log(root);
    // people.push({
    //   firstname: 'Vasya',
    //   lastname: 'Pupkin',
    //   age: 25,
    //   marks: [1, 2, 3, 4, 5],
    //   demo: [
    //     {
    //       name: 'Name 1',
    //       value: 1
    //     },
    //     {
    //       name: 'Name 2',
    //       value: 2
    //     }
    //   ]
    // });

    // $items.subscribe(res => {
    //   //this.items = res;

    // });
    db.list('/people').snapshotChanges().subscribe(res => {
      this.items.clear();
      res.map(item => {
        this.items.set(item.key, item.payload.exportVal());
      });
      //console.log(this.items);
    })

    setTimeout(async () => {
      console.log('Timeout deleted');
      //console.log(this.items.keys().next().value);
      // for(let val of this.items) {
      //   console.log(val[0]);
      // }
      // try {
      //   console.log(`/people/${this.items.keys().next().value}`);
      //   await db.object(`/people/${this.items.keys().next().value}`).remove();
      // } catch (err) {
      //   console.log(err);
      // }
    }, 1000);

    // db.object('/people/-MIE_-NYpyhLWUEtU8B5').remove().then(res => {
    //   console.log('Success removed')
    // }).catch(err => {
    //   console.log(err);
    // })

  }
}
