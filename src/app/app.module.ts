import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { RelatorioService } from './servicos/relatorio/relatorio.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    MainLayoutComponent,
    RelatorioComponent,
    CalendarioComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [RelatorioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
