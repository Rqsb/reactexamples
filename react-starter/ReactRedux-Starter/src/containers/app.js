import Featured from './featured'
import React,{Component} from 'react'
import { hot } from 'react-hot-loader'
import SearchBar from '../components/search-bar'
import axios from 'axios'
import VideoDetail from '../components/video-detail';
import VideoPlayer from '../components/video-player';

const API_ENDPOINT = 'https://api.themoviedb.org/3/'
const POPULAR_MOVIES_URL = 'discover/movie?sort_by=popularity.desc&include_adult=false&append_to_response=images'

const API_KEY = 'api_key=33ecbb1325d488a5ef589201cc0a36da'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {movies: {}, isLoaded: false, trailer: null}
    }

    componentDidMount = () => {
        axios.get(`${API_ENDPOINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
            .then((response) => {
                this.setState({movies: response.data.results.slice(0, 6), isLoaded: true}, () =>
                    axios.get(`${API_ENDPOINT}movie/${this.state.movies[0].id}/videos?${API_KEY}`)
                    .then((response) => this.setState({trailer: response.data.results[0].key}))
                )  
            })
    }

    render = () => {
        if (this.state.isLoaded) {
            console.log(this.state)
            return <div>
                    <SearchBar/>
                    <div className="row">
                        <div className="col-md-8">
                            <VideoPlayer key={this.state.trailer} />
                        </div>
                        <div>
                            <Featured movies={this.state.movies.slice(1, 6)}/>
                        </div>
                    </div>
                    <VideoDetail title={this.state.movies[0].title} description={this.state.movies[0].overview} />
                </div>
        } else {
            return <div><SearchBar/></div>
        }
    }
} 

export default hot(module)(App)