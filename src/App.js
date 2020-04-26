import React from 'react'


//import { cards, charts, countryPicker } from './components'
import Cards from './components/cards/cards'
import styles from './App.module.css'
import { Charts, CountryPicker } from './components';
import { fetchData } from './api/index'

class App extends React.Component {

    state = {
        data: {}
    }


    async componentDidMount() {
        const fetcheddata = await fetchData()

        this.setState({
            data: fetcheddata
        })

        //console.log(data)
    }

    render() {

        const { data } = this.state
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <Charts />
                <CountryPicker />

            </div>
        )
    }
}

export default App