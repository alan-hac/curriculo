import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBirthdayCake, faBriefcase, faComment, faEnvelope, faGamepad, faGraduationCap, faLaptopCode, faMapMarkedAlt, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons';
import { CurriculumData } from 'src/app/model/curriculum-data';

export const CURRICULUM: CurriculumData = {
    name: 'Alan Henrique Almeida da Costa',
    objective: 'Fullstack Developer',
    sub: 'Java, Javascript, HTML, CSS, SQL Developer',
    infos: [
        {
            text: '+55 (11) 97361-2756',
            icon: faWhatsapp,
            url: 'https://web.whatsapp.com/send?phone=5511973612756'
        },
        {
            text: 'alan_hac@outlook.com',
            icon: faEnvelope,
            url: 'mailto:alan_hac@outlook.com'
        },
        {
            text: 'linkedin.com/in/alanhac',
            icon: faLinkedin,
            url: 'https://linkedin.com/in/alanhac'
        },
        {
            text: 'github.com/alan-hac',
            icon: faGithub,
            url: 'https://github.com/alan-hac'
        },
        {
            text: 'S. Bernardo do Campo, SP',
            icon: faMapMarkedAlt,
            url: 'https://goo.gl/maps/Mc1MMXtDbCrCtfMW6'
        },
        {
            text: '22th September 1990',
            icon: faBirthdayCake,
            url: ''
        }
    ],
    skills: [
        {
            title: "Coding Skills",
            icon: faLaptopCode,
            skills: [
                { name: 'Java', level: 5 },
                { name: 'Javascript/Typescript', level: 4 },
                { name: 'HTML/CSS', level: 3 },
                { name: 'SQL/NoSQL', level: 2 }
            ]
        },
        {
            title: "Frameworks",
            icon: faToolbox,
            skills: [
                { name: 'Springboot', level: 5 },
                { name: 'Angular/Ionic', level: 4 },
                { name: 'Bootstrap/Materialize', level: 4 },
                { name: 'NodeJS', level: 2 }
            ]
        },
        {
            title: "Tools",
            icon: faTools,
            skills: [
                { name: 'Maven', level: 5 },
                { name: 'NPM', level: 4 },
                { name: 'Git', level: 4 },
                { name: 'Jenkins', level: 2 },
                { name: 'Docker', level: 2 }
            ]
        },
        {
            title: "Languages",
            icon: faComment,
            skills: [
                { name: 'English', level: 3 },
            ]
        },
        {
            title: "Hobbies",
            icon: faGamepad,
            skills: [
            { name: 'Gaming', level: 5 },
            { name: 'Programming', level: 5 },
            { name: 'Technology', level: 4 },
            { name: 'Movies/Series', level: 3 }
          ]
        }
    ],
    xps: [
        {
            title: "Professional Experience",
            icon: faBriefcase,
            registries: [
              {
                  role: 'Software Developer/Analyst',
                  company: 'Tokio Marine Seguradora',
                  period: 'Nov 2018 - Now',
                  information: [
                    'New applications development. Coding Java with Springboot modules on backend, Angular or Thymeleaf.',
                    'Old Java/EJB/JSP applications maintenance.',
                    'Team discussion about Business rules and the projects architecture.',
                    'Internal libraries development to unify commons code between the applications.'
                  ]
              },
              {
                  role: 'Software Developer/Analyst',
                  company: 'Resource IT (Outsourced at Tokio Marine Seguradora)',
                  period: 'Mar 2017 - Nov 2018',
                  information: [
                    'Old Java/EJB/JSP application maintenance.',
                    'Issues resolution and new features development.',
                  ]

              },
              {
                  role: 'Software Developer/Analyst',
                  company: 'Average Tecnologia',
                  period: 'Jul 2012 - Mar 2017',
                  information:  [
                    'TOTVS foreign trade ERP customizations.',
                    'Issues resolution and new features development.',
                    'Customizations documentation and tests.',
                    'Business Analysts support.',
                    'User training.'
                  ]
              }
            ]
        },
        {
            title: "Academic",
            icon: faGraduationCap,
            registries: [
              {
                  role: 'MBA - Java SOA and IOT software development',
                  company: 'FIAP',
                  period: 'Sep 2015 - Sep 2016',
                  information: []
              },
              {
                  role: 'Java Web Developer',
                  company: 'Caelum',
                  period: 'Feb 2015 - Mar 2015',
                  information: []
              },
              {
                  role: 'Bachelor - IT for Business',
                  company: 'FATEC - São Bernardo do Campo',
                  period: 'Jul 2011 - Jun 2013',
                  information: []
              }
            ]
        }
    ]
}
