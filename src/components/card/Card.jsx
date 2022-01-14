import '..//'
export default function Card(props){
return(
    <div className="iphone-card">
        sdfa
                    <img className="card-img" src={props.phone[0].img} alt="" />
                    <div className="card-text">
                        <ul className="card-text-ul">
                            <li>{props.phone[0].name}</li>
                            <li>{props.phone[0].price}</li>
                            <li>{props.phone[0].func}</li>
                            
                        </ul>
                     </div>
                </div>
)
}