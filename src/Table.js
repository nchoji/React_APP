import React from 'react'

const baseURL = 'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode={pref_code}'
const apiKey = 'VbJ8F3aompu9RXzJLoJxrUfs5QefatNoei7Y0OtC'

export default class Table extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      prefCode: null,
      tableHeaderData: [],
      tableData: []
    }
    this.on = false
  }

  componentDidUpdate() {
    const prefs = this.props.getPrefs()
    if (prefs.length > 0) {

      const selectedPref = prefs[0].code
      if (this.state.prefCode === selectedPref) return

      let tmpUrl = baseURL.replace(/{pref_code}/g, selectedPref)

      fetch(tmpUrl, { headers: { "x-api-key": apiKey } })
        .then((res) => {
          return res.json()
        })
        .then((data) => {

          let tableHeadarData = ['年']
          let tmpYearList = {}
          data.result.data.forEach((dataObj) => {
            dataObj.data.forEach((yearObj) => {
              tmpYearList[yearObj.year] = yearObj.year
            })
            tableHeadarData.push(dataObj.label)
          })

          const yearList = Object.keys(tmpYearList).sort().reverse()
          let tableData = []
          yearList.forEach((year) => {
            let valueData = [
              {
                id: year,
                data: year
              }
            ]
            data.result.data.forEach((dataObj) => {
              valueData.push(
                {
                  id: dataObj.label,
                  data: dataObj.data.filter((item) => {
                    return Number(item.year) === Number(year)
                  })[0].value
                }
              )
            })
            tableData.push({
              year: year,
              value: valueData
            })
          })

          this.setState({
            prefCode: selectedPref,
            tableHeaderData: tableHeadarData,
            tableData: tableData
          })
        })
    } else {
      if (this.state.tableData.length > 0) {
        this.setState({
          prefCode: null,
          tableHeaderData: [],
          tableData: []
        })
      }
    }
  }

  render() {
    if (this.state.tableData.length <= 0) {
      return (<div></div>)
    } else {
      return (
        <table>
          <thead>
            <tr>
              {this.state.tableHeaderData.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map((data) => (
              <tr key={data.year}>
                {data.value.map((value) => (
                  <td key={value.label + "-" + value.data}>{value.data}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
    }
  }
}