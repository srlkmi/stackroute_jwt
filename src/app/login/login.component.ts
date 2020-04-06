import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MyrouteModule } from '../myroute/myroute.module';
import { MyroutingService } from '../myrouting.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 person : FormGroup;
 username : FormControl;
 password : FormControl;
 
 constructor(private rservice : MyroutingService) 
 {

  this.person =new FormGroup(
     {
     username: new FormControl('',Validators.required),
     password: new FormControl('', Validators.minLength(6))
     }
 );


   }

  ngOnInit(): void {
  }

  funBack()
  {
    this.rservice.goBack();
  }
saveRec()
{
  console.log(this.person.value);
}

funReg()
{
this.rservice.openRegister();
}
}
