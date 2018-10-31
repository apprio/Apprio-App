import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TemplatePage } from '../../pages/template/template';
import { DatabaseProvider } from '../../provider/database/database';

@IonicPage()
@Component({
  selector: 'page-screening',
  templateUrl: 'screening.html',
})
export class ScreeningPage {
  screenings = [];
  screening = {};
  buttonColor:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private databaseprovider: DatabaseProvider,
              private platform: Platform) {
                /*
                this.databaseprovider.getDatabaseState().subscribe(rdy => {
                  if (rdy) {
    //                this.loadScreeningData();
                }
                })
                */
              }
  saveScreening(){
    this.buttonColor = 'orange';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningPage');
  }

  TemplatePage() {
    this.navCtrl.push(TemplatePage);
  }

}
