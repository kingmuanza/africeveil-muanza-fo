import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotifyService } from 'ng-metro4';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  newsLetterForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newsLetterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onNewsLetterFormSubmit() {
    const email = this.newsLetterForm.value.email;
    console.log('email');
    console.log(email);
    this.notifyService.create('Vous êtes inscrit à notre newsletter');
  }

}
