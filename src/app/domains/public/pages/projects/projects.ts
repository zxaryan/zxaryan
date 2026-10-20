import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectCategory = 'All' | 'Backend' | 'Full Stack' | 'DevOps' | 'AI';

interface Project {
title: string;
description: string;
category: Exclude<ProjectCategory, 'All'>;
technologies: string[];
status: 'In Progress' | 'Completed';
featured: boolean;
gitlabUrl: string;
demoUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
readonly categories: ProjectCategory[] = [
'All',
'Backend',
'Full Stack',
'DevOps',
'AI',
];

activeCategory: ProjectCategory = 'All';

readonly projects: Project[] = [
{
title: 'Online Banking System',
description:
'A banking backend focused on secure authentication, account management, transactions, validation, and reliable REST APIs.',
category: 'Backend',
technologies: [
'Java',
'Spring Boot',
'Spring Security',
'PostgreSQL',
'JWT',
],
status: 'In Progress',
featured: true,
gitlabUrl: 'https://gitlab.com/codexaryan',
},
{
title: 'MERN CRM Platform',
description:
'A full-stack customer relationship management platform designed to organize customer records, workflows, and business operations.',
category: 'Full Stack',
technologies: [
'MongoDB',
'Express.js',
'React',
'Node.js',
'TypeScript',
],
status: 'In Progress',
featured: true,
gitlabUrl: 'https://gitlab.com/codexaryan',
},
{
title: 'Spring Microservices Platform',
description:
'A service-oriented backend exploring API boundaries, service communication, configuration, and scalable application design.',
category: 'Backend',
technologies: [
'Java',
'Spring Boot',
'Microservices',
'REST APIs',
'PostgreSQL',
],
status: 'In Progress',
featured: true,
gitlabUrl: 'https://gitlab.com/codexaryan',
},
{
title: 'CI/CD Deployment Pipeline',
description:
'A delivery pipeline focused on automated builds, containerized applications, deployment workflows, and repeatable releases.',
category: 'DevOps',
technologies: [
'GitLab CI/CD',
'Docker',
'Jenkins',
'AWS',
'Linux',
],
status: 'In Progress',
featured: false,
gitlabUrl: 'https://gitlab.com/codexaryan',
},
{
title: 'GenAI Assistant',
description:
'An AI application concept exploring LLM integration, prompt design, and practical assistant workflows.',
category: 'AI',
technologies: [
'Java',
'Spring Boot',
'LLMs',
'REST APIs',
],
status: 'In Progress',
featured: false,
gitlabUrl: 'https://gitlab.com/codexaryan',
},
{
title: 'CodeWithPatel Portfolio',
description:
'A personal developer portfolio built to present projects, technical skills, and professional contact information.',
category: 'Full Stack',
technologies: [
'Angular',
'TypeScript',
'Tailwind CSS',
'Spring Boot',
'Render',
],
status: 'Completed',
featured: false,
gitlabUrl: 'https://gitlab.com/codexaryan',
demoUrl: 'https://zxaryan-portfolio.onrender.com/',
},
];

get filteredProjects(): Project[] {
if (this.activeCategory === 'All') {
return this.projects;
}

return this.projects.filter(
  project => project.category === this.activeCategory
);

}

setCategory(category: ProjectCategory): void {
this.activeCategory = category;
}
}

