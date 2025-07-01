import './dropdown.css';

const Dropdown = ({ label, value, isRequired, items, setter }) => {

    const selectClassName = value ? "hasSelected" : "noSelected";

    return (
        <div className="dropdown">
            <label>{label}</label>
            <select className={selectClassName} onChange={event => setter(event.target.value)} value={value} required={isRequired}>
                <option className="placeholder" value="">Selecione</option>
                {items.map(
                    item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default Dropdown;