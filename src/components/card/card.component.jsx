const Card = () => {
    const cards = [
        {
            id: 1,
            title: 'hats',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3gjG5hihyiFpCm9YRK5P-zPFY3vCyV7_cORahxWx7Uw&s'
        },
        {
            id: 2,
            title: 'jackets',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFXjoIgAHi7Jw9EeRE6COQVwPrOouf0fSTmhj_Jvf2Q&s',
        },
        {
            id: 3,
            title: 'sneakers',
            image: 'https://img.freepik.com/premium-photo/assortment-men-s-running-shoes-shop-window-al-generated_866663-1810.jpg'
        },
        {
            id: 4,
            title: 'womens',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRquUMkzRivLjYYHWL7jtocsGRySfShB9kvNFgQz0G1mQ&s',
        },
        {
            id: 5,
            title: 'mens',
            image: 'https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg'
        }
    ];

    return (
        <div className="grid grid-cols-3 gap-5">
            {cards.map((card) => (
                <div
                    key={card.id}
                    className="border border-black px-40 py-28 bg-cover bg-no-repeat cursor-pointer"
                    style={{ backgroundImage: `url(${card.image})` }}
                >
                    <div className="border border-black py-5 px-10 bg-gray-50 opacity-85 flex flex-col items-center">
                        <h3 className="uppercase font-bold text-xl">{card.title}</h3>
                        <p className="uppercase font-semibold text-xl mt-3">Shop Now</p>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default Card;