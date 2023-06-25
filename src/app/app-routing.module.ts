import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CardIDComponent } from './pages/card-id/card-id.component';
import { CentralComponent } from './pages/central/central.component';

const routes: Routes = [
  { path: '', component: NavigationPreloadManager },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'card', component: CardIDComponent },
  { path: 'central', component: CentralComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
