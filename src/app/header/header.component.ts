import { Component, OnInit } from '@angular/core';
import { MyroutingService } from '../myrouting.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private rserve : MyroutingService,private myroute:MyroutingService) { }

  viewtype:boolean=true;
  ngOnInit(): void {
  }

  
  changeView()

  {
    if(!this.viewtype)
    {
      this.myroute.openGridview();
      this.viewtype=true;
    }
    else
    {
      this.myroute.openListview();
      this.viewtype=false;
    }
  }
  callLog()
  {
    this.rserve.openLogin();
     
  }
  back()
  {
    this.rserve.goBack();
  }
  callReg()
  {
   this.rserve.openRegister();
  }

}
