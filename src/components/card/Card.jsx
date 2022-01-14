function Card(props){
    return (
        <div className="iphone-card">

        <img className="card-img" src={props.phone.img} alt="" />
         <div className="card-text">
             <ul className="card-text-ul">
                <li>{props.phone.name}</li>
                <li>{props.phone.price}</li>
                <li>{props.phone.func}</li>
    
             </ul>
         </div>
        </div>
    )
}

export default Card