// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o seeding do banco de dados...');

  const elias = await prisma.user.upsert({
    where: { email: 'elias.pereira.adm@outlook.com' },
    update: {},
    create: {
      firstName: 'Elias',
      lastName: 'Pereira',
      email: 'elias.pereira.adm@outlook.com',
      phone: '(81) 9 9697-3442',
      linkedin: 'https://www.linkedin.com/in/elias-pereira-350519184/',
      github: 'https://github.com/eliasjunniior',
      bio: 'Tenho mais de 4 anos de experiência no marketing digital. Pretendo desenvolver minhas competências, aprofundar meus conhecimentos em tecnologia, cultivar a criatividade e a inovação, e focar em iniciativas para o desenvolvimento de novos sistemas e estruturas organizacionais.',
      
      contactInfo: {
        create: {
          email: 'elias.pereira.adm@outlook.com',
          phone: '(81) 9 9697-3442',
          address: 'Rua Ribeiro Roma, 61',
          city: 'Recife',
          state: 'PE',
          zipCode: '50770-340'
        }
      },
      languages: {
        create: [
          { name: 'Português (Portugal)', proficiency: 'Lê, escreve e compreende bem' },
          { name: 'Espanhol', proficiency: 'Lê e compreende bem' },
        ]
      },
      educations: {
        create: [
          { degree: 'SISTEMAS PARA INTERNET', institution: 'Universidade Católica de Pernambuco (UNICAP)', startDate: new Date('2023-01-01'), endDate: null, description: 'Atualmente no 4º/5º período.' },
          { degree: 'BACHAREL EM ADMINISTRAÇÃO', institution: 'Centro Universitário Mauricio de Nassau (UNINASSAU)', startDate: new Date('2019-01-01'), endDate: new Date('2023-12-31') },
          { degree: 'TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS', institution: 'ETE Professor Lucilo Ávila Pessoa', startDate: new Date('2017-01-01'), endDate: new Date('2018-12-31') },
        ],
      },
      experiences: {
        create: [
          { title: 'ANALISTA DE MARKETING JR', company: 'Bioxxi Esterilização', location: 'Recife, PE', startDate: new Date('2024-09-01'), endDate: null, description: 'Gestão de sistemas: Kommo CRM/RD Station. Desenvolvimento de promoções e campanhas. Inbound Marketing. Comunicação com os stakeholders. Benchmarking, Endomarketing. Desenvolvimento de conceitos criativos para eventos. Planejamento de conteúdo (Mídias sociais). Captação e edição de vídeos. Captação de leads; criação de landing pages, email marketing; Rd Station. Organização de feiras e eventos (internos e externos): HOSPITALMED, Cirurgia plástica, Congresso de Enfermagem - FPS. Apresentações de indicadores para Gestão/Diretoria. Acompanhamento da rotina do comercial e supervisão da manutenção das ações nos sistemas de venda. Gestão de brindes para as áreas Comercial e de Marketing. Lançamento de notas fiscais; alocação por centro de custo.' },
          { title: 'ASSISTENTE DE MARKETING PLENO', company: 'Bioxxi Esterilização', location: 'Recife, PE', startDate: new Date('2022-01-01'), endDate: new Date('2023-12-31'), description: 'Manutenção, cadastro e parametrização do Sistema de Biometria Facial (iVMS) da empresa.' },
          { title: 'ESTAGIÁRIO DE RECURSOS HUMANOS', company: 'Bioxxi Esterilização', location: 'Recife, PE', startDate: new Date('2022-01-01'), endDate: new Date('2023-12-31'), description: 'Triagem de currículo. Processos de admissão / demissão. Integrações e certificações. Manutenção de benefícios. Controle de documentação de RH/DP. Gestão de pontos, solicitações de compras e etc (TOTVS-RM). Comunicação entre funcionários e gestão. Implantação de acessos na planta de forma econômica e controlada. Lançamento de notas fiscais, alocação por centro de custo, solicitação de reembolso, emissão de títulos e notas fiscais.' },
          { title: 'ESTAGIÁRIO DE DEPARTAMENTO FINANCEIRO', company: 'CIEE Pernambuco', location: 'Recife, PE', startDate: new Date('2020-01-01'), endDate: new Date('2021-01-01'), description: 'Gestão de contas a receber. Atendimento a clientes internos e externos. Digitação e envio de documentos bancários. Envio e recebimento de e-mails de cobrança. Realização de negociações com clientes inadimplentes.' },
          { title: 'AUXILIAR ADMINISTRATIVO', company: 'Vidrossul LTDA', location: 'Recife, PE', startDate: new Date('2019-01-01'), endDate: new Date('2020-03-31'), description: 'Supervisão da equipe de produção. Gestão de estoque (TOTVS). Emissão de Nota Fiscal (NFe/NFE). Emissão de orçamentos. Gestão de Sistemas ERP.' },
        ],
      },
      skills: {
        create: [
          { name: 'ESTRATEGISTA', category: 'Soft Skill', level: 'Ótimo Domínio' },
          { name: 'PROATIVO', category: 'Soft Skill', level: 'Ótimo Domínio' },
          { name: 'SISTEMAS ERP', category: 'Ferramenta', level: 'BOM com Bling / Tiny (mais de 2 anos)' },
          { name: 'INOVADOR E CRIATIVO', category: 'Soft Skill', level: 'Ótimo Domínio' },
          { name: 'RD STATION', category: 'Ferramenta', level: 'BOM' },
          { name: 'KOMMO', category: 'Ferramenta', level: 'BOM' },
          { name: 'CANVA', category: 'Ferramenta', level: 'BOM' },
          { name: 'FIGMA', category: 'Ferramenta', level: 'BOM' },
          { name: 'TRELLO', category: 'Ferramenta', level: 'BOM' },
          { name: 'FACEBOOK BUSINESS', category: 'Ferramenta', level: 'BOM' },
          { name: 'PROTHEUS', category: 'Ferramenta', level: 'BOM' },
          { name: 'RM (TOTVS)', category: 'Ferramenta', level: 'BOM' },
          { name: 'COMUNICAÇÃO INTERPESSOAL', category: 'Soft Skill', level: 'Ótima' },
          { name: 'NOVAS TECNOLOGIAS', category: 'Interesse', level: 'Ótimo Domínio' },
          { name: 'FERRAMENTAS DIGITAIS', category: 'Marketing Digital', level: 'Ótimo Domínio (Tráfego Pago, Instagram, TikTok, Redes Sociais)' },
          { name: 'INTELIGÊNCIA ARTIFICIAL', category: 'Tecnologia', level: 'Ótimo Domínio de Ferramentas' },
        ],
      },
      projects: {
        create: [
          { name: 'PROJETO NAVEGAÍ', description: 'Participação no Demoday - 10 melhores projetos de todas as faculdades inscritas no Embarque Digital.', url: null, repoUrl: null },
        ],
      },
      courses: {
        create: [
          { title: 'PACOTE OFFICE (BÁSICO E INTERMEDIÁRIO)', institution: 'Fundação Bradesco / Prepara Cursos', startDate: new Date('2019-01-01'), endDate: new Date('2020-12-31'), duration: '2 anos' },
          { title: 'MARKETING ESTRATÉGICO', institution: 'Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais (IFMG)', startDate: new Date('2023-01-01'), endDate: new Date('2023-03-31'), duration: '3 MESES' },
          { title: 'ADMINISTRAÇÃO FINANCEIRA E CONTABILIDADE APLICADA', institution: 'Fundação Bradesco', startDate: new Date('2022-01-01'), endDate: new Date('2023-03-31'), duration: '3 MESES' },
          { title: 'COMUNICAÇÃO ORAL E ESCRITA', institution: 'Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais (IFMG)', startDate: new Date('2023-01-01'), endDate: new Date('2023-12-31') },
          { title: 'INTRODUÇÃO À PRODUÇÃO DE ÁUDIO E VÍDEO', institution: 'Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais (IFMG)', startDate: new Date('2023-01-01'), endDate: new Date('2023-12-31') },
          { title: 'MARKETING DIGITAL: FERRAMENTAS GRATUITAS PARA PROMOÇÃO DE VENDAS', institution: 'Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais (IFMG)', startDate: new Date('2023-01-01'), endDate: new Date('2023-12-31') },
          { title: 'GERENTE DE MARKETING DIGITAL E E-COMMERCE', institution: 'Udemy', startDate: new Date('2024-01-01'), endDate: new Date('2024-12-31') },
          { title: 'CRM RD STATION - NA PRÁTICA', institution: 'Universidade RD', startDate: new Date('2024-01-01'), endDate: new Date('2024-12-31') },
          { title: 'PYTHON E I.A - COMEÇANDO A DESVENDAR', institution: 'Infinity School', startDate: new Date('2025-01-01'), endDate: null },
        ],
      },
      events: {
        create: [
          { name: 'HOSPITALMED', date: new Date('2023-10-01'), location: 'Centro de Convenções de Pernambuco', description: 'Gestão e organização da exposição na feira - (Estande Bioxxi Nordeste)' },
          { name: 'RECNPLAY RECIFE', date: new Date('2023-11-01'), location: 'Cezar, Porto Digital, Accenture', description: 'Participação no evento.' },
          { name: 'DEMODAY - PROJETO NAVEGAÍ', date: new Date('2023-11-01'), location: 'Residência tecnológica Porto Digital', description: 'Participação nos 10 melhores projetos de todas as faculdades inscritas no Embarque Digital.' },
          { name: 'GO DIGITAL - FESTIVAL DE MARKETING', date: new Date('2024-04-01'), location: 'Centro de Convenções de Pernambuco', description: 'Participação no maior evento de Marketing da América Latina.' },
        ],
      },
    },
  });
  console.log(`Criado/Atualizado currículo: ${elias.firstName} ${elias.lastName}`);

  const ana = await prisma.user.upsert({
    where: { email: 'ana.carvalho@exemplo.com' },
    update: {},
    create: {
      firstName: 'Ana',
      lastName: 'Carvalho',
      email: 'ana.carvalho@exemplo.com',
      phone: '+5521999998888',
      linkedin: 'https://www.linkedin.com/in/anacarvalho',
      github: 'https://github.com/anacarvalho',
      bio: 'Desenvolvedora Fullstack com paixão por interfaces intuitivas e performance.',
      contactInfo: {
        create: {
          email: 'ana.carvalho@exemplo.com',
          phone: '+5521999998888',
          address: 'Avenida Brasil, 456',
          city: 'Rio de Janeiro',
          state: 'RJ',
          zipCode: '20000-000'
        }
      },
      languages: {
        create: [
          { name: 'Português (Brasil)', proficiency: 'Nativo' },
          { name: 'Inglês', proficiency: 'Fluente' },
        ]
      },
      educations: {
        create: [
          { degree: 'Bacharelado em Engenharia de Software', institution: 'Universidade do Rio', startDate: new Date('2017-08-01'), endDate: new Date('2021-07-30') },
        ],
      },
      experiences: {
        create: [
          { title: 'Desenvolvedora Fullstack Júnior', company: 'Startup Inovação', location: 'Rio de Janeiro, RJ', startDate: new Date('2022-01-15'), endDate: null, description: 'Desenvolvimento de APIs RESTful com Node.js e React.js. Participação em todo o ciclo de vida do software.' },
        ],
      },
      skills: {
        create: [
          { name: 'JavaScript', category: 'Linguagem', level: 'Avançado' },
          { name: 'React.js', category: 'Framework', level: 'Avançado' },
          { name: 'Node.js', category: 'Framework', level: 'Intermediário' },
          { name: 'MongoDB', category: 'Banco de Dados', level: 'Intermediário' },
          { name: 'RESTful API', category: 'Conceito', level: 'Avançado' },
        ],
      },
      projects: {
        create: [
          { name: 'E-commerce de Roupas', description: 'Desenvolvimento de um sistema completo de e-commerce com carrinho de compras, autenticação e integração com API de pagamentos.', url: 'https://demo.ecommerceroupas.com', repoUrl: 'https://github.com/anacarvalho/ecommerceroupas' },
        ],
      },
      courses: {
        create: [
          { title: 'Desenvolvimento Web Moderno Completo', institution: 'Udemy', startDate: new Date('2021-09-01'), endDate: new Date('2021-12-01'), duration: '3 meses' },
        ]
      },
      events: {
        create: [
          { name: 'BrazilJS Conf 2023', date: new Date('2023-08-25'), location: 'Porto Alegre, RS', description: 'Participação na maior conferência JavaScript do Brasil.' },
        ]
      }
    },
  });
  console.log(`Criado/Atualizado currículo: ${ana.firstName} ${ana.lastName}`);

  console.log('Seeding do banco de dados concluído!');
}

main()
  .catch((e) => {
    console.error('Erro durante o seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });