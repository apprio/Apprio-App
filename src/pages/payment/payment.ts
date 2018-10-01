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
                this.databaseprovider.getDatabaseState().subscribe(rdy => {
                  if (rdy) {
                    this.loadPaymentData();
                  }
                })
              }

  loadPaymentData() {
    this.databaseprovider.getPayments().then(data => {
      this.payments = data;
    })
  }

  savePayment() {
    this.databaseprovider.savePayment(
      this.payment['invoiced'],
      this.payment['code'],
      this.payment['description'],
      this.payment['amount'],
      this.payment['payor'],
      this.payment['paymentDate']
      )
      .then(data => {
          this.loadPaymentData();
        });
        this.payment = {};
      }

/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  TemplatePage() {
    this.navCtrl.push(TemplatePage);
  }

ionViewDidLoad() {
  this.getPayments();
}

ionViewEnter() {
  this.getPayments();
}
**/
}
