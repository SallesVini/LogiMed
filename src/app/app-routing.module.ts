import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { 
    path: '', 
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'relatorio', component: RelatorioComponent },
      { path: 'calendario', component: CalendarioComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
