import { Component, OnInit, Input, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
//import { MainService } from '../../shared/main.service';
//import { JwtHelper } from '../../shared/jwthelper.service';
//import { AppConfigProvider, AppConfig } from '../../services/appconfig.provider';

//FOR THE DIALOG
//import { MatDialog, MatDialogConfig } from "@angular/material";
//import { DialogComponent } from '../../shared/dialog.component';
declare var $: any;
@Component({
    selector: "app-home",
    templateUrl: "home.component.html",
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    images = null;
    mySlideImages =[];
    mySlideOptions={items: 1, dots: true, nav: false};
    myCarouselOptions={items: 3, dots: true, nav: true};

    constructor() { }

    ngOnInit() {
        console.log(window.location.href);
        let slideImages = 
        [
          {"part1": "Every strike brings me closer", "part2": "to the next homerun.","author": "Babe Ruth", "pic": "assets/Images/main0.png"},
          
          {"part1": "Don't just look ready.", "part2": "Be ready.","author": "J.R. Chavez", "pic": "assets/Images/main0.png"}
          //{"title": "Awesome", "pic": "assets/Images/fullimage3.jpg"}
        ]
      
        let s2 = JSON.stringify(slideImages);
        this.mySlideImages = JSON.parse(s2);

    }
}