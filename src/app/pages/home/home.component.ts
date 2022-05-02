import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {SuccesDialogComponent} from "./succes-dialog/succes-dialog.component";
import {NewsletterSubscriber} from "../../common/model/newsletter-subscriber";
import {NewsletterSubService} from "../../services/newsletter-sub.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: FormControl = new FormControl('');
  email: FormControl = new FormControl('');

  constructor(public dialog: MatDialog, private subService: NewsletterSubService) {
    this.name.addValidators([Validators.minLength(3),
      Validators.max(20)]);
    this.email.addValidators([Validators.email, Validators.min(10)]);
  }

  ngOnInit(): void {

  }

  openDialog() {
    this.dialog.open(SuccesDialogComponent);
  }

  subscribeNewsletter() {

    if(this.name.value === '' || this.email.value === '')
      return;
    if(this.name.valid && this.email.valid) {
      this.openDialog();
      let newsletterSub: NewsletterSubscriber = {
        email: this.email.value,
        name: this.name.value
      };
      console.log(newsletterSub)
      this.subService.saveSubscription(newsletterSub);
      this.name.setValue("");
      this.email.setValue("");
    }
  }
}
