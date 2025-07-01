import FieldText from '../FieldText';
import Dropdown from '../Dropdown';
import SendButton from '../SendButton';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './form.css';

const Form = ({ title, teams, submitEmployeeData }) => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [teamSelected, setTeam] = useState('');

    const reset = () => {
        setName('');
        setRole('');
        setImage('');
        setTeam('');
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newEmployeeData = {
            id: uuidv4(),
            name: name,
            role: role,
            image: image,
            team: teamSelected.trim(),
        }
        submitEmployeeData(newEmployeeData);
        reset();
    }

    return (
        <section className="form-section">
            <form onSubmit={submitHandler}>
                <h2>{title || "Title"}</h2>
                <FieldText 
                    label="Nome" 
                    anchorName="nameField" 
                    placeholder="Digite seu nome " 
                    isRequired={true}
                    value={name}
                    setter={setName}/>
                <FieldText 
                    label="Cargo" 
                    anchorName="roleField" 
                    placeholder="Digite seu cargo" 
                    isRequired={true}
                    value={role}
                    setter={setRole}/>
                <FieldText 
                    label="Imagem" 
                    anchorName="imgAdressField"
                    placeholder="Digite o endereço da imagem" 
                    isRequired={true}
                    value={image}
                    setter={setImage}/>
                <Dropdown 
                    label="Times" 
                    items={teams}
                    value={teamSelected}
                    isRequired={true}
                    setter={setTeam}/>
                <SendButton>Create Card</SendButton>
            </form>
        </section>
    );
}

export default Form;