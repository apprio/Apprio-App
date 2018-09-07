import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../../pages/camera/camera';
import { PfieldPage} from '../../pages/pfield/pfield';
import { PaymentPage } from '../../pages/payment/payment';
import { ScreeningPage } from '../../pages/screening/screening';
import { NotePage } from '../../pages/note/note';

@IonicPage()
@Component({
  selector: 'page-template',
  templateUrl: 'template.html',
})
export class TemplatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplatePage');
  }

  PfieldPage() {
    this.navCtrl.push(PfieldPage);
  }

  CameraPage() {
    this.navCtrl.push(CameraPage);
  }

  PaymentPage() {
    this.navCtrl.push(PaymentPage);
  }

  ScreeningPage() {
    this.navCtrl.push(ScreeningPage);
  }

  NotePage() {
    this.navCtrl.push(NotePage);
  }

}
