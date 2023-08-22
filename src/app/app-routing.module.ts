// MODULES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [{ path: '', component: HomePageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
