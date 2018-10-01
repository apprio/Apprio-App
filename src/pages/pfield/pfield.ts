import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
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
  pfields = [];
  pfield = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private databaseprovider: DatabaseProvider,
              private platform: Platform) {
                this.databaseprovider.getDatabaseState().subscribe(rdy => {
                  if (rdy) {
                    this.loadPfieldData();
                  }
                })
              }

  loadPfieldData() {
    this.databaseprovider.getPfields().then(data => {
      this.pfields = data;
    })
  }

  savePfield() {
    this.databaseprovider.savePfield(
      this.pfield['AccountNumber'],
      this.pfield['campus'],
      this.pfield['accountType'],
      this.pfield['ssn'],
      this.pfield['patientType'],
      this.pfield['medicalRecordNumber'],
      this.pfield['admissionDate'],
      this.pfield['dischargeDate'],
      this.pfield['admittingDiagnosis'],
      this.pfield['accountBalance'],
      this.pfield['patientLastName'],
      this.pfield['patientFirstName'],
      this.pfield['patientMI'],
      this.pfield['birthDate'],
      this.pfield['gender'],
      this.pfield['patientPhoneNumber'],
      this.pfield['patientAddress'],
      this.pfield['streetAddress2'],
      this.pfield['aptNumber'],
      this.pfield['city'],
      this.pfield['state'],
      this.pfield['zip'],
      this.pfield['patientRelationshipToGuarantor'],
      this.pfield['guarantorFirstName'],
      this.pfield['guarantorLastName'],
      this.pfield['guarantorAddress'],
      this.pfield['guarantorAddress2'],
      this.pfield['guarantorAPT'],
      this.pfield['guarantorCity'],
      this.pfield['guarantorState'],
      this.pfield['guarantorZip'],
      this.pfield['guarantorSSN'],
      this.pfield['guarantorWPhone'],
      this.pfield['guarantorWPhoneExt'],
      this.pfield['guarantorHPhone'],
      this.pfield['assigned'],
      this.pfield['status'],
      this.pfield['followUpDate']
      )
      .then(data => {
          this.loadPfieldData();
        });
        this.pfield = {};
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PfieldPage');
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
