import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CameraPage } from '../../pages/camera/camera';
import { PfieldPage} from '../../pages/pfield/pfield';
import { PaymentPage } from '../../pages/payment/payment';
import { ScreeningPage } from '../../pages/screening/screening';
import { NotePage } from '../../pages/note/note';
import { DatabaseProvider } from '../../provider/database/database';

@IonicPage()
@Component({
  selector: 'page-template',
  templateUrl: 'template.html',
})
export class TemplatePage {
  pfields : any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public databaseProvider: DatabaseProvider) {
  }

// pouchdb example
  ioViewDidEnter() {
      this.databaseProvider.createPouchDB();
      this.databaseProvider.read()
        .then(pfields => {
          this.pfields = pfields;
        })
        .catch((err)=>{});
  }
  // pouchdb example
  showDetails(pfield) {
    let modal = this.modalCtrl.create(PfieldPage, { pfield: pfield });
    modal.present();
  }

  savePfield() {
    this.navCtrl.push(PfieldPage)
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
