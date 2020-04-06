import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyauthenticateService } from '../myauthenticate.service';
import { MyroutingService } from '../myrouting.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  person : FormGroup;
  username : FormControl;
  password :FormControl;
 token :string;
  constructor(private authservice : MyauthenticateService,private rserve:MyroutingService ) {

    this.username=new FormControl('',Validators.required);
    this.password=new FormControl('',Validators.minLength(6));
   }

  getToken()
   {
  console.log("Inside token");
    this.authservice.authenticateUser(
      {username:this.username.value,password:this.password.value}).subscribe
    (
      (res)=>
      {
        this.token=res["token"];
        console.log(this.token);
        this.authservice.setMytoken(this.token);
       this.rserve.openDashboard();

      },
      (err)=>
      {
        console.log(err);
      }
      
    )
      }
      validate()
      {
        let tok=this.authservice.getMytoken();
        const ans=this.authservice.isuserAuthorized(tok);
     
         ans.then(
           (res)=>
            {
           console.log(res);
            }
         );
       }


checkusername()
{
  // console.log(this.username.value);
  // let result=this.username.hasError('required') ? "name mandate" : "";
  // return result;
}

checkpassword()
{
  // let pass=this.password.hasError('minlength') ? "passowrd should be >6" : "";
  // return pass;
}


  ngOnInit(): void {

  }
   
}
