import './fieldtext.css';


const FieldText = (props) => {


    const changeHandler = (event) => {
        props.setter(event.target.value);
    }

    return (
        <div className="field-text">
            <label for={props.anchorName}>{props.label}</label>
            <input 
                type="text" 
                value={props.value} 
                onChange={changeHandler} 
                name={props.anchorName} 
                id={props.anchorName} 
                placeholder={props.placeholder} 
                required={props.isRequired}/>
        </div>
    );
}

export default FieldText;