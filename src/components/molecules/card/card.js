import React from 'react'
import './card.scss'

const Card = props => {
    const { title, imageLink, aditionalInfo } = props
    return (
        <section className="card">
            {imageLink && (
                <img className="card__photo" src={imageLink} alt={title}></img>
            )}
            <h1 className="card__title">{title}</h1>
            <section className="card__info">
                {aditionalInfo &&
                    aditionalInfo.map(infoItem => {
                        return (
                            infoItem.data && (
                                <section
                                    key={infoItem.name}
                                    className="card__info-item"
                                >
                                    <h4 className="card__info-name">
                                        {infoItem.name}
                                        {':'}
                                    </h4>
                                    <h4 className="card__info-data">
                                        {infoItem.data}
                                    </h4>
                                </section>
                            )
                        )
                    })}
            </section>
        </section>
    )
}

export default Card
