import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './modules/material-module';

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

@NgModule({
  imports: [
    BrowserModule,
    DemoMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
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
    SearchComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
