import { useState } from 'react';
import ImageWithFallBack from '../ImageWithFallback';
import EmployeeCardStyle from './employee-card.css';
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const EmployeeCard = ({ id, name, role, srcImage, favorite, cardColor, onRemove, onFavorite }) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleAnimationEnd = (event) => {
        if (event.animationName !== "DropCard")
            return

        setIsAnimating(false);
        if (onRemove) {
            onRemove(id);
        }
    }

    const handleRemoveClick = (event) => {
        if (!isAnimating) {
            setIsAnimating(true);
        }
    }

    const handleFavoriteClick = () => {
        onFavorite(id);
        //onFavorite(id);
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
                <button className="favorite-button" onClick={handleFavoriteClick}>
                    <AiFillHeart className={`favorite-button__icon ${favorite? "on" : "off"}`} color="#d51212" size={24} /> 
                    <AiOutlineHeart className="favorite-button__icon" color="#3D3D3D" size={24}/>
                </button>
            </div>
        </div>
    );
}

export default EmployeeCard;