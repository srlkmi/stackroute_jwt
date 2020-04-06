import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Note } from 'notesfile';
import { MyauthenticateService } from './myauthenticate.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MynotesService {

notes : Array<Note>=[];
notesubject : BehaviorSubject<Array<Note>>;

  constructor(private httpcli : HttpClient,private authserve:MyauthenticateService) 
  {
  this.notesubject=new BehaviorSubject([]);
  }
 
fetchFrompublisher()
{
  let tok=this.authserve.getMytoken();
  return this.httpcli.get<Array<Note>>("http://localhost:3000/api/v1/notes",
  {
    headers:new HttpHeaders().set("Authorization",`Bearer ${tok}`)

  }).subscribe(
    (res)=>
    {
      this.notes=res;
      this.notesubject.next(this.notes);
    }
  )

}

deletNote(noteid) 
{
  let tok=this.authserve.getMytoken();
  this.httpcli.delete(`http://localhost:3000/api/v1/notes/${noteid}`,
  {
    headers:new HttpHeaders().set("Authorization",`Bearer ${tok}`)

  }).subscribe(
    (res)=>
    {
      
      console.log("deleted successfuly");
    }
  )
}
  

getNote() : BehaviorSubject<Array<Note>>
{
return this.notesubject;
//let tok="sdfsdafsdfsdfsdf";
  
  
}

   addNote(note) : Observable<Note>
   {
     return this.httpcli.post<Note>("http://localhost:3000/api/v1/notes",note,
     {
      headers:new HttpHeaders().set("Authorization",`Bearer ${this.authserve.getMytoken()}`)
     }
     ).map( (res)=> {return (res);})

   }

   editNote(mynote) : Observable<Note>
   {
     return this.httpcli.put<Note>(`http://localhost:3000/api/v1/notes/${mynote.id}`,
     mynote,
     {
      headers:new HttpHeaders().set("Authorization",`Bearer ${this.authserve.getMytoken()}`)
     }).pipe(
       tap 
       (
         (editednote) =>
         {
           let oldnote=this.notes.find( (ele)=>ele.id==mynote.id);
   Object.assign(oldnote,editednote);
   this.notesubject.next(this.notes);
           
         }
       )
     )
     
   }


}
