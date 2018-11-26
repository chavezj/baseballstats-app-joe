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
    selector: "app-upcoming",
    templateUrl: "upcoming.component.html",
    styleUrls: ['upcoming.component.css']
})

export class UpcomingComponent implements OnInit {
    upcoming = null;
    constructor(public main: MainService) { }
    setStyles(active) {

        var style = null;
        if (active) {
            style = "card text-white bg-primary mb-3";
        } else {
            style = "card text-white bg-secondary mb-3";
        }

        return style;
    }
    ngOnInit() {

        $(document).ready(function () {
            $('#topheader .navbar-nav').find('li.active').removeClass('active');
            $('#nupcoming').addClass('active')
            console.log("jquery ready");
        });

        this.main.getMainPage("./assets/data/upcoming.json").subscribe(data => {
            this.upcoming = data;
            console.log(data);
        });
    }
}