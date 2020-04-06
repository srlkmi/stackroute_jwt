import { Component, OnInit } from '@angular/core';
import { Note } from 'notesfile';
import { MynotesService } from '../mynotes.service';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {

  newobj : Note;
  newsarray : Array<Note>=[];
  constructor(private noteserve:MynotesService) { 
    this.newobj=new Note();
  }


  ngOnInit(): void {
    console.log("inside listview");
//    this.noteserve.fetchFrompublisher();
    this.getRecords();
  }


   
  getRecords()
  {
    this.noteserve.getNote().subscribe(
    (narrayobj) =>
    {
      this.newsarray=narrayobj;
    },
    (err)=>
    {
      console.log("error" + err);
    }
  )
  }

}
