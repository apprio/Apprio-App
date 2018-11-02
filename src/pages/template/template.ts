import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { CameraPage } from '../../pages/camera/camera';
import { PfieldPage} from '../../pages/pfield/pfield';
import { PaymentPage } from '../../pages/payment/payment';
import { ScreeningPage } from '../../pages/screening/screening';
import { NotePage } from '../../pages/note/note';
import { DatabaseProvider } from '../../provider/database/database';
import { ApplicationPage } from '../../pages/application/application';
import { BillingPage } from '../../pages/billing/billing';
import { ClosedPage } from '../../pages/closed/closed';
import { EligibilityPage } from '../../pages/eligibility/eligibility';
import { EvidencePage } from '../../pages/evidence/evidence';
import { ProcessingPage } from '../../pages/processing/processing';
import { ReferralPage } from '../../pages/referral/referral';

@IonicPage()
@Component({
  selector: 'page-template',
  templateUrl: 'template.html',
})
export class TemplatePage {
  pfields : any;

  constructor(public navCtrl: NavController,
              private viewCtrl: ViewController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public databaseProvider: DatabaseProvider) {
  }

// pouchdb example
  ioViewDidEnter() {
      this.databaseProvider.createPouchDB();
      //TODO: FIX
      /*this.databaseProvider.read()
        .then(pfields => {
          this.pfields = pfields;
        })
        .catch((err)=>{});*/
  }
  // pouchdb example
  showDetails(pfield) {
    let modal = this.modalCtrl.create(PfieldPage, { pfield: pfield });
    modal.present();
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
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

  ApplicationPage() {
    this.navCtrl.push(ApplicationPage);
  }

  BillingPage() {
    this.navCtrl.push(BillingPage);
  }

  ClosedPage() {
    this.navCtrl.push(ClosedPage);
  }

  EligibilityPage() {
    this.navCtrl.push(EligibilityPage);
  }

  EvidencePage() {
    this.navCtrl.push(EvidencePage);
  }

  ProcessingPage() {
    this.navCtrl.push(ProcessingPage);
  }

  ReferralPage() {
    this.navCtrl.push(ReferralPage);
  }

}
