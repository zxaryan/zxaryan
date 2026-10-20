import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  })
  submit(){
    console.log(this.contactForm.value);
  }
  reset(){
    this.contactForm.setValue({
      name:'',
      email:'',
      message:''
    })
  }
}
