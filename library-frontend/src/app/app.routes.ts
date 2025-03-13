import { Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { BooksComponent } from './components/books/books.component';
import { LoansComponent } from './components/loans/loans.component';
import { StudentsComponent } from './components/students/students.component';
import { InventoryComponent } from './components/inventory/inventory.component';


const appName = 'Gestión de librería'
const nameSeparator = `| ${appName}`;

export const routes: Routes = [
  {
    title: `Vista general ${nameSeparator}`,
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    title: `Vista general ${nameSeparator}`,
    path: 'overview',
    component: OverviewComponent
  },
  {
    title: `Gestión de libros ${nameSeparator}`,
    path: 'books',
    component: BooksComponent,
  },
  {
    title: `Gestión de préstamos ${nameSeparator}`,
    path: 'loans',
    component: LoansComponent,
  },
  {
    title: `Gestión de estudiantes ${nameSeparator}`,
    path: 'students',
    component: StudentsComponent
  },
  {
    title: `Gestión de inventario ${nameSeparator}`,
    path: 'inventory',
    component: InventoryComponent
  }
];
