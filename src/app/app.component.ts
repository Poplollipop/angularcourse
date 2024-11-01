import { Person, TestInterface } from './api-interface/api.interface';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, MatIconModule, MatButtonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements TestInterface {
  name!: string;
  getName(): string {
    return '';
  }

  // constructor(private router: Router) {

  // }

  data!:Person;

  ngOnInit(): void {
    // this.data.name;
    //   // let date = new Date();
    //   // console.log(date);
    //   let arrayData: any[] = [];
    //   for (let i = 1; i <= 50; i++) {
    //     arrayData.push(i);
    //   }
    //   console.log(arrayData)

    //   let arrayData2: any[] = [];
    //   for (let i = 1; i <= 50; i++) {
    //     if ((i % 3 )== 2) {
    //       arrayData2.push(i);
    //     }
    //   }
    //   console.log(arrayData2)

    //   let jasondata = [
    //     { name: '小明', age: 10, number: 1 },
    //     { name: '小陳', age: 24, number: 2 },
    //     { name: '小王', age: 16, number: 3 }
    //   ];
    //   jasondata.forEach((person) => {
    //     if(person.number == 3){
    //       person.age = 18;
    //     }
    //   });
    //   console.log(jasondata);
  }

  // title = '角色等級計算機';
  // level = 1;
  // attack = 10;
  // defence = 10;
  // inputData!: number;
  // placeholder = 'Input what leves would you upgrade'



  // levelup(): void {
  //   this.level++;
  //   for (let i = 0; i < 1; i++) {
  //     this.attack += 3;
  //     this.defence += 2;
  //   }
  // }

  // leveldown(): void {
  //   this.level--;
  //   if (this.level >= 0) {
  //     for (let i = 0; i < 1; i++) {
  //       this.attack -= 3;
  //       this.defence -= 2;
  //     }
  //   } else {
  //     alert("Level must be > 0")
  //     this.level = 0;
  //     this.attack;
  //     this.defence;
  //   }
  // }

  // resetlevel(): void {
  //   if (this.level > 1) {
  //     alert("Are you sure to reset the levels?")
  //   } else {
  //     alert("You're level 1 now no need to reset.")
  //   }
  //   this.level = 1;
  //   this.attack = 10;
  //   this.defence = 10;
  // }

  // setlevel(): void {
  //   if (this.inputData == this.level) {
  //     alert("Invalid set you're in the level you want to change")
  //     return;
  //   }
  //   if (this.inputData >= 0) {
  //     alert("Are you sure to change you level to : " + this.inputData)
  //     this.level = this.inputData;
  //     this.attack += (this.level - 1) * 3; // 每升一級增加 3
  //     this.defence += (this.level - 1) * 2; // 每升一級增加 2
  //   }
  // }

  // levelup():void{
  //   this.level++;
  //   this.attack +=3 // *3
  //   this.defence +=2 //*2
  // }
  // resetlevel():void{
  //   this.level = 1;
  //   this.attack = 10;
  //   this.defence = 10;
  // }

  // setlevel():void{
  //   this.level = this.inputData;
  // this.attack += (this.level - 1) * 3;
  // this.defence += (this.level - 1) * 2;
  // }
  // gochilda(): void {
  //   this.router.navigate(['/roles/child-a']);
  //   // this.router.navigateByUrl('/child-a');
  // }



}
