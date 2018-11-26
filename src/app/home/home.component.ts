import { Component, OnInit, Input, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { MainService } from '../shared/services/main.service';
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
    highlights = null;
    mySlideImages =[];
    mySlideOptions={items: 1, dots: true, nav: false};
    myCarouselOptions={items: 3, dots: true, nav: true};

    constructor(public main: MainService) { }

    ngOnInit() {
        console.log(window.location.href);
        let slideImages = 
        [
          {"part1": "Every strike brings me closer", "part2": "to the next homerun.","author": "~Babe Ruth", "motivation": "DETERMINATION", "pic": "assets/Images/main0.png"},
          
          {"part1": "DEDICATION", "part2": "Ready to play ball.","author": "", "motivation": "DEDICATION", "pic": "assets/Images/main1.png"}

        ]
      
        let s2 = JSON.stringify(slideImages);
        this.mySlideImages = JSON.parse(s2);

       // let highlights = 
        this.main.getMainPage("./assets/data/main.json").subscribe(data=> {
            this.highlights = data;
            console.log(data);
        });
    }
}