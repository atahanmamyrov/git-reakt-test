function Comment(props){
    return(
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar" src={props.autor.avatarUrl} alt={props.author.name} />
                <div className="UserInfo-name">{props.text}</div>
            </div>
            <div className="Comment-text">{props.text} </div>
            <div className="Comment-date">{props.date.toString} </div>
        </div>
    );

}

export default Comment