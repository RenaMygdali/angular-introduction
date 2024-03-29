import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Rena';

  person0 = {
    givenName: 'Rena',
    surName: 'Migdali',
    age: 36,
    email: 'renamygdali@aueb.gr',
    address: 'Patision 80'
  }

  person1 = {
    givenName: 'Detjon',
    surName: 'Gjocaj',
    age: 33,
    email: 'gjocaj@aueb.gr',
    address: 'Ermou 110'
  }
}
