import React from 'react';

class Quote extends React.Component {
	render() {
		return(
			<div className='quote-item'>
				<div className='quote'>“{this.props.quote}”</div>
				<div className='author'>~ {this.props.author}</div>
			</div>
		);
	}
}

export default Quote;