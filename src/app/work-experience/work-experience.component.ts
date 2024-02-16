import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit{
  workExpList: WorkExperience[] = [
    {
      role: 'Senior Software Engineer',
      company: 'ValueLabs',
      duration: 'June 2020 - Now',
      description: [
        'Working to develop new features, bug fixes and making sure to work based on client requirements.',
        'Doing code reviews to peer memebers and take up the responbilities of the team.'
      ],
    },
    {
      role: 'Intern',
      company: 'ValueLabs',
      duration: 'Dec 2019 - Mar 2020',
      description: [
        'Training was provided for different technlogies like Angular , Dotnet , React.',
        'Worked with team to develop small Angular and React applications.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
