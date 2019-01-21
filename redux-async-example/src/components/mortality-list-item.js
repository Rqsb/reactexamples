import React from 'react'
import Flag from './flag'
import { ColumnChart } from 'react-chartkick'
import { removeMortality } from '../actions/index'
window.Chart = require('chart.js')

const XTITLE = 'Age'
const YTITLE = 'Mortalité'

const MortalityListItem = ({item, remove}) => {
    const mapData = (data) => [Math.floor(data.age), data.mortality_percent.toFixed(1)]
    return <tr>
        <td>
            <Flag country={item.country} />
            <br />
            <button onClick={() => remove(item)}>Retirer</button>
        </td>
        <td className="col-md-6"><ColumnChart xtitle={XTITLE} ytitle={YTITLE} max={30} data={item.male.map((entry) => mapData(entry))} /></td>
        <td className="col-md-6"><ColumnChart xtitle={XTITLE} ytitle={YTITLE} max={30} data={item.female.map((entry) => mapData(entry))} /></td>
    </tr>
}

export default MortalityListItem