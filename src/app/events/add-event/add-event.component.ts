import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private eventService: EventService) {   }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.eventForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmitForm() {
    this.eventService.createEvent();
    // this.router.navigate(['/accueil']);
  }

  //  onSubmitForm() {
  //   const formValue = this.userForm.value;
  //   const newEvent = new Event(
  //     formValue['firstName'],
  //     formValue['lastName'],
  //     formValue['email'],
  //     formValue['drinkPreference'],
  //     formValue['hobbies'] ? formValue['hobbies'] : []
  //   );
  //   this.userService.addUser(newUser);
  //   this.router.navigate(['/users']);
  // }
}
