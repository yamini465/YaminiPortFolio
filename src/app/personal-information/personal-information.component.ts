import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Yamini Chakka'],
    ['DOB', '10/03/1999'],
    ['Work Exp', '3.8 Years'],
    ['Education', 'B.Tech (2020)'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Senior Software Engineer with 3.8 years of experience in software industry.',
    'Working as a Full Stack Developer in ValueLabs in technologies like Angular , Dotnet , MSSQL and Azure(Basic Level).',
    'Always keen to accept or take-up any kind of challenges.Always trying to improve the technical skills and communication process.I am always keen to explore and learn about new things.'
  ];

  ngOnInit(): void {}
}
