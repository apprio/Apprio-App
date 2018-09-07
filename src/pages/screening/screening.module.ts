import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScreeningPage } from './screening';

@NgModule({
  declarations: [
    ScreeningPage,
  ],
  imports: [
    IonicPageModule.forChild(ScreeningPage),
  ],
})
export class ScreeningPageModule {}
