import React from 'react';
import Quote from './components/Quote';
import quotesData from './quotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import FadeIn from 'react-fade-in';

class App extends React.Component {
	render() {
		const shuffledQuotes = quotesData.sort(() => 0.5 - Math.random());
		const randomQuotes = shuffledQuotes.slice(0, 12).map(item => <Quote quote={item.text} author={item.author}/>);

		return(
			<div className='wrapper'>
				<nav>
					<div id='logo'>
						<h1>Quota<span className='colored'>.</span></h1>
						<h3>Random <span className='colored'>motivational</span> quotes.</h3>
					</div>

					<a id='refresh-btn' href='javascript:window.location.reload();'>
						<FontAwesomeIcon icon={faRedo}/>
						Refresh
					</a>
				</nav>

				<div className='quora-author-quote'>
					<span className='quote'>“This is your daily dose of motivation”</span>
					<span className='quora-author'> ~ Gregory Stark, Creator of Quota</span>
				</div>

				<FadeIn className='quotes-container' childClassName='quote-item'>
					{randomQuotes}
				</FadeIn>

				<footer>&copy; 2020 Gregory Stark, All Rights Reserved</footer>
			</div>
		);
	}
}

export default App;