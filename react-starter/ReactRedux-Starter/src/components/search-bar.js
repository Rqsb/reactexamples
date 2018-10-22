import React,{Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {search: "", placeholder: "Search a movie ..."}
    }

    changeSearch = (e) => this.setState({search: e.target.value});

    render = () =>  <div className="row">
                        <div className="col-md-8">
                            <input type="text" className="form-control input" onChange={this.changeSearch} placeholder={this.state.placeholder}/>
                        </div>   
                    </div>
}

export default SearchBar