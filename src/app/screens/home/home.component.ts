import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnInit {
  emailservice : EmailService;

  constructor(private emails : EmailService) { 
    this.emailservice = emails
  }

  ngOnInit(): void {
    let flag : HTMLElement = document.getElementById("teamlabel");
    let copyright : HTMLElement = document.getElementById("footer-copyright");
    
    let data = new Date();

    flag.innerText = "P4H{You_are_a_\nbig_inspector!}";
    copyright.innerText = "© Copyright " + data.getFullYear() +  " Portugal4Hacking - All Rights Reserved!";
  }


  runnerAnimation(runner){
    runner.style.display = "block"
    setTimeout(() => {
      runner.style.display = "none"
    }, 2000);
  }


  openNewTab(link : string){
    window.open(link, "_blank");
  }

  copiarEnviar(){
    this.emailservice.sendEmail();
  }

  arrscroll(arrow){
    arrow.scrollIntoView();
  }
}
