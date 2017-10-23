import React, { Component } from 'react'
import { connect } from 'react-redux'

class DropdownSelect extends Component {
  render() {
    return (
      <div className="eight wide column">
        <select className="ui dropdown">
          <option value="">Gender</option>
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>
      </div>
    )
  }
}



export default DropdownSelect
