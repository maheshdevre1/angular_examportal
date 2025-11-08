import { Component } from '@angular/core';
import { QuizservicesService } from 'src/app/services/quizservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent {

//   quizzes = [
//   {
//     qId: 23,
//     title: 'Basic Java Quiz',
//     description: 'java is a programming language',
//     maxMarks: '50',
//     numberOfQuestions: '20',
//     active: '',
//     category:{
//       title:'Programming'
//     }
//   },
//   {
//     qId: 23,
//     title: 'Basic Java Quiz',
//     description: 'Java is not completely object oriented programming language',
//     maxMarks: '50',
//     numberOfQuestions: '20',
//     active: '',
//     category:{
//       title:'Programming'
//     }
//   },
// ];

quizzes: any[] = [];

constructor(private _quiz: QuizservicesService) {}



ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(this.quizzes);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }



// Method to delete a quiz by its ID
deleteQuiz(qId: any) {

  // Step 1️⃣: Show confirmation popup using SweetAlert2
  Swal.fire({
    icon: 'info',                 // Displays an info icon
    title: 'Are you sure ?',      // Title text in the alert
    confirmButtonText: 'Delete',  // Text on confirm button
    showCancelButton: true,       // Adds a cancel button
  })
  .then((result) => {             // Step 2️⃣: Handle user’s choice (Promise resolution)
    
    // Step 3️⃣: If user clicked the "Delete" button (confirmed)
    if (result.isConfirmed) {
      
      // Step 4️⃣: Call API to delete the quiz using the service
      this._quiz.deleteQuiz(qId).subscribe(

        // ✅ Success callback: API call was successful
        (data) => {

          // Step 5️⃣: Remove the deleted quiz from the local quizzes array
          // This ensures UI updates instantly without reloading the page
          this.quizzes = this.quizzes.filter((quiz) => quiz.qId != qId);

          // Step 6️⃣: Show success notification
          Swal.fire('Success', 'Quiz deleted ', 'success');
        },

        // ❌ Error callback: If something went wrong during deletion
        (error) => {
          // Step 7️⃣: Show error alert to user
          Swal.fire('Error', 'Error in deleting quiz', 'error');
        }
      );
    }
  });
}


}
