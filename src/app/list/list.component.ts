import { Component, OnInit } from '@angular/core';
import {List} from '../list'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists = [
    new List (1, 'Fix the roof', 'Complete', new Date (2018,5,8) ),
    new List (2, 'Fix the car', 'Complete', new Date (2018,9,28) ),
    new List (3, 'Fix the rooms', 'InComplete', new Date (2018,2,9) ),
    new List (4, 'Meet Sharon', 'InComplete', new Date (2018,1,8) ),
    new List (5, 'Call Joan', 'Complete', new Date (2018,12,8) ),
    new List (6, 'Slap Collins', 'Complete', new Date (2018,10,8) ),
    new List (7, 'Listen to music', 'InComplete', new Date (2018,8,6) ),
    new List (8, 'Play the guitar', 'InComplete', new Date (2018,5,5) ),
    new List (9, 'Learn the keyboard', 'Complete', new Date (2018,9,2) ),
    new List (10, 'Start programming', 'Complete', new Date (2018,3,8) ),
    new List (11, 'Go shopping', 'Complete', new Date (2018,11,28) ),
    new List (12, 'Go for yoga', 'InComplete', new Date (2018,7,8) ),
    new List (13, 'Call Kuria', 'InComplete', new Date (2018,1,8) ),

  ]

  constructor() { }

  ngOnInit() {
  }

}
