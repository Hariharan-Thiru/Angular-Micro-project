import { Injectable } from '@angular/core';
import { Atchayam } from './model/Atchayam';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtchayamService {

  url:string;
  volunteer:Atchayam;
  volArr : Atchayam[];


  constructor(private http: HttpClient) {
    this.url="http://localhost:3004/Atchayam";
    this.volunteer=new Atchayam();
    this.volArr=[];

   }

   updatevol(volunteer:Atchayam){
    this.http.put<Atchayam>(this.url+"/"+volunteer.id,volunteer).subscribe();
    return "Volunteer Data Updated";
   }

   savevol(volunteer:Atchayam){
    this.http.post<Atchayam>(this.url,volunteer).subscribe();
    return "Volunteer Data Saved";
   }

   deletevol(volId:number){
    this.http.delete<Atchayam>(this.url+"/"+volId).subscribe();
    return "Volunteer Data Deleted";
   }

   findvol(volId:number){
    this.http.get<Atchayam>(this.url+"/"+volId).subscribe(data=>this.volunteer=data);
    return this.volunteer;
   }

   findallvol(){
    this.http.get<Atchayam[]>(this.url).subscribe(data=>this.volArr=data);
    return this.volArr;
   }


}
