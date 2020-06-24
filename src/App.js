import React from 'react';
import Quote from './components/Quote';
import quotesData from './quotes';

class App extends React.Component {
	render() {
		const shuffledQuotes = quotesData.sort(() => 0.5 - Math.random());
		const randomQuotes = shuffledQuotes.slice(0, 10).map(item => <Quote quote={item.text} author={item.author}/>);

		return(
			<div className='wrapper'>
				<div id='logo'>
					<h1>Quota<span className='colored'>.</span></h1>
					<h3>Random <span className='colored'>motivational</span> quotes.</h3>
				</div>

				<div className='quora-author-quote'>
					<span className='quote'>“This is your daily dose of motivation”</span>
					<span className='quora-author'> ~ Gregory Stark, Creator of Quota</span>
				</div>

				<div id='quotes-container'>
					{randomQuotes}
				</div>

				<footer>&copy; 2020 Gregory Stark, All Rights Reserved</footer>
			</div>
		);
	}
}

export default App;