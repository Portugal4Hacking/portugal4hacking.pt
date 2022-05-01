import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {
  emailservice : EmailService;
  constructor(private clipboardApi: ClipboardService, private emails : EmailService) { 
    this.emailservice = emails;
  }

  ngOnInit(): void {
  }

  NavToggler(navbar : HTMLElement){
    navbar.classList.toggle("open");
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {

    let navbar : HTMLElement = document.getElementById("navbar");

    if(window.scrollY == 0 && window.scrollX == 0){
      navbar.classList.remove("top-nav");
    }else{
      navbar.classList.add("top-nav");
    }
  }

  sendEmail(){
    this.emailservice.sendEmail();
  }

  closenav(navbar : HTMLElement){
    navbar.classList.remove("open");
  }
}
