import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 75,
    },
    {
      name: 'ASP.NET Core, EF Core',
      level: 'Intermediate',
      rating: 75,
    },
    {
      name: 'Azure',
      level: 'Basic',
      rating: 50,
    },
    {
      name: 'MSSQL',
      level: 'Intermediate',
      rating: 60,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

}
