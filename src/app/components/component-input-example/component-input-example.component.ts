import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Rena',
    surName: 'Migdali',
    age: 36,
    email: 'renamygdali@aueb.gr',
    address: 'Patision 80'
  };

  person1: Person = {
    givenName: 'Detjon',
    surName: 'Gjocaj',
    age: 33,
    email: 'gjocaj@aueb.gr',
    address: 'Ermou 110'
  };

}
