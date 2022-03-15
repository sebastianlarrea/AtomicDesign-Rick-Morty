import React from 'react'
import Header from '../../organisms/header/header'
import Card from '../../molecules/card/card'
import './list-template.scss'

const ListTemplate = props => {
    const { data, setData, title, cardInfo } = props

    const normalizeWord = word => {
        const firstLetterCapitalized =
            word.charAt(0).toUpperCase() + word.slice(1)
        return firstLetterCapitalized.replace(/_|-|@|!/g, ' ')
    }

    return (
        <div className="full-content">
            <Header setData={setData} />

            <main>
                <h1 className="title">{title}</h1>
                <section className="info-list">
                    {data &&
                        data.map(dataItem => {
                            let aditionalInfo = []
                            cardInfo.forEach(aditionalItem => {
                                const aditionalItemTitle =
                                    normalizeWord(aditionalItem)
                                aditionalInfo.push({
                                    name: [aditionalItemTitle],
                                    data: dataItem?.[aditionalItem]
                                })
                            })

                            return (
                                <Card
                                    key={dataItem?.id}
                                    title={dataItem?.name}
                                    imageLink={dataItem?.image}
                                    aditionalInfo={aditionalInfo}
                                />
                            )
                        })}
                </section>
            </main>
        </div>
    )
}

export default ListTemplate
