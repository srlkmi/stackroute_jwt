import { Component } from '@angular/core';
import { Person } from './person';
import { MyroutingService } from './myrouting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormEg';
  person : Person ;
 


   constructor()
   {
     this.person=new Person();
   }

  
  
  
  
   store()
{

}

  showVal(n)
  {
    console.log("welcome " + n);

  }
}
