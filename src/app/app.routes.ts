import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { SimpleDataTableExampleComponent } from './components/simple-data-table-example/simple-data-table-example.component';


export const routes: Routes = [
   {path: 'component-input-example', component: ComponentInputExampleComponent},
   {path: 'for-directive-example', component: ForDirectiveExampleComponent},
   {path: 'event-bind-example', component: EventBindExampleComponent},
   {path: 'simple-data-table-example', component: SimpleDataTableExampleComponent},
   {path: '', component: WelcomeComponent},
   // {path: '', redirectTo: "/welcome", pathMatch: 'full'}
];
