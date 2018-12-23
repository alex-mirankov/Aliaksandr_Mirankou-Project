import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './modules/material-module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';

import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ChooseProgramComponent } from './components/choose-program/choose-program.component';
import { MainComponent } from './components/main.component/main.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { LogRegComponent } from './components/log-reg/log-reg.component';
import { SelectLevelComponent } from './components/select-level/select-level.component';
import { SelectThemeComponent } from './components/select-theme/select-theme.component';
import { LessonCardComponent } from './components/lesson-card/lesson-card.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterSocialComponent } from './components/footer-social/footer-social.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { FooterAccountComponent } from './components/footer-account/footer-account.component';
import { FooterContactComponent } from './components/footer-contact/footer-contact.component';
import { SearchComponent } from './components/search/search.component';
import { LessonPageMainComponent } from './components/lesson-page-main/lesson-page-main.component';
import { LoginMainComponent } from './components/login-main/login-main.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderOtherPagesComponent } from './components/header-other-pages/header-other-pages.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationMainComponent } from './components/registration-main/registration-main.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'slider', component: SliderComponent, pathMatch: 'full' },
  { path: 'login', component: LoginMainComponent, pathMatch: 'full' },
  { path: 'registration', component: RegistrationMainComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    DemoMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    NavigationHeaderComponent,
    MainComponent,
    AdvantagesComponent,
    LogRegComponent,
    SelectLevelComponent,
    ChooseProgramComponent,
    SelectThemeComponent,
    LessonCardComponent,
    ListCardsComponent,
    FooterComponent,
    FooterSocialComponent,
    FooterMainComponent,
    FooterAccountComponent,
    FooterContactComponent,
    SearchComponent,
    LessonPageMainComponent,
    LoginMainComponent,
    LoginComponent,
    HeaderOtherPagesComponent,
    RegistrationComponent,
    RegistrationMainComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
