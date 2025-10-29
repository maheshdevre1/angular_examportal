import { Component } from '@angular/core';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent {

  quizzes = [
  {
    qId: 23,
    title: 'Basic Java Quiz',
    description: '',
    maxMarks: '50',
    numberOfQuestions: '20',
    active: '',
    category:{
      title:'Programming'
    }
  },
  {
    qId: 23,
    title: 'Basic Java Quiz',
    description: '',
    maxMarks: '50',
    numberOfQuestions: '20',
    active: '',
    category:{
      title:'Programming'
    }
  },
];


}
