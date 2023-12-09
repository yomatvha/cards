import React, { ReactNode } from 'react';

const Card: React.FC<CardProps> = ({ img, children }) => {
    return (
        <div className="card">
            {img ? <img src={img} className="card-img-top" alt="..."></img> : ""}
            { children }
        </div>
    )
}

type CardProps = {
    img?: string,
    children: ReactNode,
}

export default Card
