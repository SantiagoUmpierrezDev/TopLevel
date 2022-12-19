import './itemListContainer.scss'

export const ItemListContainer = ({greeting, subGreeting}) => {
    return (
        <main className='main'>
            <section className='main__section'>
                <h1 className='section__slogan'>
                    {greeting}
                </h1>
                <p className='section__p'>
                    {subGreeting}
                </p>
            </section>
        </main>
    )
}