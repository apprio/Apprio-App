import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DatabaseProvider } from '../../provider/database/database';
import { CameraPage } from '../../pages/camera/camera';
import { PaymentPage } from '../../pages/payment/payment';
import { ScreeningPage } from '../../pages/screening/screening';
import { NotePage } from '../../pages/note/note';
import { TemplatePage } from '../../pages/template/template';

/**
 * Generated class for the PfieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pfield',
  templateUrl: 'pfield.html',
})
export class PfieldPage {
//  pfields = [];
//  pfield = {};
  pfield: any = {};
  canSave : true;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public databaseProvider: DatabaseProvider) {
                /*
                this.databaseProvider.getDatabaseState().subscribe(rdy => {
                  if (rdy) {
                    this.loadPfieldData();
                  }
                })
                */
              }

// pouchdb example
  ionViewDidEnter(){
    var pfield = this.navParams.get('pfield');
    if(pfield){
      this.pfield = pfield;
      this.canSave = true;
    }
  }

// pouchdb example
  savePfield() {
    if (this.canSave){
      this.databaseProvider.save(this.pfield)
          .catch(()=>{});
    } else {
      this.databaseProvider.create(this.pfield)
          .catch(()=>{});
    }

    this.viewCtrl.dismiss(this.pfield);
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

  TemplatePage() {
    this.navCtrl.push(TemplatePage);
  }

}
