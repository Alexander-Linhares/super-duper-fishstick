import { v4 as uuidv4 } from 'uuid';

const mockedEmployeeList = [
    {
      id: 1, // Adicionado ID
      name: "Alexandre Silva",
      role: "Desenvolvedor Backend Pleno",
      image: "https://github.com/alexandresilva.png",
      team: "Programação"
    },
    {
      id: 2, // Adicionado ID
      name: "Beatriz Costa",
      role: "Desenvolvedora Fullstack Sênior",
      image: "https://github.com/beatrizcosta.png",
      team: "Programação"
    },
    {
      id: 3, // Adicionado ID
      name: "Carlos Eduardo",
      role: "QA Tester",
      image: "https://github.com/carloseduardo.png",
      team: "Programação"
    },

    // Time: Front-End
    {
      id: 4, // Adicionado ID
      name: "Diana Garcia",
      role: "Desenvolvedora Frontend Júnior",
      image: "https://github.com/dianagarcia.png",
      team: "Front-End"
    },
    {
      id: 5, // Adicionado ID
      name: "Enzo Fernandes",
      role: "Engenheiro UI/UX",
      image: "https://github.com/enzofernandes.png",
      team: "Front-End"
    },
    {
      id: 6, // Adicionado ID
      name: "Fernanda Almeida",
      role: "Especialista em Acessibilidade",
      image: "https://github.com/fernandaalmeida.png",
      team: "Front-End"
    },

    // Time: Data Science
    {
      id: 7, // Adicionado ID
      name: "Gustavo Rocha",
      role: "Cientista de Dados",
      image: "https://github.com/gustavorocha.png",
      team: "Data Science"
    },
    {
      id: 8, // Adicionado ID
      name: "Heloísa Lima",
      role: "Analista de Machine Learning",
      image: "https://github.com/heloisali.png",
      team: "Data Science"
    },

    // Time: Devops
    {
      id: 9, // Adicionado ID
      name: "Isabela Martins",
      role: "Engenheira DevOps",
      image: "https://github.com/isabelamartins.png",
      team: "Devops"
    },
    {
      id: 10, // Adicionado ID
      name: "João Pedro",
      role: "Especialista em Cloud",
      image: "https://github.com/joaopedro.png",
      team: "Devops"
    },

    // Time: UX & Design
    {
      id: 11, // Adicionado ID
      name: "Larissa Dias",
      role: "UX Researcher",
      image: "https://github.com/larissadias.png",
      team: "UX & Design"
    },
    {
      id: 12, // Adicionado ID
      name: "Marcelo Nunes",
      role: "UI Designer",
      image: "https://github.com/marcelonunes.png",
      team: "UX & Design"
    },

    // Time: Mobile
    {
      id: 13, // Adicionado ID
      name: "Natália Oliveira",
      role: "Desenvolvedora Mobile Android",
      image: "https://github.com/nataliaoliveira.png",
      team: "Mobile"
    },
    {
      id: 14, // Adicionado ID
      name: "Otávio Pereira",
      role: "Desenvolvedor Mobile iOS",
      image: "https://github.com/otaviopereira.png",
      team: "Mobile"
    },

    // Time: Inovação e Gestão
    {
      id: 15, // Adicionado ID
      name: "Paula Rodrigues",
      role: "Gerente de Projeto Ágil",
      image: "https://github.com/paularodrigues.png",
      team: "Inovação e Gestão"
    },
    {
      id: 16, // Adicionado ID
      name: "Ricardo Souza",
      role: "Especialista em Inovação",
      image: "https://github.com/ricardosouza.png",
      team: "Inovação e Gestão"
    }
];

mockedEmployeeList.forEach(employee => employee.id = uuidv4())

export default mockedEmployeeList;