import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.component.html',
  standalone: true,
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

  constructor(private router: Router) { }
  navigateTo(section: string) {
     this.router.navigate([section]);
  }
}
