import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableViewComponent } from './table-view/table-view.component';

const routes: Routes = [
  { path: '', component: TableViewComponent },
  { path: 'gridView', loadChildren: () => import('./grid-view/grid-view.module').then(m => m.GridViewModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
