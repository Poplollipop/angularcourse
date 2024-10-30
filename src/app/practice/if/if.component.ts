import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if.component.html',
  styleUrl: './if.component.scss'
})
export class IfComponent {

  username = 'B'


  ngOnInit(): void {
    let username = 'A';
    if (username == 'A' || username == 'B') {
      console.log('A')
      // return;
    } else if (username == 'B') {
      console.log('B');
    } else {
      console.log(123);
    }
  }

  arrayData = [
    {
      name: 'userA',
      age: 18,
      sex: 'F'
    },
    {
      name: 'userB',
      age: 12,
      sex: 'F'
    },
    {
      name: 'userC',
      age: 28,
      sex: 'M'
    },
    {
      name: 'userD',
      age: 8,
      sex: 'M'
    },
    {
      name: 'userE',
      age: 23,
      sex: 'F'
    },
    {
      name: 'userF',
      age: 38,
      sex: 'M'
    }
  ]

  // newUserData: any[] = [];

  // searchall(): void {
  //   for (const data of this.arrayData) {
  //     this.newUserData.push(data)
  //   }
  //   console.log(this.newUserData)
  // }
  // searchm(): void {
  //   for (const data of this.arrayData) {
  //     if (data.sex == 'M') {
  //       this.newUserData.push(data)
  //     }
  //   }
  //   console.log(this.newUserData)
  // }

  // searchf(): void {
  //   for (const data of this.arrayData) {
  //     if (data.sex == 'F') {
  //       this.newUserData.push(data)
  //     }
  //   }
  //   console.log(this.newUserData)
  // }

  filteredData: any[] = [];

  searchf(): void {
    this.filteredData = this.arrayData.filter(data => data.sex === 'F');
    console.log(this.filteredData);
  }

  searchm(): void {
    this.filteredData = this.arrayData.filter(data => data.sex === 'M');
    console.log(this.filteredData);
  }

  searchall(): void {
    this.filteredData = [...this.arrayData];
    console.log(this.filteredData);
  }
}


