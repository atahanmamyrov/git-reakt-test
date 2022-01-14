import Card from './card/Card'
import Footer from './footer/Footer'
import Header from './header/header'


function Container(props) {


	return (
		<div className='main'>
			<Header />
			<div className='main-child'>
				<Card phone={props.data[0]} />
				<Card phone={props.data[1]} />
				<Card phone={props.data[2]} />
			</div>
			<Footer  />
		</div>
	)                               
}

export default Container
