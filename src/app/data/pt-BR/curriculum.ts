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
  objective: 'Desenvolvedor Fullstack',
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
      text: '22 de Setembro de 1990',
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
      title: 'Ferramentas',
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
      title: 'Idiomas',
      icon: faComment,
      skills: [{ name: 'Inglês', level: 3 }],
    },
    {
      title: 'Hobbies',
      icon: faGamepad,
      skills: [
        { name: 'Jogos', level: 5 },
        { name: 'Programação', level: 5 },
        { name: 'Tecnologia', level: 4 },
        { name: 'Filmes/Series', level: 3 },
      ],
    },
  ],
  xps: [
    {
      title: 'Experiencia Profissional',
      icon: faBriefcase,
      registries: [
        {
          role: 'Desenvolvedor de Software',
          company: 'O Boticario Franchising',
          period: 'Nov 2020 - Now',
          information: [
            'Desenvolvimento e manutenção de aplicativos reativos de alto desempenho.',
            'Backend: Kotlin/Groovy/Java com SpringBoot ou Micronaut, MongoDB e RabbitMQ.',
            'Frontend: AngularJS e React.'
          ],
        }, {
          role: 'Analista/Desenvolvedor de Software',
          company: 'Tokio Marine Seguradora',
          period: 'Mar 2017 - Nov 2020',
          information: [
            'Desenvolvimento de novas aplicações. Codificando em Java com Springboot no backend, Angular ou Thymeleaf no frontend.',
            'Manutenção de aplicações Java/EJB/JSP legadas.',
            'Definições em time sobre regras de negócio e arquitetura dos projetos',
            'Desenvolvimento de bibliotecas internas para unificar código comum das aplicações.',
          ],
        },
        {
          role: 'Analista/Desenvolvedor de Software',
          company: 'Average Tecnologia',
          period: 'Jul 2012 - Mar 2017',
          information: [
            'Customizações do ERP Totvs Protheus',
            'Correção de bugs e desenvolvimento de novas funcionalidades.',
            'Documentação e testes das customizações',
            'Suporte aos analistas de negócio.',
            'Treinamento de usuários.',
          ],
        },
      ],
    },
    {
      title: 'Acadêmico',
      icon: faGraduationCap,
      registries: [
        {
          role: 'MBA - Desenvolvimento de aplicações Java com SOA e IOT',
          company: 'FIAP',
          period: 'Set 2015 - Set 2016',
          information: [],
        },
        {
          role: 'Bacharel - TI para Negócios',
          company: 'FATEC - São Bernardo do Campo',
          period: 'Jul 2011 - Jun 2013',
          information: [],
        },
      ],
    },
  ],
};
