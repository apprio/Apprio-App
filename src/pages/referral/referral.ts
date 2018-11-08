import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../provider/database/database';  //maybe rename to patients instead of database?

/**
 * Generated class for the ReferralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-referral',
  templateUrl: 'referral.html',
})
export class ReferralPage {

  patients: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public databaseProvider: DatabaseProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ReferralPage');
  	this.databaseProvider.read().then((data) => {
      this.patients = data;
    });
  	
  }
  
  
createPatient(){
 
    let prompt = this.alertCtrl.create({
      title: 'Add',
      message: 'What do you need to do?',
      inputs: [
        {
          name: 'patient_name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.databaseProvider.create({patient_name: data.patient_name});
          }
        }
      ]
    });
 
    prompt.present();
 
  }
 
  updatePatient(patient){
 
    let prompt = this.alertCtrl.create({
      title: 'Edit',
      message: 'Change your mind?',
      inputs: [
        {
          name: 'patient_name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.databaseProvider.update({
              _id: patient._id,
              _rev: patient._rev,
              patient_name: data.patient_name
            });
          }
        }
      ]
    });
 
    prompt.present();
  }
 
  deletePatient(patient){
    this.databaseProvider.delete(patient);
  }
   
  
  
  

}
