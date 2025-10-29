import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userService: UserService, private snack: MatSnackBar) { }


  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void { }

  // formSubmit() {
  // // debugger;
  //   console.log(this.user);
  //   if (this.user.username == '' || this.user.username == null) {
  //     alert('User is required !!');
  //     // this.snack.open('Username is required !! ', '', {
  //     //   duration: 3000,
  //     // });
  //     return;
  //   }

  //   // if (this.user.password == '' || this.user.password == null) {
  //   //   // alert('User is required !!');
  //   //   this.snack.open('Password is required !! ', '', {
  //   //     duration: 3000,
  //   //   });
  //   //   return;
  //   // }

  //   //validate

  //   //addUser: userservice
  //   this.userService.addUser(this.user).subscribe(
  //     (obj: any) => {
  //       //success
  //       console.log(obj);
  //       alert('success');
  //       //Swal.fire('Successfully done !!', 'User id is ' + data.id, 'success');
  //     },
  //     (error) => {
  //       //error
  //       console.log(error);
  //       alert('something went wrong');
  //       // this.snack.open(error.error.text, '', {
  //       //   duration: 3000,
  //       // });
  //     }
  //   );
  // }


  formSubmit() {
    console.log(this.user);

    // Validate username
    if (this.user.username == '' || this.user.username == null) {
      //alert('User is required !!');
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    // Call user service to add user
    this.userService.addUser(this.user).subscribe(
      (response: any) => {
        console.log(response);

        // Check errorCode in response
        if (response.errorCode === '0' || response.errorCode === 0) {
          // Success case
          //alert(response.message);
          // this.snack.open(response.message, '', {
          //   duration: 3000,
          //   verticalPosition: 'top',
          //   horizontalPosition: 'right'
          // });
          Swal.fire(response.message, 'User id is '+ response.obj.id, 'success')
        } else if (response.errorCode === '1' || response.errorCode === 1) {
          // Error case
          //alert(response.message);
          this.snack.open(response.message, '', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
        } else {
          // Unknown code
          // alert('Unexpected response received!');
          this.snack.open('Unexpected response received!', '', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
        }
      },
      (error) => {
        console.log(error);
        // alert('Something went wrong while saving user details!');
        this.snack.open('Something went wrong while saving user details!', '', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    );
  }



}
