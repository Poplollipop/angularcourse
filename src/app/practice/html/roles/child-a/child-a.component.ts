import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-a',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.scss'
})
export class ChildAComponent {

}
