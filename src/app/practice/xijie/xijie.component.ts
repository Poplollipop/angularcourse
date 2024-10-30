import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-xijie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './xijie.component.html',
  styleUrl: './xijie.component.scss'
})
export class XijieComponent {
  title = '角色等級計算機';
  level = 1;
  attack = 10;
  defence = 10;
  inputData!: number;
  placeholder = 'Input what leves would you upgrade'



  levelup(): void {
    this.level++;
    for (let i = 0; i < 1; i++) {
      this.attack += 3;
      this.defence += 2;
    }
  }

  leveldown(): void {
    this.level--;
    if (this.level >= 0) {
      for (let i = 0; i < 1; i++) {
        this.attack -= 3;
        this.defence -= 2;
      }
    } else {
      alert("Level must be > 0")
      this.level = 0;
      this.attack;
      this.defence;
    }
  }
  resetlevel(): void {
    if (this.level > 1) {
      alert("Are you sure to reset the levels?")
    } else {
      alert("You're level 1 now no need to reset.")
    }
    this.level = 1;
    this.attack = 10;
    this.defence = 10;
  }

  setlevel(): void {
    if (this.inputData == this.level) {
      alert("Invalid set you're in the level you want to change")
      return;
    }
    if (this.inputData >= 0) {
      alert("Are you sure to change you level to : " + this.inputData)
      this.level = this.inputData;
      this.attack += (this.level - 1) * 3; // 每升一級增加 3
      this.defence += (this.level - 1) * 2; // 每升一級增加 2
    }
  }
}
