import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import PouchDB from 'pouchdb';
import 'rxjs/add/observable/from';
 
@Injectable()
export class Posts {
 
    db: any;
    remote: string = 'http://52.54.81.207/couchdb/couchblog/';
 
    constructor() {
 
        this.db = new PouchDB('couchblog');
 
        let options = {
          live: true,
          retry: true
        };
 
        this.db.sync(this.remote, options);
 
    }
 
    getPosts(): Observable<any> {
        //return this.http.get('http://127.0.0.1:5984/couchblog/_design/posts/_view/by_date_published').map(res => res.json());
        return Observable.from(this.db.query('posts/by_date_published'));
    }
 
}