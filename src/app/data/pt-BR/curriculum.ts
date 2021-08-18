import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBirthdayCake, faBriefcase, faComment, faEnvelope, faGamepad, faGraduationCap, faLaptopCode, faMapMarkedAlt, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons';
import { CurriculumData } from 'src/app/model/curriculum-data';

export const CURRICULUM: CurriculumData = {
    name: 'Alan Henrique Almeida da Costa',
    objective: 'Desenvolvedor Fullstack',
    sub: 'Java/Kotlin - Angular',
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
            text: '22 de Setembro de 1990',
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
                { name: 'Kotlin', level: 5 },
                { name: 'Groovy', level: 5 },
                { name: 'NodeJS', level: 3 },
                { name: 'Angular', level: 4 },
                { name: 'React', level: 3 },
                { name: 'SQL/NoSQL', level: 3 }
            ]
        },
        {
          title: "Ferramentas",
          icon: faTools,
          skills: [
              { name: 'Git', level: 3 },
              { name: 'Jenkins', level: 2 },
              { name: 'Docker', level: 2 },
              { name: 'AWS', level: 1 }
          ]
      },
        {
            title: "Idiomas",
            icon: faComment,
            skills: [
                { name: 'Inglês', level: 3 },
            ]
        },
        {
            title: "Hobbies",
            icon: faGamepad,
            skills: [
              { name: 'Jogos', level: 5 },
              { name: 'Programação', level: 5 },
              { name: 'Tecnologia', level: 3 },
              { name: 'Filmes/Series', level: 3 }
            ]
        }
    ],
    xps: [
        {
            title: "Experiencia Profissional",
            icon: faBriefcase,
            registries: [
              {
                  role: 'Analista/Desenvolvedor de Software',
                  company: 'Tokio Marine Seguradora',
                  period: 'Nov 2018 - Nov 2020',
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
