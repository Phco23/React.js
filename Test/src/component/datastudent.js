const student = () => [
    {
        id: 1,
        name: "provip",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/37/3762fbf00e71620af557627238b400706ba0471c_full.jpg",
        email: 'Galoslsmx12@gmail.com',
    },
    {
        id: 2,
        name: "provip",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ea/ea237ecc0b535b073289e1f83ca1eea66ba05db0_full.jpg",
        email: 'Holawlo@gmail.com',
    },
    {
        id: 3,
        name: "provip",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/91/91bbca529409c4dbc5fcee180b2b4cc600ff3610_full.jpg",
        email: 'Galso12@gmail.com',
    },
    {
        id: 4,
        name: "provip",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ea/ea878112b6e5346cae77860deffd0641371883fa_full.jpg",
        email: 'Fglhan334@gmail.com',
    },
]
return(
        <div className="card h-100 shadow-lg">
            <div className="card-body">
                <div className="text-center p-3">
                    {student.map(() => (
                        <div className="box">
                            <h3>name: {name}</h3>
                            <img src={image} />
                            <p>email: {email}</p>
                            <p>id: {id}</p>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    )

export default student;