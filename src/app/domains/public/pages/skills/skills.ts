import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type SkillTone = 'green' | 'blue' | 'neutral';

interface Skill {
  name: string;
  category: string;
  mark: string;
  description: string;
  tone: SkillTone;
  featured?: boolean;
}

@Component({
  selector: 'app-skills',
  imports: [FormsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  searchTerm = '';
  selectedCategory = 'All';

  readonly categories = [
    'All',
    'Backend',
    'Frontend',
    'Mobile',
    'Languages',
    'Cloud & DevOps',
    'Databases & Messaging',
    'Architecture',
    'Tools'
  ];

  readonly skills: Skill[] = [
    // Backend
    {
      name: 'Java',
      category: 'Languages',
      mark: 'JVM',
      description: 'Object-oriented programming, collections, exceptions.',
      tone: 'green',
      featured: true
    },
    {
      name: 'Spring Boot',
      category: 'Backend',
      mark: 'SB',
      description: 'REST APIs, dependency injection, validation, security, and data access.',
      tone: 'green',
      featured: true
    },
    {
      name: 'Node.js',
      category: 'Backend',
      mark: 'JS',
      description: 'Server-side JavaScript, asynchronous programming, and API development.',
      tone: 'green',
      featured: true
    },
    {
      name: 'Express.js',
      category: 'Backend',
      mark: 'EX',
      description: 'HTTP routing, middleware, and REST API development.',
      tone: 'green'
    },
    {
      name: 'MERN Stack',
      category: 'Backend',
      mark: 'MERN',
      description: 'Full-stack applications using MongoDB, Express.js, React, and Node.js.',
      tone: 'green',
      featured: true
    },
    {
      name: 'REST APIs',
      category: 'Backend',
      mark: 'API',
      description: 'Resource-oriented endpoints, HTTP methods, status codes, and request validation.',
      tone: 'blue'
    },

    // Frontend
    {
      name: 'JavaScript',
      category: 'Frontend',
      mark: 'JS',
      description: 'Modern JavaScript, promises, async/await, modules, and browser APIs.',
      tone: 'blue',
      featured: true
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      mark: 'TS',
      description: 'Static typing, interfaces, generics, and maintainable application code.',
      tone: 'blue',
      featured: true
    },
    {
      name: 'Angular',
      category: 'Frontend',
      mark: 'NG',
      description: 'Standalone components, routing, forms, dependency injection, and services.',
      tone: 'blue'
    },
    {
      name: 'React',
      category: 'Frontend',
      mark: 'RE',
      description: 'Component-driven interfaces, hooks, props, state, and reusable UI.',
      tone: 'blue',
      featured: true
    },
    {
      name: 'HTML5',
      category: 'Frontend',
      mark: 'HTML',
      description: 'Semantic markup, accessible structure, and forms.',
      tone: 'neutral'
    },
    {
      name: 'CSS3',
      category: 'Frontend',
      mark: 'CSS',
      description: 'Responsive layouts, Flexbox, Grid, transitions, and custom styling.',
      tone: 'blue'
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      mark: 'TW',
      description: 'Utility-first styling, responsive design, and reusable design tokens.',
      tone: 'blue'
    },
    {
      name: 'Microfrontends',
      category: 'Frontend',
      mark: 'MFE',
      description: 'Independent frontend modules and approaches to composing larger applications.',
      tone: 'blue'
    },

    // Mobile
    {
      name: 'React Native',
      category: 'Mobile',
      mark: 'RN',
      description: 'Cross-platform mobile UI and reusable JavaScript/TypeScript components.',
      tone: 'blue',
      featured: true
    },
    {
      name: 'Android Studio',
      category: 'Mobile',
      mark: 'AS',
      description: 'Android development environment, emulator, and application debugging.',
      tone: 'neutral'
    },

    // Languages
    {
      name: 'Python',
      category: 'Languages',
      mark: 'PY',
      description: 'Scripting, automation, general-purpose programming, and data handling.',
      tone: 'blue'
    },
    {
      name: 'C++',
      category: 'Languages',
      mark: 'C++',
      description: 'Core programming concepts, object-oriented design, and data structures.',
      tone: 'blue'
    },
    {
      name: 'SQL',
      category: 'Languages',
      mark: 'SQL',
      description: 'Queries, joins, filtering, aggregation, and relational data manipulation.',
      tone: 'green'
    },
    {
      name: 'Shell / Bash',
      category: 'Languages',
      mark: '$ _',
      description: 'Command-line workflows, shell scripting, and development automation.',
      tone: 'green'
    },

    // Cloud and DevOps
    {
      name: 'AWS',
      category: 'Cloud & DevOps',
      mark: 'AWS',
      description: 'Cloud platform fundamentals, deployment concepts, and hosted applications.',
      tone: 'orange' as SkillTone,
      featured: true
    },
    {
      name: 'Docker',
      category: 'Cloud & DevOps',
      mark: 'DK',
      description: 'Container images, containers, Dockerfiles, and reproducible environments.',
      tone: 'blue',
      featured: true
    },
    {
      name: 'Kubernetes',
      category: 'Cloud & DevOps',
      mark: 'K8s',
      description: 'Container orchestration concepts, deployments, services, and configuration.',
      tone: 'blue',
      featured: true
    },
    {
      name: 'Jenkins',
      category: 'Cloud & DevOps',
      mark: 'JK',
      description: 'Build automation and continuous integration/delivery pipelines.',
      tone: 'blue',
      featured: true
    },
    {
      name: 'Terraform',
      category: 'Cloud & DevOps',
      mark: 'TF',
      description: 'Infrastructure as code and repeatable infrastructure provisioning.',
      tone: 'blue'
    },
    {
      name: 'CI/CD',
      category: 'Cloud & DevOps',
      mark: 'CI',
      description: 'Automated build, test, and deployment workflows.',
      tone: 'green'
    },
    {
      name: 'Linux',
      category: 'Cloud & DevOps',
      mark: 'LX',
      description: 'Linux command line, processes, permissions, files, and services.',
      tone: 'green'
    },
    {
      name: 'Git',
      category: 'Cloud & DevOps',
      mark: 'GIT',
      description: 'Version control, branches, commits, merges, and collaborative workflows.',
      tone: 'green'
    },
    {
      name: 'GitLab',
      category: 'Cloud & DevOps',
      mark: 'GL',
      description: 'Repositories, merge requests, and GitLab CI/CD workflows.',
      tone: 'green',
      featured: true
    },

    // Databases and messaging
    {
      name: 'PostgreSQL',
      category: 'Databases & Messaging',
      mark: 'PG',
      description: 'Relational schemas, SQL, constraints, indexes, and transactions.',
      tone: 'blue',
      featured: true
    },
    {
      name: 'MongoDB',
      category: 'Databases & Messaging',
      mark: 'MDB',
      description: 'Document-oriented data modeling and queries for full-stack applications.',
      tone: 'green',
      featured: true
    },
    {
      name: 'Redis',
      category: 'Databases & Messaging',
      mark: 'R',
      description: 'In-memory data structures, caching concepts, and low-latency access.',
      tone: 'green'
    },
    {
      name: 'Apache Kafka',
      category: 'Databases & Messaging',
      mark: 'KFK',
      description: 'Event streaming, topics, producers, consumers, and asynchronous communication.',
      tone: 'blue',
      featured: true
    },

    // Architecture
    {
      name: 'Microservices',
      category: 'Architecture',
      mark: 'MS',
      description: 'Service boundaries, API communication, independent deployment, and resilience concepts.',
      tone: 'green',
      featured: true
    },
    {
      name: 'Distributed Systems',
      category: 'Architecture',
      mark: 'DS',
      description: 'Service-to-service communication, consistency trade-offs, and failure handling.',
      tone: 'blue'
    },
    {
      name: 'Event-Driven Architecture',
      category: 'Architecture',
      mark: 'EDA',
      description: 'Event-based integration and asynchronous workflows between services.',
      tone: 'blue'
    },
    {
      name: 'System Design',
      category: 'Architecture',
      mark: 'SD',
      description: 'Application boundaries, scalability, reliability, and architecture trade-offs.',
      tone: 'neutral'
    },

    // Tools and observability
    {
      name: 'VS Code',
      category: 'Tools',
      mark: 'VS',
      description: 'Code editing, extensions, debugging, and integrated terminal workflows.',
      tone: 'blue'
    },
    {
      name: 'IntelliJ IDEA',
      category: 'Tools',
      mark: 'IJ',
      description: 'Java development, refactoring, debugging, and Spring Boot integration.',
      tone: 'blue'
    },
    {
      name: 'Grafana',
      category: 'Tools',
      mark: 'GF',
      description: 'Dashboards and visualization of metrics and operational signals.',
      tone: 'orange' as SkillTone
    },
    {
      name: 'Postman',
      category: 'Tools',
      mark: 'PM',
      description: 'API requests, endpoint testing, and request/response inspection.',
      tone: 'orange' as SkillTone
    },
    {
      name: 'Maven / Gradle',
      category: 'Tools',
      mark: 'BUILD',
      description: 'Dependency management, build automation, and project task execution.',
      tone: 'green'
    }
  ];

  get filteredSkills(): Skill[] {
    const query = this.searchTerm.trim().toLowerCase();

    return this.skills.filter(skill => {
      const matchesCategory =
        this.selectedCategory === 'All' ||
        skill.category === this.selectedCategory;

      const matchesSearch =
        !query ||
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }
}
