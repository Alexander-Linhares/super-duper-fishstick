import FieldText from '../FieldText';
import Dropdown from '../Dropdown';
import SendButton from '../SendButton';
import { MuiColorInput } from 'mui-color-input';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import hexToRgba from 'hex-to-rgba';
import './form.css';

const Form = ({ title, teams, onSubmitEmployeeData, onSubmitTeamData, activeForm }) => {

    // setting state component
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('');

    const [teamCategory, setTeamCategory] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const visibleForm = activeForm;

    // reset function
    const reset = () => {
        setName('');
        setRole('');
        setImage('');
        setSelectedTeam('');
        setTeamCategory('');
        setTeamColor('');
    }

    //create a new employee on Mock Data calling onSubmitEmployeeData to update parent state giving as parameter a new employee object
    //after cleaning the data 
    const handleSubmitEmployeeData = (event) => {
        event.preventDefault();
        const newEmployeeData = {
            id: uuidv4(),
            name: name,
            role: role,
            image: image,
            team: selectedTeam.trim(),
        }
        onSubmitEmployeeData(newEmployeeData);
        reset();
    }
    
    //create a new Team section on Mock Data calling onSubmitTeamData to update parant state giving as parameter a new team object  
    //after cleaning the data
    const handleSubmitTeamData = (event) => {
        event.preventDefault();
        const newTeam = {
            id: uuidv4(),
            category: teamCategory,
            primaryColor: teamColor,
            secondaryColor: hexToRgba(teamColor, 0.2)
        }
        onSubmitTeamData(newTeam);
        reset();
    }

    return (
        <section className="form-section">

            {/*-------------Employee form--------------*/}

            <form className={!(visibleForm === "Funcionário")? 'desactive' : ''} onSubmit={handleSubmitEmployeeData}>
                <h2>{title || "Title"}</h2>
                <FieldText 
                    label="Nome" 
                    anchorName="nameField" 
                    placeholder="Digite seu nome " 
                    isRequired
                    value={name}
                    setter={setName}/>
                <FieldText 
                    label="Cargo" 
                    anchorName="roleField" 
                    placeholder="Digite seu cargo" 
                    isRequired
                    value={role}
                    setter={setRole}/>
                <FieldText 
                    label="Imagem" 
                    anchorName="imgAdressField"
                    placeholder="Digite o endereço da imagem" 
                    isRequired
                    value={image}
                    setter={setImage}/>
                <Dropdown 
                    label="Times" 
                    items={teams}
                    value={selectedTeam}
                    isRequired
                    setter={setSelectedTeam}/>
                <SendButton>Create Card</SendButton>
            </form>

            {/*--------------Team form----------------*/}

            <form className={!(visibleForm === "Time")? 'desactive' : ''} onSubmit={handleSubmitTeamData}>
                <h2>{"Preencha os dados para criar um novo time"}</h2>
                <FieldText 
                    label="Categoria" 
                    anchorName="teamCategory" 
                    placeholder="Digite a categoria do time" 
                    isRequired
                    value={teamCategory}
                    setter={setTeamCategory}/>
                <MuiColorInput 
                        format="hex" 
                        value={teamColor}  
                        className="color-input"
                        onChange={setTeamColor}/>
                <SendButton>Create Team</SendButton>
            </form>
        </section>
    );
}

export default Form;