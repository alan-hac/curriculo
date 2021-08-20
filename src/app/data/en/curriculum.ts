import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBirthdayCake,
  faBriefcase,
  faComment,
  faEnvelope,
  faGamepad,
  faGraduationCap,
  faLaptopCode,
  faMapMarkedAlt,
  faTools,
} from '@fortawesome/free-solid-svg-icons';
import { CurriculumData } from 'src/app/model/curriculum-data';

export const CURRICULUM: CurriculumData = {
  name: 'Alan Henrique Almeida da Costa',
  objective: 'Fullstack Developer',
  sub: 'Java/Kotlin - Angular',
  infos: [
    {
      text: '+55 (11) 97361-2756',
      icon: faWhatsapp,
      url: 'https://web.whatsapp.com/send?phone=5511973612756',
    },
    {
      text: 'alan_hac@outlook.com',
      icon: faEnvelope,
      url: 'mailto:alan_hac@outlook.com',
    },
    {
      text: 'linkedin.com/in/alanhac',
      icon: faLinkedin,
      url: 'https://linkedin.com/in/alanhac',
    },
    {
      text: 'github.com/alan-hac',
      icon: faGithub,
      url: 'https://github.com/alan-hac',
    },
    {
      text: 'S. Bernardo do Campo, SP',
      icon: faMapMarkedAlt,
      url: 'https://goo.gl/maps/Mc1MMXtDbCrCtfMW6',
    },
    {
      text: '22th September 1990',
      icon: faBirthdayCake,
      url: '',
    },
  ],
  skills: [
    {
      title: 'Coding Skills',
      icon: faLaptopCode,
      skills: [
        { name: 'Java', level: 5 },
        { name: 'Kotlin', level: 5 },
        { name: 'Groovy', level: 5 },
        { name: 'Javascript', level: 4 },
        { name: 'Typescript', level: 3 },
      ],
    },
    {
      title: 'Tools',
      icon: faTools,
      skills: [
        { name: 'Spring', level: 5 },
        { name: 'NodeJS', level: 4 },
        { name: 'Angular', level: 4 },
        { name: 'React', level: 2 },
        { name: 'Git', level: 3 },
      ],
    },
    {
      title: 'Languages',
      icon: faComment,
      skills: [{ name: 'English', level: 3 }],
    },
    {
      title: 'Hobbies',
      icon: faGamepad,
      skills: [
        { name: 'Gaming', level: 5 },
        { name: 'Programming', level: 5 },
        { name: 'Technology', level: 4 },
        { name: 'Movies/Series', level: 3 },
      ],
    },
  ],
  xps: [
    {
      title: 'Professional Experience',
      icon: faBriefcase,
      registries: [
        {
          role: 'Specialist Software Developer',
          company: 'O Boticario Franchising',
          period: 'Nov 2020 - Now',
          information: [
            'High performance reative applications development and maintenance.',
            'Backend: Kotlin/Groovy/Java with SpringBoot, MongoDB, RabbitMQ.',
            'Frontend: AngularJS and React.'
          ],
        },
        {
          role: 'Software Developer/Analyst',
          company: 'Tokio Marine Seguradora',
          period: 'Mar 2017 - Nov 2020',
          information: [
            'New applications development. Coding Java with Springboot modules on backend, Angular or Thymeleaf.',
            'Java/EJB/JSP legacy applications maintenance.',
            'Team discussion about Business rules and the projects architecture.',
            'Internal libraries development to unify commons code between the applications.',
          ],
        },
        {
          role: 'Software Developer/Analyst',
          company: 'Average Tecnologia',
          period: 'Jul 2012 - Mar 2017',
          information: [
            'TOTVS foreign trade ERP customizations.',
            'Issues resolution and new features development.',
            'Customizations documentation and tests.',
            'Business Analysts support.',
            'User training.',
          ],
        },
      ],
    },
    {
      title: 'Academic',
      icon: faGraduationCap,
      registries: [
        {
          role: 'MBA - Java SOA and IOT software development',
          company: 'FIAP',
          period: 'Sep 2015 - Sep 2016',
          information: [],
        },
        {
          role: 'Bachelor - IT for Business',
          company: 'FATEC - São Bernardo do Campo',
          period: 'Jul 2011 - Jun 2013',
          information: [],
        },
      ],
    },
  ],
};
