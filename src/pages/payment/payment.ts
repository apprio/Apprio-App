import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { TemplatePage } from '../../pages/template/template';
import { DatabaseProvider } from '../../provider/database/database';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation. App components NavController, NavParams, ModalController, Platform, DatabaseProvider.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  payments = [];
  payment = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private databaseprovider: DatabaseProvider,
              private platform: Platform,
              public modalCtrl: ModalController) {
                /*
                this.databaseprovider.getDatabaseState().subscribe(rdy => {
                  if (rdy) {
                    this.loadPaymentData();
                  }
                })
                */
              }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  TemplatePage() {
    this.navCtrl.push(TemplatePage);
  }

/*
ionViewDidLoad() {
  this.getPayments();
}

ionViewEnter() {
  this.getPayments();
}
*/
}
