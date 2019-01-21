import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCountries, getMortality } from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {selectedCountry: this.props.defaultCountry}
    }

    componentWillMount = () => this.props.getCountries()

    getOptions = (countries) => countries.map((country) => {
            return <option key={country} value={country}>{country}</option>
        })

    selectValue = (e) => {
        this.setState({selectedCountry: e.target.value}, () => {
            this.props.getMortality(this.state.selectedCountry)
        }) 
    }   

    render = () => {
        if (this.props.countries) {
            return <div>
                <select className="col-md-12 input-group" value={this.state.selectedCountry} onChange={this.selectValue}>{this.getOptions(this.props.countries)}</select>
            </div>
        } else {
            return <div>Loading country database ...</div>
        }
    }
}

const mapStateToProps = (state) => ({countries: state.countries})
const mapDispatchToProps = (dispatch) => bindActionCreators({getCountries, getMortality}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)