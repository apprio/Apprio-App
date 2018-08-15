import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';

import { TemplatePage } from '../template/template';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController) {

  }


loginCustom(username, password){

//  this.showLoader();

  let loginData = {
      'root': username,
      'Welcome1!!': password
  };

  // hide the in app browser. If you need to collection additional data outside of the app
  // using the InAppBrowser, you should get rid of this.
  let loginOptions = {
      'inAppBrowserOptions': {'hidden': true}
  };

  this.auth.loginCustom('custom', loginData, loginOptions).then(() => {

      this.loading.dismiss();

      //success
      console.log(this.user);

  }, (err) => {

      this.loading.dismiss();

      //error
      console.log(err);
      this.presentToast(err);
      let alert = this.alertCtrl.create({
        title: 'Login Failed',
        subTitle: 'Review Login Credentials',
        buttons: ['OK']
      });
      alert.present();

  });

}

testLoginCustom(){
  this.loginCustom('root', 'Welcome1!!');
}

}
