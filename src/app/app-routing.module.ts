import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnerOverviewComponent } from './components/overview/inner-overview/inner-overview.component';
import { InnerMainContentComponent } from './components/rule-configuration/inner-main-content/inner-main-content.component';

const routes: Routes = [
  { path: '', component: InnerOverviewComponent },
  { path: 'edit', component: InnerMainContentComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
