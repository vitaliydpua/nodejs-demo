import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPerson } from 'src/app/interfaces/person.interface';
import { IPosition } from 'src/app/interfaces/position.interface';
import { PeopleService } from 'src/app/services/people.service';
import { PositionsService } from 'src/app/services/positions.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client';

  people: IPerson[];
  positions: IPosition[];

  constructor(private peopleService: PeopleService,
    private positionsService: PositionsService) {
    
  }
  ngOnInit(): void {
     this.peopleService.getAll().subscribe(res => {
       this.people = res;
     });
    // this.peopleService.get("5f54e91fbc6dd9a80fa4b9a0").subscribe(res => {
    //   console.log(res);
    // });
    this.positionsService.getAll().subscribe(res => {
      this.positions = res;
    })
    // this.positionsService.get("5f54d9e9d8e60d9a1fd001e1").subscribe(res => {
    //     console.log(res);
    // })

    // this.peopleService.create({
    //   firstname: "Petya",
    //   lastname: "Sidorov",
    //   age: 30,
    // }, "5f5e27c1ad1d784d776fa6f5").subscribe(res => {
    //     //console.log(res);
    //     this.people.push(res);
    // });
  }
}
