import EmployeeCard from '../EmployeeCard';
import { MuiColorInput } from 'mui-color-input';
import './team.css';
import hexToRgba from 'hex-to-rgba';


const Team = ({ category, primaryColor, secondaryColor, changeColor, employees, onRemove }) => {

    const setColor = (primary) => {
        const secondary = hexToRgba(primary, 0.2)
        changeColor(primary, secondary, category);
    }

    return (
        employees.length > 0 && (
            <section className="team-section" style={{ backgroundColor: secondaryColor }}>
                <section className='team-section__header'>
                    <div className="team-color">
                    <MuiColorInput 
                        format="hex" 
                        value={primaryColor}  
                        className="color-input"
                        onChange={setColor}/>
                    </div>
                    <h3 style={{ borderBottomColor: primaryColor }}>{category}</h3>
                </section>
                <div className="employees">
                    {employees.map(employee => 
                        <EmployeeCard
                            id={employee.id}
                            key={employee.id}
                            name={employee.name} 
                            role={employee.role} 
                            srcImage={employee.image}
                            cardColor={primaryColor}
                            onRemove={onRemove}/>
                    )}
                </div>
            </section>
        )
    );
}

export default Team;