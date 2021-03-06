import { Component, OnInit } from '@angular/core';
import {ClientProfileService} from '../client-profile.service'
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-client-image',
  templateUrl: './client-image.component.html',
  styleUrls: ['./client-image.component.css']
})
export class ClientImageComponent implements OnInit {
  ArrayOfDetails: any;

  constructor(private clientprofileService:ClientProfileService,private router:Router) { }

  ngOnInit() {

    this.clientprofileService.getdetails().subscribe(data=>
      {
       console.log(data);
       this.ArrayOfDetails=data;
    });
    
  }

  getDetailsOfClient():any{
    this.router.navigateByUrl('/client-dashboard');
  }

}
