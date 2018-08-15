import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { TemplatePage } from '../template/template';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController) {

  }

  /* login(){

    console.log("Username: " + this.username);

    console.log("Password: " + this.password);

//    this.navCtrl.push(TemplatePage);
} **/

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

  this.auth.login('custom', loginData, loginOptions).then(() => {

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
