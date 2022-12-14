import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {SliderModule} from 'primeng/slider';
import { HeaderComponent } from './view/partial/header/header.component';
import { FooterComponent } from './view/partial/footer/footer.component';
import { LoginComponent } from './view/pages/login/login.component';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './view/pages/error/error.component';
import { SignupComponent } from './view/pages/signup/signup.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { HomeComponent } from './view/pages/home/home.component';
import { SideBannerComponent } from './view/partial/side-banner/side-banner.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ErrorComponent,
    SignupComponent,
    HomeComponent,
    SideBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    SliderModule,
    PasswordModule,
    DividerModule,
    FormsModule,
    PasswordModule,
    ConfirmDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
