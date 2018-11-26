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
    selector: "app-workout",
    templateUrl: "workout.component.html",
    styleUrls: ['workout.component.css']
})

export class WorkoutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        
           
  $(document).ready(function() {
    $( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    $('#nworkout').addClass('active')
    console.log("jquery ready");
  });
 

    }
}