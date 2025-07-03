import { useState } from 'react';
import ImageWithFallBack from '../ImageWithFallback';
import EmployeeCardStyle from './employee-card.css';
import { AiFillCloseCircle } from "react-icons/ai";

const EmployeeCard = ({ id, name, role, srcImage, cardColor, onRemove }) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleAnimationEnd = () => {
        setIsAnimating(false);
        if (onRemove) {
            onRemove(id);
        }
    }

    const handleRemoveClick = (event) => {
        event.stopPropagation();
        if (!isAnimating) {
            setIsAnimating(true);
        }
    }

    //Adiciona dinamicamente a calsse animate-click assim que o setIsAnimating(true) -> o componente irá realizar um update
    const cardClasses = `employee-card ${isAnimating ? 'animate-click' : ''}`;

    return (
        <div 
            className={cardClasses}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onAnimationEnd={handleAnimationEnd}>
            <AiFillCloseCircle 
                size={32} 
                className='remove-button'
                style={{ visibility: isHovered? 'visible': 'hidden' }}
                onClick={handleRemoveClick}
                aria-label={`Remover ${name}`}
                title={`Remover ${name}`}/>
            <div className="e-card__header" style={{ backgroundColor: cardColor }}>
                <ImageWithFallBack 
                    src={srcImage} 
                    alt={name} 
                    className={EmployeeCardStyle}/>
            </div>
            <div className="e-card__footer">
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    );
}

export default EmployeeCard;