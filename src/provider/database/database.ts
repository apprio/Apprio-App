import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import PouchDB from 'pouchdb';



@Injectable()
export class DatabaseProvider {
	
  public db: any;  //the pouchdb
  public patients; //used to be pfields - just changing it to patients for now
  remote: string = 'http://52.54.81.207/couchdb/tribbles/'; //'http://localhost:5984/tribbles';

  constructor() {
  	this.db = new PouchDB('tribbles');
  	
    let options = {
      live: true,
      retry: true,
      continuous: true
    };
    
    this.db.sync(this.remote, options);
  }

  create(patient) {
    this.db.post(patient);
  }

  update(patient) {
    this.db.put(patient).catch((err) => {
    console.log(err);
  	});
  }

  delete(patient) {
      this.db.remove(patient).catch((err) => {
	    console.log(err);
	  });
  }

  read() { // start read

	 if (this.patients) {
	    return Promise.resolve(this.patients);
	  }
	 
	  return new Promise(resolve => {
	    this.db.allDocs({
	      include_docs: true
	    }).then((result) => {
	      this.patients = [];
	      let docs = result.rows.map((row) => {
	        this.patients.push(row.doc);
	      });
	 
	      resolve(this.patients);
	 
	      this.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
	        this.handleChange(change);
	      });
	 
	    }).catch((error) => {
	 
	      console.log(error);
	 
	    });
	 
	  });
  } // end read
  
  
  
handleChange(change){ //this is set up in the read operation - see https://www.joshmorony.com/offline-syncing-in-ionic-2-with-pouchdb-couchdb/
 
  let changedDoc = null;
  let changedIndex = null;
 
  this.patients.forEach((doc, index) => {
 
    if(doc._id === change.id){
      changedDoc = doc;
      changedIndex = index;
    }
 
  });
 
  //A document was deleted
  if(change.deleted){
    this.patients.splice(changedIndex, 1);
  }
  else {
 
    //A document was updated
    if(changedDoc){
      this.patients[changedIndex] = change.doc;
    }
 
    //A document was added
    else {
      this.patients.push(change.doc);
    }
 
  }
 
} // end handle change
  
  
}
