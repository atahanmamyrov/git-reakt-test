
function MainPage(props){
    console.log(props)
    return(
        <div className="main">
           <header className="header">
               <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png" alt="" />
               <ul className="ul">
                   <li>Магазин</li>
                   <li>Mac</li>
                   <li>ipad</li>
                   <li>iPhone</li>
               </ul>
           </header>

            <div className="main-child">
                <div className="iphone-card">
                    <img className="card-img" src={props.phone[0].img} alt="" />
                    <div className="card-text">
                        <ul className="card-text-ul">
                            <li>{props.phone[0].name}</li>
                            <li>{props.phone[0].price}</li>
                            <li>{props.phone[0].func}</li>
                            
                        </ul>
                     </div>
                </div>
                <div className="iphone-card">
                    <img className="card-img" src={props.phone[1].img} alt="" />
                    <div className="card-text2">
                        <ul className="card-text-ul">
                            <li>{props.phone[1].name}</li>
                            <li>{props.phone[1].price}</li>
                            <li>{props.phone[1].func}</li>
                            
                        </ul>
                     </div>
                </div>
                <div className="iphone-card">
                    <img className="card-img" src={props.phone[2].img} alt="" />
                    <div className="card-text">
                        <ul className="card-text-ul">
                            <li>{props.phone[2].name}</li>
                            <li>{props.phone[2].price}</li>
                            <li>{props.phone[2].func}</li>
                            
                        </ul>
                     </div>
                </div>
                
            </div>
        </div>
    );

}

export default MainPage