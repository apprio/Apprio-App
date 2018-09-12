import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TemplatePage } from '../../pages/template/template';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreeningPage');
  }

  TemplatePage() {
    this.navCtrl.push(TemplatePage);
  }

}
