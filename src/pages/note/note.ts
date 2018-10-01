import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TemplatePage } from '../../pages/template/template';
import { DatabaseProvider } from '../../provider/database/database';

/**
 * Generated class for the NotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {
  notes = [];
  note = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private databaseprovider: DatabaseProvider,
              private platform: Platform) {
                this.databaseprovider.getDatabaseState().subscribe(rdy => {
                  if (rdy) {
                    this.loadNoteData();
                  }
                })
              }

  loadNoteData() {
    this.databaseprovider.getNotes().then(data => {
      this.notes = data;
    })
  }

  saveNote() {
    this.databaseprovider.saveNote(
      this.note['title'],
      this.note['text'],
      this.note['cancelClientExport'],
      this.note['clientExported'],
      this.note['clientExportFile'],
      this.note['clientExportDate'],
      this.note['corpExportFile'],
      this.note['type'],
      this.note['productionCount'],
      this.note['sysGen'],
      this.note['sysExported'],
      this.note['sysExportedDate']
      )
      .then(data => {
          this.loadNoteData();
        });
        this.note = {};
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
  }

  TemplatePage() {
    this.navCtrl.push(TemplatePage);
  }

}
