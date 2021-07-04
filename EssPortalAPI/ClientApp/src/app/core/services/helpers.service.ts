import { Injectable } from '@angular/core';
import * as _moment from 'moment';
@Injectable()

export class HelpersService {

constructor() { }


 getCurrentDate(): string {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return dd + '/' + mm + '/' + yyyy;
  return '';
}

getDate(dateString:string):Date{ 
  var dateMomentObject = _moment(dateString, "DD/MM/YYYY"); // 1st argument - string, 2nd argument - format
  var dateObject = dateMomentObject.toDate();  
  let newDate = dateObject;
  return newDate
}

dayDiff(fromDate:string, toDate:string)
{  
  var date1:Date;
  var date2:Date
  date1=this.getDate(fromDate);
  date2=this.getDate(toDate);
  
  var diff = Math.abs(date1.getTime() - date2.getTime());
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
  return diffDays +1;
}

isCheckDateFormat(date: string): Boolean {
   
  if (date.length !== 10) {
      return false;
    //return 'Invalid input: Please input a string in the form of DD/MM/YYYY"';
  } else {
    const da = date.split('/');
   
    if (da.length !== 3 || da[0].length !== 2 || da[1].length !== 2 || da[2].length !== 4) {
      return false;// 'Invalid input: Please input a string in the form of DD/MM/YYYY"';
    } 
  //   else if (_moment(date).isValid()) {
  //     return false;// 'Invalid date: Please input a date no later than today';
  //   } else if (!_moment(date).isValid()) {
  //     return false;// 'Invalid date: Please input a date with a valid month and date.';
  //   }
    if(Number(da[0])<1 || Number(da[0])>31)return false;
    if(Number(da[1])<1 || Number(da[1])>12)return false;
    if(Number(da[2])<2000 || Number(da[2])>2050)return false;
  }
  return true;
}

currentLang():string{
  var dir=localStorage.getItem('dir');
  return (dir === "ltr"  ? "1": "2");
}


getRandomNumber():number{
 return -Math.floor((Math.random() * 100000) + 1) ;
}



}
