import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {   }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.eventForm = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmitForm() {}

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
