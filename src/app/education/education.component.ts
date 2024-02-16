import { Component, OnInit } from '@angular/core';
import { Education } from '../models/model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Sreenidhi Institue of Science and Technology",
      course: 'B.Tech',
      duration: '2016-2020',
      score: '9.59 CGPA',
    },
    {
      institute: 'Nalanda Junior College',
      course: 'Intermediate',
      duration: '2014-2016',
      score: '98.5%',
    },
    {
      institute: 'Kakatiya High School',
      course: 'SSC',
      duration: '2013-2014',
      score: '9.59 CGPA',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
