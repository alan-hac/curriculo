import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// TODO - i18n

export class AppComponent {
  public technical = [
    { name: 'Spring/Java', level: 5 },
    { name: 'Angular/Typescript', level: 5 },
    { name: 'Ionic/Typescript', level: 4 },
    { name: 'NodeJS/Javascript', level: 4 },
    { name: 'HTML', level: 4 },
    { name: 'CSS', level: 3 },
    { name: 'Jenkins', level: 3 },
    { name: 'Ansible', level: 2 },
    { name: 'Vagrant', level: 2 },
    { name: 'Linux', level: 2 }
  ];

  public language = [
    { name: 'English', level: 3 },
  ];

  public hobbies = [
    { name: 'Gaming', level: 5 },
    { name: 'Programming', level: 5 },
    { name: 'Technology', level: 4 },
    { name: 'Movies/Series', level: 3 },
    { name: 'Eletronics/IoT', level: 2 },
  ];

  public professional = [
    {
      role: 'Software Developer/Analyst',
      company: 'Tokio Marine Seguradora',
      period: 'Nov 2018 - Now',
      information: 'New Java/Angular application development and old Java/JSP application maintenance. '
        + 'Team discussion and definition of the technology and the projects architecture and business rules. '
        + 'Issues resolution and new features development.'

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
      information: 'Old Java/JSP application maintenance. Issues resolution and new features development.'

      // information: 'Atendimento de novas demandas e correções de bugs das aplicações legadas de cotação e contratação de seguros.'

    },
    {
      role: 'Software Developer/Analyst',
      company: 'Average Tecnologia',
      period: 'Jul 2012 - Mar 2017',
      information: ' TOTVS foreign trade ERP customizations. Issues resolution and new features development. '
        + 'Customizations documentation and tests'

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
      information: 'Java development aspects using SOA and IOT looking for increase companies performance and offer competitive products.'

      // information: 'Aspectos de desenvolvimento de software JAVA usando SOA e Internet das Coisas) com '
      //  + 'o objetivo de aumentar a performance das empresas e oferecer novos produtos competitivos que '
      //  + 'gerem valor, tanto para seu próprio crescimento profissional como para incrementar os '
      //  + 'resultados da sua empresa.'
    },
    {
      role: 'Bachelor - IT for Business',
      //role: 'Bacharel - TI para Administração de Empresas',
      company: 'FATEC - São Bernardo do Campo',
      period: 'Jul 2011 - Jun 2013',
      information: 'IT Administration and Business Management.'
      // information: 'Administração e TI, contemplando disciplinas para a gestão de empresas e para desenvolvimento de software.'
    }
  ];

}
