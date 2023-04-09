import './App.css';
import React from 'react'
import Checkbox from './Checkbox'
import Table from './Table'
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      prefs: []
    }
  }

  updatePrefs(prefs) {
    this.setState({
      prefs: prefs
    })
  }

  getPrefs() {
    return this.state.prefs
  }

  render() {
    return (
      <>
        <div className="checkbox-container">
          <Checkbox
            updatePrefs={this.updatePrefs.bind(this)}
          />
        </div>
        <div className="table-container">
          <Table
            getPrefs={this.getPrefs.bind(this)}
          />
        </div>
      </>
    )
  }
}

export default App;
