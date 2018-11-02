import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Platform } from 'ionic-angular';
//import { BehaviorSubject } from 'rxjs/Rx';
//import { Storage } from '@ionic/storage';
import * as PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';



@Injectable()
export class DatabaseProvider {
//  database: SQLiteObject;
//  private databaseReady: BehaviorSubject<boolean>;
  public pdb;
  public pfields;

/* SQLite
  constructor(public sqlitePorter: SQLitePorter,
              private storage: Storage,
              private sqlite: SQLite,
              private platform: Platform,
              private http: Http) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'tribbles.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
              this.databaseReady.next(true);
            } else {
              this.fillDatabase();
            }
          });
        });
    });
  }
*/

  createPouchDB() {
    PouchDB.plugin(cordovaSqlitePlugin);
    this.pdb = new PouchDB('pfields.db',
    { adapter: 'cordova-sqlite' });
  }

  create(pfield) {
    return this.pdb.post(pfield);   //post() creates new objects in PouchDB database
  } // error points this function out when trying to save - Cannot read property 'post' of undefined

  save(pfield) {
    return this.pdb.put(pfield);
  }

  delete(pfield) {
    return this.pdb.delete(pfield);
  }

  read() {
    function allDocs(){
      this.pdb.allDocs({include_docs: true})
      .then(docs => {
        this.pfields = docs.rows.map(row => {
          row.doc.Date = new Date(row.doc.Date);
          return row.doc;
        });

        return this.pfields;
      });
    }

      this.pdb.changes({live: true, since: 'now', include_docs: true})
        .on('change', ()=>{
          /*allDocs().then((pfs)=>{
            this.pfields = pfs;
          });*/
        });

      return allDocs();
  }
}
