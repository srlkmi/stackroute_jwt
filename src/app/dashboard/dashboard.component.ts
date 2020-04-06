import { Component, OnInit } from '@angular/core';
import { Note } from 'notesfile';
import { MyhttpserveService } from '../myhttpserve.service';
import { MynotesService } from '../mynotes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // newobj : Note;
  // newsarray : Array<Note>=[];
  constructor(private noteserve:MynotesService) { 
    
  }

  ngOnInit(): void {
   // this.getRecords();
this.noteserve.fetchFrompublisher();

  }

 


}
