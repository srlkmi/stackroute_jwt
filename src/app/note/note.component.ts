import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'notesfile';
import { MynotesService } from '../mynotes.service';
import { MatDialog } from '@angular/material/dialog';
import { NotedialogComponent } from '../notedialog/notedialog.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {


 @Input()
  notemy : Note;

  constructor(private noteserve : MynotesService,public mydialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNote()
  {
    let result=this.notemy;
    const dialogobj=this.mydialog.open(NotedialogComponent,
      {
      
        data : {result}
      });
  }



  showval()
  {

    this.noteserve.deletNote(this.notemy.id);
  //  console.log(this.notemy.text + " " + this.notemy.title);

   

  }



 
}
