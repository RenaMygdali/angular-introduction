import { Component } from '@angular/core';
import { SimpleDataTableComponent } from '../simple-data-table/simple-data-table.component';
import { ManyPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-simple-data-table-example',
  standalone: true,
  imports: [SimpleDataTableComponent],
  templateUrl: './simple-data-table-example.component.html',
  styleUrl: './simple-data-table-example.component.css'
})
export class SimpleDataTableExampleComponent {
  manyperson = ManyPerson;
}
