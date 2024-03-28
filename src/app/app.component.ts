import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Rena';

  person = {
    givenName: 'Rena',
    surName: 'Migdali',
    age: 36,
    email: 'renamygdali@aueb.gr'
  }
}
