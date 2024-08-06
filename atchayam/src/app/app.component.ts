import { Component, importProvidersFrom } from '@angular/core';
import { Atchayam } from './model/Atchayam';
import { AtchayamService } from './atchayam.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atchayam';
  volunteer:Atchayam;
  result : string;
  volArr: Atchayam[];
  flag: boolean;

  constructor(private service: AtchayamService){
    this.volunteer=new Atchayam();
    this.result="";
    this.volArr=[];
    this.flag=false;
  }

  updatevol(data:any){
    this.volunteer.id=data.volId;
    this.volunteer.volName=data.volName;
    this.volunteer.volPlace=data.volPlace;
    this.result=this.service.updatevol(this.volunteer)
  }

  deletevol(data:any){
    this.result=this.service.deletevol(data.volId);
  }

  savevol(data:any){
    this.volunteer.id=data.volId;
    this.volunteer.volName=data.volName;
    this.volunteer.volPlace=data.volPlace;
    this.result=this.service.savevol(this.volunteer);
  }

  findvol(data:any){
    this.volunteer=this.service.findvol(data.volId);
    this.result=this.volunteer.id+" "+this.volunteer.volName+" "+this.volunteer.volPlace;
  }

  findallvol(){
    this.volArr=this.service.findallvol();
    this.flag=true;
  }

}


