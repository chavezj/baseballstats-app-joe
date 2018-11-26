import { Component, OnInit } from '@angular/core';
import { iProfile } from './interfaces/iprofile';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{ 
  
  title = 'Baseball Stats';
  //mySlideImages = [1,2,3].map((i)=> `https://picsum.photos/640/480?image=${i}`);

  profile: iProfile;

  years = ['2018','2017','2016','2015','2014']

  constuctor(){}
  
  ngOnInit() {

   //this.profile.iD = 1;

   

 

  $(document).ready(function() {
    $( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    $('#nhome').addClass('active');
    // $( '#topheader .navbar-nav a' ).on( 'click', function () {
    //   $( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    //   $( this ).parent( 'li' ).addClass( 'active' );
    // });
    console.log("jquery ready");
  });

  //   $(document).ready(function() {
  //     console.log("jquery")
  //     $("#owl-demo").owlCarousel({
 
  //       navigation : true, // Show next and prev buttons
  //       slideSpeed : 300,
  //       paginationSpeed : 400,
  //       singleItem:true
   
  //       // "singleItem:true" is a shortcut for:
  //       // items : 1, 
  //       // itemsDesktop : false,
  //       // itemsDesktopSmall : false,
  //       // itemsTablet: false,
  //       // itemsMobile : false
   
  //   });
  // });
   
  }

}
