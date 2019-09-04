import React, { Component } from 'react'
import Scanner from './Scanner'
import Result from './Result'

class Quagga extends Component {

  state = {
    scanning: true,
    results: []
  }

  _scan = () => {
    this.setState({scanning: !this.state.scanning})
  }

  _onDetected = result => {
    this.setState({results: this.state.results.concat([result])})    
    this.props.check(result.codeResult.code)
  }

  render() {

    return (
      <div>
          {/* <button onClick={this._scan}>{this.state.scanning ? 'Stop' : 'Start'}</button> */}
          <ul className="results">
            {this.state.results.map((result, i) => (<Result key={result.codeResult.code + i} result={result} />))}
          </ul>
          {this.state.scanning ? <Scanner onDetected={this._onDetected}/> : null}
      </div>
    )
  }

}

export default Quagga

// import React, { useState } from 'react'
// import Scanner from './Scanner'
// import Result from './Result'

// export default function Quagga({ check }) {

//   const [scanning, setScanning] = useState(true)
//   const [results, setResults] = useState([])

//   const _scan = () => {
//     setScanning(!scanning)
//   }

//   const _onDetected = result => {
//     console.log(result)
//     setResults( [...results, result] )
//   }

//     return (
//       <div>
//           <button onClick={ () => _scan()}>{scanning ? 'Stop' : 'Start'}</button>
//           <ul className="results">
//             {results.map((result, i) => (<Result result={result} />))}
//           </ul>
//           {scanning ? <Scanner onDetected={ () => _onDetected() }/> : null}
//       </div>
//     )
// }