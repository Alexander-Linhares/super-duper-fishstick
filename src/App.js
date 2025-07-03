import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

//mock data importing
import mockedEmployeeList from './mock/employeeList';
import mockedTeams from './mock/teams';
import Footer from './components/Footer';
import Tabs from './components/Tabs';

function App() {

  const [teams, setTeam] = useState(mockedTeams);
  const [employeeList, setEmployees] = useState(mockedEmployeeList);
  const [activeForm, setActiveForm] = useState('Funcionário');

  //adiciona um novo funcionário
  const addEmployee = (newEmployee) => {
    setEmployees([...employeeList, newEmployee]);
  };

  //favorita um funcionário 
  const favoriteEmployee = (employeeId) => {
    setEmployees(employeeList.map((employee) => {
      if (employee.id === employeeId)
        employee.favorite = !employee.favorite;
      return employee;
    }));
  };

  const addTeam = (newTeam) => {
    setTeam([...teams, newTeam]);
  };

  //muda a cor principal do time na mockdata
  const changeTeamColor = (primary, secondary, teamCategory) => {
    setTeam(prevTeam => prevTeam.map(current => {
      if (current.category === teamCategory) {
        current.primaryColor = primary;
        current.secondaryColor = secondary;
      }
      return current;
    }));
  };

  //removera os funcionários na mock data 
  const removeEmployee = (employeeId) => {
    setEmployees(prevEmployeeList => 
      prevEmployeeList.filter(employee => employee.id !== employeeId));
  };
  
  const changeForm = () => {
    
  }

  return (
    <div className="App">
      <Banner />
      <Tabs activeTab={activeForm} onChangeTab={setActiveForm}></Tabs>
      <Form 
        title="Preencha os dados para criar o card do colaborador" 
        onSubmitEmployeeData={addEmployee}
        onSubmitTeamData={addTeam}
        activeForm={activeForm}
        teams={teams.map(team => team.category)}
      />
      <section id="teams">
        { teams.map(team => 
            <Team 
              key={team.category} 
              category={team.category} 
              primaryColor={team.primaryColor} 
              secondaryColor={team.secondaryColor}
              //filtra os funcionários pela categoria do time selecionado e retorna um Array filtrado
              employees={employeeList.filter(
                employee => employee.team === team.category)}
              onRemove={removeEmployee}
              changeColor={changeTeamColor}
              favoriteEmployee={favoriteEmployee}
            />
          )}
      </section>
      <Footer/>
    </div>
  );
}

export default App;

