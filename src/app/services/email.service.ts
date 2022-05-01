import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private clipboardApi: ClipboardService) { }

  sendEmail() {
    let email: string = 'contacto@portugal4hacking.pt'

    this.clipboardApi.copyFromContent(email)
    window.location.href = 'mailto:' + email;
  }
}
