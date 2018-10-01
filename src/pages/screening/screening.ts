import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TemplatePage } from '../../pages/template/template';
import { DatabaseProvider } from '../../provider/database/database';

/**
 * Generated class for the ScreeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-screening',
  templateUrl: 'screening.html',
})
export class ScreeningPage {
  screenings = [];
  screening = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private databaseprovider: DatabaseProvider,
              private platform: Platform) {
                this.databaseprovider.getDatabaseState().subscribe(rdy => {
                  if (rdy) {
    //                this.loadScreeningData();
                }
                })
              }
/*
  loadScreeningData() {
    this.databaseprovider.getScreening().then(data => {
      this.screenings = data;
  })
  }

  saveScreening() {
    this.databaseprovider.saveScreening(
      this.screening['id'],
      this.screening['recID'],
      this.screening['patientID'],
      this.screening['faqType'],
      this.screening['patientActNo'],
      this.screening['county'],
      this.screening['hInsFlag'],
      this.screening['hInsName'],
      this.screening['hInsPolicyNumber'],
      this.screening['hInsInsuredName'],
      this.screening['hInsCoPhone'],
      this.screening['hInsEffectiveDate'],
      this.screening['aInsFlag'],
      this.screening['aInsName'],
      this.screening['aInsPolicyNumber'],
      this.screening['aInsInsuredName'],
      this.screening['aInsCoPhone'],
      this.screening['aInsEffectiveDate'],
      this.screening['maritalStatus'],
      this.screening['depFlag'],
      this.screening['noOfDependents'],
      this.screening['totalinHH'],
      this.screening['dependentsAges'],
      this.screening['pregnancyFlag'],
      this.screening['dueDate'],
      this.screening['employedFlag'],
      this.screening['dateLastWorked'],
      this.screening['releasedToWork'],
      this.screening['returnToWorkDate'],
      this.screening['unableToWorkFlag'],
      this.screening['impairmentDesc'],
      this.screening['ssiDisFlag'],
      this.screening['spouseSsiDisFlag'],
      this.screening['sEmployed'],
      this.screening['employmentIncomeSelf'],
      this.screening['employmentIncomeSpouse'],
      this.screening['ssiIncomeSelf'],
      this.screening['ssiIncomeSpouse'],
      this.screening['childSupportSelf'],
      this.screening['childSupportSpouse'],
      this.screening['otherIncomeSelf'],
      this.screening['otherIncomeSpouse'],
      this.screening['checkingBalance'],
      this.screening['savingsBalance'],
      this.screening['otherAssets'],
      this.screening['ownVehicle'],
      this.screening['noVehiclesOwned'],
      this.screening['vehicle1Type'],
      this.screening['vehicle1Value'],
      this.screening['vehicle1Owed']
      )
      .then(data => {
          this.loadScreeningData();
        });
        this.screening = {};
      }
**/
  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningPage');
  }

  TemplatePage() {
    this.navCtrl.push(TemplatePage);
  }

}
