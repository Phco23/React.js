const Student = () => {
    const studentinfo = [
        {
            id: 1,
            name: "Hena",
            image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ea/ea878112b6e5346cae77860deffd0641371883fa_full.jpg",
            email: 'Galoslsmx12@gmail.com',
        },
        {
            id: 2,
            name: "Fiora",
            image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c0/c021af0895203c21a2a4f60ff1c86f37ab9d9024_full.jpg",
            email: 'Holawlo@gmail.com',
        },
        {
            id: 3,
            name: "David",
            image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/28/28dd473749ea42653b8ee7ed4725c4c42471a138_full.jpg",
            email: 'Galso12@gmail.com',
        },
        {
            id: 4,
            name: "Laura",
            image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/a5/a519de0186b2a29a98c0dbc70480d0305b17b9b2_full.jpg",
            email: 'Fglhan334@gmail.com',
        },
    
]
return(
    <div className="container-fluid" >
    <div className="container">
        <div className="row">
            {studentinfo.map((infolist) => (
                <div className="col-lg-3 text-center  ">
                <div style={{ border: "2px solid black"   }} className="p-3" >
                    <img src={infolist.image} />    
                    <h3>Name: {infolist.name}</h3>
                    <p>Student id: {infolist.id}</p>
                    <p>Email: {infolist.email}</p>
               </div>
                </div>
            ))}
        </div>
    </div>
</div>
 )
}

export default Student;