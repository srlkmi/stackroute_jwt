import { Component, OnInit } from '@angular/core';
import { Note } from 'notesfile';
import { MyhttpserveService } from '../myhttpserve.service';
import { MynotesService } from '../mynotes.service';

@Component({
  selector: 'app-notetaker',
  templateUrl: './notetaker.component.html',
  styleUrls: ['./notetaker.component.css']
})
export class NotetakerComponent implements OnInit {

  newobj : Note;
  newsarray : Array<Note>=[];
  constructor(private noteserve:MynotesService) { 
    this.newobj=new Note();
  }

  StoreNews()
  {
    //this.newsarray.push(this.newobj);
    this.noteserve.addNote( this.newobj).subscribe(

      (newsobj)=>
       {
      console.log("Added " + newsobj.title);
     this.newsarray.push(this.newobj);
     this.newobj=new Note();
       }
         ,
         (err)=>
         {
           console.log("not added");
         }
    );
    
   // this.getRecords();
  }

  ngOnInit(): void {
    this.getRecords();
  }

  
  getRecords()
  {
    this.noteserve.getNote().subscribe(
    (narrayobj) =>
    {
      this.newsarray=narrayobj;
      console.log(this.newsarray);
    },
    (err)=>
    {
      console.log("error" + err);
    }
  )
  }

}
