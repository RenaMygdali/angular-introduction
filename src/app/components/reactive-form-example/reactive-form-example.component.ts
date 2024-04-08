import { Component } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/person';
import { EpersonReactiveFormComponent } from '../eperson-reactive-form/eperson-reactive-form.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';

@Component({
  selector: 'app-reactive-form-example',
  standalone: true,
  imports: [
    EpersonReactiveFormComponent,
    PersonTableComponent,
    SimpleDataTableComponent
  ],
  templateUrl: './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.css'
})
export class ReactiveFormExampleComponent {
  currentPerson: EPerson;
  persons: EPerson[] = [];

  onPerson(person: EPerson) {
    this.currentPerson = person;
    this.persons.push(person);
  }
}
