import {RouterModule, Routes} from '@angular/router';
import {AddSalarieComponent} from './add-salarie/add-salarie.component';
import {ListSalariesComponent} from './list-salaries/list-salaries.component';
import {SalarieComponent} from './salarie/salarie.component';


const APP_ROUTING: Routes = [
  {
    path: 'salaries', children: [
      {path: '', component: ListSalariesComponent},
      {path: 'add', component: AddSalarieComponent}
    ]
  },
  {path: '', component: ListSalariesComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
