import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './modules/material-module';

import { AppComponent } from './components/app.component';

import { SliderComponent } from './components/slider.component/slider.component';
import { HeaderComponent } from './components/header.component/header.component';
import { AdvantagesComponent } from './components/advantages.component/advantages.component';
import { ChooseProgramComponent } from './components/choose-program.component/choose-program.component';
import { MainComponent } from './components/main.component/main.component';
import { NavigationHeaderComponent } from './components/navigation-header.component/navigation-header.component';
import { LogRegComponent } from './components/log-reg.component/log-reg.component';

import { SelectLevelComponent } from './components/select-level.component/select-level.component';
import { SelectThemeComponent } from './components/select-theme.component/select-theme.component';
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
    MatNativeDateModule,
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
