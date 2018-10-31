import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EligibilityPage } from './eligibility';

@NgModule({
  declarations: [
    EligibilityPage,
  ],
  imports: [
    IonicPageModule.forChild(EligibilityPage),
  ],
})
export class EligibilityPageModule {}
