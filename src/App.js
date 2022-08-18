import { useEffect, useState } from "react"
import "./App.css"

function App() {
	let [setupText, setSetupText] = useState("")
	let [deliveryText, setDeliveryText] = useState("")

	useEffect(() => {
		let url =
			"https://v2.jokeapi.dev/joke/Programming?type=twopart"
		fetch(url)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				setSetupText(data.setup)
				setDeliveryText(data.delivery)
			})
			.catch((error) => console.log(error))
	}, [])

	return (
		<>
			<div className="wrapper">
				<span className="setup">{setupText}</span>

				<span className="delivery">{deliveryText}</span>
			</div>
		</>
	)
}

export default App
