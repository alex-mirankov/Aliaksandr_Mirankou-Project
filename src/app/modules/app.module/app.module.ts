import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from '../material-module';

import { AppComponent } from '../../components/app.component';

import { SliderComponent } from '../../components/slider.component/slider.component';
import { HeaderComponent } from '../../components/header.component/header.component';
import { AdvantagesComponent } from '../../components/advantages.component/advantages.component';
import { ChooseProgramComponent } from '../../components/choose-program.component/choose-program.component';
import { MainComponent } from '../../components/main.component/main.component';
import { NavigationHeaderComponent } from '../../components/navigation-header.component/navigation-header.component';
import { LogRegComponent } from '../../components/log-reg.component/log-reg.component';

import { SelectLevelComponent } from '../../components/select-level.component/select-level.component';


@NgModule({
    imports:      [
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
                    ChooseProgramComponent
                  ],
    bootstrap:    [AppComponent]
})

export class AppModule {

}
