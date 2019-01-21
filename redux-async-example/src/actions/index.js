import axios from 'axios'

const API_ENDPOINT = 'http://api.population.io:80/1.0/'
const GET_COUNTRIES_API = 'countries'
const GET_MORTALITY_API = 'mortality-distribution/'
const GET_MORTALITY_API_DEFAULT_PARAMS = '25/today'


const GET_COUNTRIES = 'GET_COUNTRIES'
const ERROR_GET_COUNTRIES = 'ERROR_GET_COUNTRIES'
const GET_MORTALITY = 'GET_MORTALITY'
const REMOVE_MORTALITY = 'REMOVE_MORTALITY'

const getCountries = () => {
    return (dispatch) => {
        axios(`${API_ENDPOINT}${GET_COUNTRIES_API}`).then((response) => {
            dispatch({type: GET_COUNTRIES, payload: response.data.countries})
        }).catch((error) => {
            dispatch({type: ERROR_GET_COUNTRIES, error: error.response.data.detail})
        })
    }
}

const getMortality = (country) => {
    return (dispatch) => {
        axios.get(`${API_ENDPOINT}${GET_MORTALITY_API}${country}/male/${GET_MORTALITY_API_DEFAULT_PARAMS}`).then((male) => {
            axios.get(`${API_ENDPOINT}${GET_MORTALITY_API}${country}/female/${GET_MORTALITY_API_DEFAULT_PARAMS}`).then((female) => {
                dispatch({type: GET_MORTALITY, country: country, male: male.data.mortality_distribution, female: female.data.mortality_distribution})
            })
        })
    }
}

const removeMortality = (item) => {
    return (dispatch) => {
        dispatch({type: REMOVE_MORTALITY, payload: item})
    }
}

export {GET_COUNTRIES, ERROR_GET_COUNTRIES, getCountries}
export {GET_MORTALITY, REMOVE_MORTALITY, getMortality, removeMortality}