import { Component, OnInit } from '@angular/core';
import { MynotesService } from '../mynotes.service';
import { Note } from 'notesfile';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

 // newobj : Note;
  newsarray : Array<Note>=[];
  constructor(private noteserve:MynotesService) { 
   // this.newobj=new Note();
  }


  ngOnInit(): void {
    console.log("inside listview");
//    this.noteserve.fetchFrompublisher();
    this.getRecords()
   
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
