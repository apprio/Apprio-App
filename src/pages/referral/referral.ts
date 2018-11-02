import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Posts } from '../../provider/posts';

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

  posts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public postsService: Posts) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferralPage');
      this.postsService.getPosts().subscribe((posts) => {
 
            this.posts = posts.rows.map(row => {
                return row.value;
            });
 
        });
  }

}
