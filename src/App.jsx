import { useState } from 'react'
import './App.css'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'
import Introduction from './components/Introduction.jsx'
import Projects from './components/Projects.jsx'

function App() {
	return (
		<div>
			<Header />
			<Introduction />
			<Projects />
			<Contact />
		</div>
	)

}

export default App
