const Student = ({id, name, image, email}) => {
    return(
        <div className="card h-100 shadow-lg">
            <div className="card-body">
                <div className="text-center p-3">
                   <img src={image} />
                   <h3>{name}</h3>
                   <p>Email: {email}</p>
                   <p>id: {id}</p> 
                </div>
            </div>
        </div>
    )
}

export default Student;