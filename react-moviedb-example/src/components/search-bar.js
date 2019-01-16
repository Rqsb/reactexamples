import React,{Component} from 'react'

const DEBOUNCE = 1000;

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {search: "", placeholder: "Search a movie ...", autocomplete: true}
    }

    changeSearch = (e) => this.setState({search: e.target.value});

    search = () => {
        this.setState({autocomplete: true})
        this.props.search(this.state.search)
    }

    autocomplete = () => {
        if (this.state.autocomplete) {
            this.setState({autocomplete: false});
            setTimeout(this.search, DEBOUNCE);
        }
    }

    render = () =>  <div className="row search-bar">
                        <div className="col-md-8 input-group">
                            <input type="text" className="form-control input-lg" onKeyUp={this.autocomplete} onChange={this.changeSearch} placeholder={this.state.placeholder}/>
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" onClick={this.search}>Find</button>
                            </span>
                        </div>   
                    </div>
}

export default SearchBar