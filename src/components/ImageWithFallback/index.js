import React, { useState } from 'react';
// import PlaceholderImage from './imagens/user-image.png';

const ImageWithFallBack = ({ src, alt, className }) => {
    const [hasError, setHasError] = useState(false);

    const handleImageError = () => {
        console.error(`Erro ao carregar a imagem: ${src}`);
        setHasError(true);
    }

    if (hasError) {
        return (
            <img src={'./imagens/user-image.png'} alt={`Erro ao carregar ${alt}`} className={className}/>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={handleImageError}
        />
    );
}

export default ImageWithFallBack;