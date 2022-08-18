import React from 'react';
import "./App.css"


class App extends React.Component {
	state = {
		loading: true,
		data: null
	}

	async componentDidMount() {

		try {
			let response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
			let data = await response.json()
			this.setState({
				loading: false,
				data: data
			})
			
		} catch (error) {
			this.setState({
				loading: false,
				data: { setup: "Still Loading...", delivery: "Try checking your internet connection 😏" }
			})
		}

	}

	render () {

		if(this.state.loading) {
			return (
				<>
					<div className="wrapper">
						<span className="setup">Loading...</span>
					</div>
				</>
			)

		}

		console.log(this.state.data)

		if(!this.state.data.setup) {
			return (
				<>
					<div className="wrapper">
						<span className="setup">Unable to load the joke 😔</span>
					</div>
				</>
			)
		}

		return (
			<>
				<div className="wrapper">
					<span className="setup">{this.state.data.setup}</span>
	
					<span className="delivery">{this.state.data.delivery}</span>
				</div>
			</>
		)


	}

}

export default App
