import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

class Quote extends React.Component {
	render() {
		const websiteUrl = 'https://quota.gstark.me';
		return(
			<div>
				<div className='quote-background'>
					<p>Share</p>
					<div className='icons-container'>
						<a target='_blank' href={'https://www.facebook.com/sharer.php?u=' + websiteUrl + '&quote=%22' + this.props.quote + '%22 ~ ' + this.props.author}><FontAwesomeIcon className='icon' icon={faFacebookF}/></a>
						<a target='_blank' href={'https://twitter.com/intent/tweet?text=%22' + this.props.quote + '%22 ~ ' + this.props.author + '%0D%0A%0D%0A ' + websiteUrl}><FontAwesomeIcon className='icon' icon={faTwitter}/></a>
						<a href='#' onClick={() => {
							navigator.clipboard.writeText(this.props.quote + ' ~ ' + this.props.author + '\n\n' + websiteUrl);
							alert('Copied!');
						}}><FontAwesomeIcon className='icon' icon={faCopy}/></a>
					</div>
				</div>
				<div className='quote'>“{this.props.quote}”</div>
				<div className='author'>~ {this.props.author}</div>
			</div>
		);
	}
}

export default Quote;