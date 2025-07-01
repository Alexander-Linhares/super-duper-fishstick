import { v4 as uuidv4 } from 'uuid';

const mockedTeams = [
    {
      category: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },  
    {
      category: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },  
    {
      category: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },  
    {
      category: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },  
    {
      category: 'UX & Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },  
    {
      category: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },  
    {
      category: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },  
];

mockedTeams.forEach(employee => employee.id = uuidv4())

export default mockedTeams;