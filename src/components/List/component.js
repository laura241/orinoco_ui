import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = ['Lentilles 1', 'Lentilles 2', 'Lentilles 3']

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: ''
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    console.log('Vous avez sélectionné', option.label)
    this.setState({selected: option})
  }

  render () {
    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

    return (
      <section>
        <h3>Options </h3>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Choisissez une option" />
        <div className='result'>
          Vous avez sélectionné
          <strong> {placeHolderValue} </strong>
        </div>
      </section>
    )
  }
}

export default List;