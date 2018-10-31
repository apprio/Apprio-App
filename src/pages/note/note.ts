import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TemplatePage } from '../../pages/template/template';
import { DatabaseProvider } from '../../provider/database/database';

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {
  notes = [];
  note = {};
  buttonColor:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private databaseprovider: DatabaseProvider,
              private platform: Platform) {
                /*
                this.databaseprovider.getDatabaseState().subscribe(rdy => {
                  if (rdy) {
                    this.loadNoteData();
                  }
                })
                */
              }

  saveNote(){
    this.buttonColor = 'orange';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
  }

  TemplatePage() {
    this.navCtrl.push(TemplatePage);
  }

}
