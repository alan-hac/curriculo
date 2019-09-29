import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public tecnico = [
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

  public idioma = [
    { name: 'Inglês', level: 3 },
  ];

  public hobbies = [
    { name: 'Jogos', level: 5 },
    { name: 'Programação', level: 5 },
    { name: 'Tecnologia', level: 4 },
    { name: 'Filmes/Series', level: 3 },
    { name: 'Eletrônica/IoT', level: 2 },
  ];

  public profissional = [
    {
      role: 'Analista e Desenvolvedor de Sistemas Senior',
      company: 'Tokio Marine Seguradora',
      period: 'Nov 2018 - Atual',
      information: 'Desenvolvimento de novas aplicações Java Restful com Spring e frontend Angular. Estudo e discussões em '
        + 'equipe sobre a arquitetura e tecnologias dos novos projetos. Atendimento de novas demandas e correções de bugs '
        + 'das aplicações legadas. Criação de bibliotecas para unificar pontos em comum entre as diversas aplicações '
        + 'nas quais dei manutenção. Levantamento e definição dos requisitos das aplicações junto aos usuários. Acompanhamento '
        + 'dos deploys das aplicações em produção.'
    },
    {
      role: 'Analista e Desenvolvedor de Sistemas Pleno',
      company: 'Resource IT',
      period: 'Mar 2017 - Nov 2018',
      information: 'Atendimento de novas demandas e correções de bugs das aplicações legadas de cotação e contratação de seguros.'
    },
    {
      role: 'Analista e Desenvolvedor de Sistemas Junior',
      company: 'Average Tecnologia',
      period: 'Jul 2012 - Mar 2017',
      information: 'Documentação dos novas demandas das aplicações. Desenvolvimento e correção de bugs em aplicações de comércio exterior. '
        + 'Testes e homologação junto ao usuário das novas funcionalidade dos sistemas.'
    }
  ];

  public academico = [
    {
      role: 'MBA - Desenvolvimento de Aplicações Java SOA e IOT',
      company: 'FIAP - Aclimação',
      period: 'Set 2015 - Set 2016',
      information: 'Aspectos de desenvolvimento de software JAVA usando SOA e Internet das Coisas) com '
       + 'o objetivo de aumentar a performance das empresas e oferecer novos produtos competitivos que '
       + 'gerem valor, tanto para seu próprio crescimento profissional como para incrementar os '
       + 'resultados da sua empresa.'
    },
    {
      role: 'Bacharel - TI para Administração de Empresas',
      company: 'FATEC - São Bernardo do Campo',
      period: 'Jul 2011 - Jun 2013',
      information: 'Administração e TI, contemplando disciplinas para a gestão de empresas e para desenvolvimento de software.'
    }
  ];

}
