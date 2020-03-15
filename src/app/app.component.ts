import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// TODO - i18n

export class AppComponent {
  public technology = [
    { name: 'Java', level: 5 },
    { name: 'Javascript/Typescript', level: 5 },
    { name: 'HTML/CSS', level: 5 },
    { name: 'SQL/NoSQL', level: 4 },
  ];

  public framework = [
    { name: 'Springboot', level: 5 },
    { name: 'Angular/Ionic', level: 5 },
    { name: 'Bootstrap/Materialize', level: 5 },
    { name: 'NodeJS', level: 3 },
  ];

  public tool = [
    { name: 'Maven', level: 5 },
    { name: 'NPM', level: 5 },
    { name: 'Git', level: 4 },
    { name: 'Jenkins', level: 2 },
    { name: 'Docker', level: 2 },
    { name: 'Ansible', level: 2 },
  ];

  public language = [
    { name: 'English', level: 3 },
  ];

  public hobbies = [
    { name: 'Gaming', level: 5 },
    { name: 'Programming', level: 5 },
    { name: 'Technology', level: 4 },
    { name: 'Movies/Series', level: 3 }
  ];

  public professional = [
    {
      role: 'Software Developer/Analyst',
      company: 'Tokio Marine Seguradora',
      period: 'Nov 2018 - Now',
      information: '<ul>'
        + '<li>New Java/Angular/Thymeleaf applications development.</li>'
        + '<li>Old Java/JSP applications maintenance.</li>'
        + '<li>Team discussion about Business rules, technologies and the projects architecture.</li>'
        + '<li>Libraries development to unify commons code of many applications and teams. </li>' 
        + '<li>Production Issues resolution and new features development.</li> </ul>'

      // information: 'Desenvolvimento de novas aplicações Java Restful com Spring e frontend Angular. Estudo e discussões em '
      //   + 'equipe sobre a arquitetura e tecnologias dos novos projetos. Atendimento de novas demandas e correções de bugs '
      //   + 'das aplicações legadas. Criação de bibliotecas para unificar pontos em comum entre as diversas aplicações '
      //   + 'nas quais dei manutenção. Levantamento e definição dos requisitos das aplicações junto aos usuários. Acompanhamento '
      //   + 'dos deploys das aplicações em produção.'
    },
    {
      role: 'Software Developer/Analyst',
      company: 'Resource IT',
      period: 'Mar 2017 - Nov 2018',
      information: '<ul>'
        + '<li>Old Java/EJB/JSP application maintenance.</li>'
        + '<li>Issues resolution and new features development.</li> </ul>'

      // information: 'Atendimento de novas demandas e correções de bugs das aplicações legadas de cotação e contratação de seguros.'

    },
    {
      role: 'Software Developer/Analyst',
      company: 'Average Tecnologia',
      period: 'Jul 2012 - Mar 2017',
      information:  '<ul>'
      + '<li>TOTVS foreign trade ERP customizations.</li> '
      + '<li>Issues resolution and new features development.</li> '
      + '<li>Customizations documentation and tests.</li>'
      + '<li>Business Analysts support.</li>'
      + '<li>User training.</li>'

      // information: 'Documentação dos novas demandas das aplicações. Desenvolvimento e correção de bugs em aplicações de comércio exterior. '
      //  + 'Testes e homologação junto ao usuário das novas funcionalidade dos sistemas.'
    }
  ];

  public academic = [
    {
      role: 'MBA - Java SOA and IOT software development',
      //role: 'MBA - Desenvolvimento de Aplicações Java SOA e IOT',
      company: 'FIAP',
      period: 'Sep 2015 - Sep 2016',
      // information: 'Java development aspects using SOA and IOT looking for increase companies performance and offer competitive products.'

      // information: 'Aspectos de desenvolvimento de software JAVA usando SOA e Internet das Coisas) com '
      //  + 'o objetivo de aumentar a performance das empresas e oferecer novos produtos competitivos que '
      //  + 'gerem valor, tanto para seu próprio crescimento profissional como para incrementar os '
      //  + 'resultados da sua empresa.'
    },
    {
      role: 'Java Web Developer',
      //role: 'Bacharel - TI para Administração de Empresas',
      company: 'Caelum',
      period: 'Feb 2015 - Mar 2015',
      // information: 'IT Administration and Business Management.'
      // information: 'Administração e TI, contemplando disciplinas para a gestão de empresas e para desenvolvimento de software.'
    },
    {
      role: 'Bachelor - IT for Business',
      //role: 'Bacharel - TI para Administração de Empresas',
      company: 'FATEC - São Bernardo do Campo',
      period: 'Jul 2011 - Jun 2013',
      // information: 'IT Administration and Business Management.'
      // information: 'Administração e TI, contemplando disciplinas para a gestão de empresas e para desenvolvimento de software.'
    }
  ];

}
