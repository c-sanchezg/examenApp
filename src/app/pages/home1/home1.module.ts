import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Home1PageRoutingModule } from './home1-routing.module';

import { Home1Page } from './home1.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Home1PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Home1Page]
})
export class Home1PageModule {}
