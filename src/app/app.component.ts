import { Component } from '@angular/core';
import { Sample } from './sample';
import { Samples } from './mock-sample';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  Samples:Sample[]=[];
  Sample:Sample;
  SampleEdit:Sample;
  id:number;
  name:string;
  phoneNumber:number;
  address:string;
  isEdit:boolean;
  isDetail:boolean;
  constructor(){
    this.Samples = Samples;
    this.isEdit=false;
  }
  addRow()
  {
    this.Samples.push({id:this.id,name:this.name,phoneNumber:this.phoneNumber,address:this.address});    
  }
  onDelete(sample:Sample)
  {
    let index = this.Samples.indexOf(sample);
    this.Samples.splice(index,1);
    if(this.Sample != null)
      if(sample.id==this.Sample.id)
        this.isDetail=false;
  }
  onDetails(sample:Sample)
  {
    // this.id=sample.id;
    // this.name=sample.name;
    // this.phoneNumber=sample.phoneNumber;
    // this.address=sample.address;
    this.Sample=new Sample();
    this.Sample=sample;
    this.isDetail=true;
  }
  onEdit(sample:Sample)
  {
    //sample.editMode = true;
    this.id=sample.id;
    this.name=sample.name;
    this.phoneNumber=sample.phoneNumber;
    this.address=sample.address;
    this.SampleEdit=new Sample();
    this.SampleEdit=sample;
    this.isEdit=true;
  }
  editRow()
  {
    this.SampleEdit.id=this.id;
    this.SampleEdit.name=this.name;
    this.SampleEdit.phoneNumber=this.phoneNumber;
    this.SampleEdit.address=this.address;
    let index = this.Samples.indexOf(this.SampleEdit);
    this.Samples.splice(index,1,this.SampleEdit);
    this.isEdit=false;
  }
}
