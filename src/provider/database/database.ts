import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform, private http: Http) {
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


  fillDatabase() {
    this.http.get('assets/dummyDump.sql')
      .map(res => res.text())
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => console.error(e));
      });
  }


// Payment
  savePayment(invoiced, code, description, amount, payor, paymentDate) {
    let data = [invoiced, code, description, amount, payor, paymentDate]
    return this.database.executeSql("INSERT INTO payment (invoiced, code, description, amount, payor, paymentDate) VALUES (?, ?, ?, ?, ?, ?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  getPayments() {
    return this.database.executeSql("SELECT * FROM payment", []).then((data) => {
      let payments = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          payments.push({ invoiced: data.rows.item(i).invoiced,
                            code: data.rows.item(i).code,
                            description: data.rows.item(i).description,
                            amount: data.rows.item(i).amount,
                            payor: data.rows.item(i).payor,
                            paymentDate: data.rows.item(i).paymentDate  });
        }
      }
      return payments;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

// Note
  saveNote(title, text, cancelClientExport, clientExported, clientExportFile,
              clientExportDate, corpExportFile, type, productionCount, sysGen,
              sysExported, sysExportedDate) {
    let data = [title, text, cancelClientExport, clientExported, clientExportFile,
                clientExportDate, corpExportFile, type, productionCount, sysGen,
                sysExported, sysExportedDate]
    return this.database.executeSql("INSERT INTO payment (title, text, cancelClientExport, clientExported, clientExportFile, clientExportDate, corpExportFile, type, productionCount, sysGen, sysExported, sysExportedDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  getNotes() {
    return this.database.executeSql("SELECT * FROM note", []).then((data) => {
      let notes = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          notes.push({ title: data.rows.item(i).title,
                       text: data.rows.item(i).text,
                       cancelClientExport: data.rows.item(i).cancelClientExport,
                       clientExported: data.rows.item(i).clientExported,
                       clientExportFile: data.rows.item(i).clientExportFile,
                       clientExportDate: data.rows.item(i).clientExportDate,
                       corpExportFile: data.rows.item(i).corpExportFile,
                       type: data.rows.item(i).type,
                       productionCount: data.rows.item(i).productionCount,
                       sysGen: data.rows.item(i).sysGen,
                       sysExported: data.rows.item(i).sysExported,
                       sysExportedDate: data.rows.item(i).sysExportedDate });
        }
      }
      return notes;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

// Pfield
savePfield(AccountNumber, campus, accountType, ssn, patientType, medicalRecordNumber, admissionDate, dischargeDate, admittingDiagnosis, accountBalance, patientLastName, patientFirstName, patientMI, birthDate, gender, patientPhoneNumber, patientAddress, streetAddress2, aptNumber, city, state, zip, patientRelationshipToGuarantor, guarantorFirstName, guarantorLastName, guarantorAddress, guarantorAddress2, guarantorAPT, guarantorCity, guarantorState, guarantorZip, guarantorSSN, guarantorWPhone, guarantorWPhoneExt, guarantorHPhone, assigned, status, followUpDate) {
  let data = [AccountNumber, campus, accountType, ssn, patientType, medicalRecordNumber, admissionDate, dischargeDate, admittingDiagnosis, accountBalance, patientLastName, patientFirstName, patientMI, birthDate, gender, patientPhoneNumber, patientAddress, streetAddress2, aptNumber, city, state, zip, patientRelationshipToGuarantor, guarantorFirstName, guarantorLastName, guarantorAddress, guarantorAddress2, guarantorAPT, guarantorCity, guarantorState, guarantorZip, guarantorSSN, guarantorWPhone, guarantorWPhoneExt, guarantorHPhone, assigned, status, followUpDate]
  return this.database.executeSql("INSERT INTO pfield (AccountNumber, campus, accountType, ssn, patientType, medicalRecordNumber, admissionDate, dischargeDate, admittingDiagnosis, accountBalance, patientLastName, patientFirstName, patientMI, birthDate, gender, patientPhoneNumber, patientAddress, streetAddress2, aptNumber, city, state, zip, patientRelationshipToGuarantor, guarantorFirstName, guarantorLastName, guarantorAddress, guarantorAddress2, guarantorAPT, guarantorCity, guarantorState, guarantorZip, guarantorSSN, guarantorWPhone, guarantorWPhoneExt, guarantorHPhone, assigned, status, followUpDate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", data).then(data => {
    return data;
  }, err => {
    console.log('Error: ', err);
    return err;
  });
}

getPfields() {
  return this.database.executeSql("SELECT * FROM pfield", []).then((data) => {
    let pfields = [];
    if (data.rows.length > 0) {
      for (var i = 0; i < data.rows.length; i++) {
        pfields.push({ AccountNumber: data.rows.item(i).AccountNumber,
                       campus: data.rows.item(i).campus,
                       accountType: data.rows.item(i).accountType,
                       ssn: data.rows.item(i).ssn,
                       patientType: data.rows.item(i).patientType,
                       medicalRecordNumber: data.rows.item(i).medicalRecordNumber,
                       admissionDate: data.rows.item(i).admissionDate,
                       dischargeDate: data.rows.item(i).dischargeDate,
                       admittingDiagnosis: data.rows.item(i).admittingDiagnosis,
                       accountBalance: data.rows.item(i).accountBalance,
                       patientLastName: data.rows.item(i).patientLastName,
                       patientFirstName: data.rows.item(i).patientFirstName,
                       patientMI: data.rows.item(i).patientMI,
                       birthDate: data.rows.item(i).birthDate,
                       gender: data.rows.item(i).gender,
                       patientPhoneNumber: data.rows.item(i).patientPhoneNumber,
                       patientAddress: data.rows.item(i).patientAddress,
                       streetAddress2: data.rows.item(i).streetAddress2,
                       aptNumber: data.rows.item(i).aptNumber,
                       city: data.rows.item(i).city,
                       state: data.rows.item(i).state,
                       zip: data.rows.item(i).zip,
                       patientRelationshipToGuarantor: data.rows.item(i).patientRelationshipToGuarantor,
                       guarantorFirstName: data.rows.item(i).guarantorFirstName,
                       guarantorLastName: data.rows.item(i).guarantorLastName,
                       guarantorAddress: data.rows.item(i).guarantorAddress,
                       guarantorAddress2: data.rows.item(i).guarantorAddress2,
                       guarantorAPT: data.rows.item(i).guarantorAPT,
                       guarantorCity: data.rows.item(i).guarantorCity,
                       guarantorState: data.rows.item(i).guarantorState,
                       guarantorZip: data.rows.item(i).guarantorZip,
                       guarantorSSN: data.rows.item(i).guarantorSSN,
                       guarantorWPhone: data.rows.item(i).guarantorWPhone,
                       guarantorWPhoneExt: data.rows.item(i).guarantorWPhoneExt,
                       guarantorHPhone: data.rows.item(i).guarantorHPhone,
                       assigned: data.rows.item(i).assigned,
                       status: data.rows.item(i).status,
                       followUpDate: data.rows.item(i).followUpDate
                     });
      }
    }
    return pfields;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}

// Screening
saveScreening(id, recID, patientID, faqType, patientActNo, county, hInsFlag, hInsName, hInsPolicyNumber, hInsInsuredName, hInsCoPhone, hInsEffectiveDate, aInsFlag, aInsName, aInsPolicyNumber, aInsInsuredName, aInsCoPhone, aInsEffectiveDate, maritalStatus, depFlag, noOfDependents, totalinHH, dependentsAges, pregnancyFlag, dueDate, employedFlag, dateLastWorked, releasedToWork, returnToWorkDate, unableToWorkFlag, impairmentDesc, ssiDisFlag, spouseSsiDisFlag, sEmployed, employmentIncomeSelf, employmentIncomeSpouse, ssiIncomeSelf, ssiIncomeSpouse, childSupportSelf, childSupportSpouse, otherIncomeSelf, otherIncomeSpouse, checkingBalance, savingsBalance, otherAssets, ownVehicle, noVehiclesOwned, vehicle1Type, vehicle1Value, vehicle1Owed) {
  let data = [id, recID, patientID, faqType, patientActNo, county, hInsFlag, hInsName, hInsPolicyNumber, hInsInsuredName, hInsCoPhone, hInsEffectiveDate, aInsFlag, aInsName, aInsPolicyNumber, aInsInsuredName, aInsCoPhone, aInsEffectiveDate, maritalStatus, depFlag, noOfDependents, totalinHH, dependentsAges, pregnancyFlag, dueDate, employedFlag, dateLastWorked, releasedToWork, returnToWorkDate, unableToWorkFlag, impairmentDesc, ssiDisFlag, spouseSsiDisFlag, sEmployed, employmentIncomeSelf, employmentIncomeSpouse, ssiIncomeSelf, ssiIncomeSpouse, childSupportSelf, childSupportSpouse, otherIncomeSelf, otherIncomeSpouse, checkingBalance, savingsBalance, otherAssets, ownVehicle, noVehiclesOwned, vehicle1Type, vehicle1Value, vehicle1Owed]
  return this.database.executeSql("INSERT INTO screening (  let data = [id, recID, patientID, faqType, patientActNo, county, hInsFlag, hInsName, hInsPolicyNumber, hInsInsuredName, hInsCoPhone, hInsEffectiveDate, aInsFlag, aInsName, aInsPolicyNumber, aInsInsuredName, aInsCoPhone, aInsEffectiveDate, maritalStatus, depFlag, noOfDependents, totalinHH, dependentsAges, pregnancyFlag, dueDate, employedFlag, dateLastWorked, releasedToWork, returnToWorkDate, unableToWorkFlag, impairmentDesc, ssiDisFlag, spouseSsiDisFlag, sEmployed, employmentIncomeSelf, employmentIncomeSpouse, ssiIncomeSelf, ssiIncomeSpouse, childSupportSelf, childSupportSpouse, otherIncomeSelf, otherIncomeSpouse, checkingBalance, savingsBalance, otherAssets, ownVehicle, noVehiclesOwned, vehicle1Type, vehicle1Value, vehicle1Owed) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", data).then(data => {
    return data;
  }, err => {
    console.log('Error: ', err);
    return err;
  });
}

getAllScreenings() {
  return this.database.executeSql("SELECT * FROM screening", []).then((data) => {
    let screenings = [];
    if (data.rows.length > 0) {
      for (var i = 0; i < data.rows.length; i++) {
        screenings.push({ id: data.rows.item(i).id,
                          recID: data.rows.item(i).recID,
                          patientID: data.rows.item(i).patientID,
                          faqType: data.rows.item(i).faqType,
                          patientActNo: data.rows.item(i).patientActNo,
                          county: data.rows.item(i).county,
                          hInsFlag: data.rows.item(i).hInsFlag,
                          hInsName: data.rows.item(i).hInsName,
                          hInsPolicyNumber: data.rows.item(i).hInsPolicyNumber,
                          hInsInsuredName: data.rows.item(i).hInsInsuredName,
                          hInsCoPhone: data.rows.item(i).hInsCoPhone,
                          hInsEffectiveDate: data.rows.item(i).hInsEffectiveDate,
                          maritalStatus: data.rows.item(i).maritalStatus,
                          depFlag: data.rows.item(i).depFlag,
                          noOfDependents: data.rows.item(i).noOfDependents,
                          totalinHH: data.rows.item(i).totalinHH,
                          dependentsAges: data.rows.item(i).dependentsAges,
                          pregnancyFlag: data.rows.item(i).pregnancyFlag,
                          dueDate: data.rows.item(i).dueDate,
                          employedFlag: data.rows.item(i).employedFlag,
                          dateLastWorked: data.rows.item(i).dateLastWorked,
                          releasedToWork: data.rows.item(i).releasedToWork,
                          returnToWorkDate: data.rows.item(i).returnToWorkDate,
                          unableToWorkFlag: data.rows.item(i).unableToWorkFlag,
                          impairmentDesc: data.rows.item(i).impairmentDesc,
                          ssiDisFlag: data.rows.item(i).ssiDisFlag,
                          spouseSsiDisFlag: data.rows.item(i).spouseSsiDisFlag,
                          sEmployed: data.rows.item(i).sEmployed,
                          employmentIncomeSelf: data.rows.item(i).employmentIncomeSelf,
                          ssiIncomeSelf: data.rows.item(i).ssiIncomeSelf,
                          ssiIncomeSpouse: data.rows.item(i).ssiIncomeSpouse,
                          childSupportSelf: data.rows.item(i).childSupportSelf,
                          childSupportSpouse: data.rows.item(i).childSupportSpouse,
                          otherIncomeSelf: data.rows.item(i).otherIncomeSelf,
                          otherIncomeSpouse: data.rows.item(i).otherIncomeSpouse,
                          checkingBalance: data.rows.item(i).checkingBalance,
                          savingsBalance: data.rows.item(i).savingsBalance,
                          otherAssets: data.rows.item(i).otherAssets,
                          ownVehicle: data.rows.item(i).ownVehicle,
                          noVehiclesOwned: data.rows.item(i).noVehiclesOwned,
                          vehicle1Type: data.rows.item(i).vehicle1Type,
                          vehicle1Value: data.rows.item(i).vehicle1Value,
                          vehicle1Owed: data.rows.item(i).vehicle1Owed
                          });
      }
    }
    return screenings;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}


  getDatabaseState() {
    return this.databaseReady.asObservable();
  }

}
