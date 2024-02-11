// profile.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username: string;
  password: string;
  profilePhoto: any; // This will hold the selected file
  
  constructor() {
    this.username = '';
    this.password = '';
  }

  onFileSelected(event: any) {
    // Get the selected file from the event
    const file = event.target.files[0];

    // Read the file and set it to the profilePhoto variable
    const reader = new FileReader();
    reader.onload = () => {
      this.profilePhoto = reader.result;
    };
    reader.readAsDataURL(file);
  }

  saveProfile() {
    // Here, you can implement the logic to save the user's profile data (username, password, profilePhoto) to your backend or perform any desired actions.
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Profile Photo:', this.profilePhoto);
    // Your backend API call or data saving logic goes here.
  }
}
