import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';


@Component({
  selector: 'app-array',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './array.component.html',
  styleUrl: './array.component.scss'
})
export class ArrayComponent {

  ngOnInit(): void {
    let arrayData = [];
    for (let i = 0; i < 10; i++) {
      arrayData.push(i);
    }
    console.log(arrayData);

    let arrayData2 = [10, 20, 3, 5, 8, 9, 23, 657, 123, 67];
    console.log(arrayData2.indexOf(9));
    // for (let j = 0; j < arrayData2.length; j++){
    //   if(arrayData2[j] == 9){
    //     console.log(j)
    //   }
    // }
  }


  arrayData = [
    { id:1,
      name: 'A',
      age: 14,
      userData:[
        { userID:'1'}
      ]
    },
    { id:2,
      name: 'B',
      age: 20,
      userData:[
        { userID:'2'}
      ]
    },
    { id:3,
      name: 'C',
      age: 25,
      userData:[
        { userID:'3'}
      ]
    }
  ];


  arrayData2 = [10, 20, 3, 5, 8, 9, 23, 657, 123, 67];
  arrayData3 = [
    {
      username: 'UserA',
      lev: 10,
      props: [
        {
          propsName: 'Mashroom',
          amount: 5
        },
        {
          propsName: 'Coins',
          amount: 15
        }
      ]
    },
    {
      username: 'UserB',
      lev: 15,
      props: [
        {
          propsName: 'Turtle shell',
          amount: 1
        },
        {
          propsName: 'Armor',
          amount: 1
        }
      ]
    }
  ]


  arrayData4 = [
    { name: 'xijie', path: '/practice/xijie' },
    { name: 'css', path: '/practice/css' },
    { name: 'html', path: '/practice/html'}
  ]
}
