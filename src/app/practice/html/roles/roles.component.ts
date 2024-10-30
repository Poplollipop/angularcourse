import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink,MatIconModule,],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {

}
