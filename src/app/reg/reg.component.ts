import { Component, OnInit } from '@angular/core';
import { Reg } from './reg'
import { RegService } from './reg.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  providers:[RegService]
})
export class RegComponent implements OnInit {
  resMsg:string
  states: any;
  nm: string
  tit : string
  de : string
  arr:any
  _id1: string
  
  constructor(
    private register : RegService,
    private http: HttpClient
  ) {
    this.http.get('http://localhost:3000/user')
    .subscribe(data => {
      console.log(data)
      this.states =data
    });
         
   }

  ngOnInit() {
    
  }

  onSubmit(frm:any){
    console.log(frm)
    this.register.insertOne(frm.value as Reg).subscribe(
      res=>console.log(res),
      err=>console.log(err),
      ()=>{
        this.resMsg =" Record Saved..!"
      })
      location.reload();

  }

  onEdit(name:string,title:string,desc:string,_id:string){
      this.register.editOne(name,title,desc,_id).subscribe(
      res=>console.log(res),
      err=>console.log(err),
      ()=>{
        this.resMsg =" Record Edited..!"
      })
      
      location.reload();
  }

  onDelete(_id:string){
      this.register.deleteOne(_id).subscribe(
      res=>console.log(res),
      err=>console.log(err),
      ()=>{
        this.resMsg =" Record Deleted..!"
      })
      location.reload();
  }

  onSelect1(_id:string){
    console.log(_id)
    this.arr={
      "_id":_id
    }
   
    this.register.selectData(this.arr,result=>{
      console.log(result)
      this.nm=result.name
      this.tit=result.title
      this.de=result.desc
      this._id1=result._id
    })
  }

}
