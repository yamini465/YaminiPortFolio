import { Component, OnInit } from '@angular/core';
import { Project } from '../models/model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects: Project[] = [
    {
      title: 'GfK (Growth from Knowledge) - Pipeline',
      technologies: 'Angular, Angular Material, Dotnet , MSSQL , EF Core',
      description: [
        'Implemented new features like Closing all project tabs like left tabs, right tabs and all tabs based on requirements.',
        'Worked on many performance tickets which helps to improve the performance of the application and many other technical debt tickets.',
        'Implemented new feature to add sound notification to User setting so user get the sound notification based on selection',
        'Implemented new feature to add Icon size to User setting , so based on user selection the icon size will appear',        
        'Enhanced new feature of Selecting All or unique wave for the projects.',
        'We have migrated our project to azure environment and working on few azure tickets related to container registries,queues,storage accounts and clusters. So, Haaving a basic knowledge on Azure.',
        'Learning new things related to CI/CD Integration and docker images for azure migration.',
        'Having good knowledge on Git Commands and worked on IDEs like Visual Studio, Visual Studio Code.'
      ],
    },
    {
      title: 'American Institute of Architects (AIA-ACD5)',
      technologies: 'ASP.NET WebForms ,Angular ,WCF',
      description: [
        'I have played crucial role in development of payment section where we have decoupled the existing payment gateway and added new payment gateway using iframe and Card Connect.',
        'Development of the tax implementation using Avalara API.',
        'Development of the correct address validation model for customers using Avalara Address Validation API.',
        'Development of Tax Exemption concept based on Company Exemption',
        'Addressed many UI issues and made requirements for client-side framework based on client requirements.'
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
