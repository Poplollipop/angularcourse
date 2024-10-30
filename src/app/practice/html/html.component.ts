import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-html',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink,],
  templateUrl: './html.component.html',
  styleUrl: './html.component.scss'
})
export class HtmlComponent {

  constructor(private router: Router) {

  }
  gochilda(): void {
    this.router.navigate(['/roles/child-a']);
    // this.router.navigateByUrl('/child-a');
  }
}
