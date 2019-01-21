import React, { Component } from 'react'
import MortalityListItem from '../components/mortality-list-item'
import { connect } from 'react-redux'
import { bindActionCreators }  from 'redux'
import { getMortality, removeMortality } from '../actions/index'

class MortalityList extends Component {
    removeItem = (item) => {
        this.props.removeMortality(item)
    }

    render = () => {
        return <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Pays</th>
                        <th className="col-md-6">Hommes</th>
                        <th className="col-md-6">Femmes</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.list.map((item) => { return <MortalityListItem key={item.country} remove={this.removeItem} item={item} />})}
                </tbody>
            </table>
        </div>
    }
 }

const mapStateToProps = (state) => ({list: state.mortality})
const mapDispatchToProps = (dispatch) => bindActionCreators({getMortality, removeMortality}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MortalityList)