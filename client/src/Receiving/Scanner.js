import React, { Component } from 'react'
import Quagga from 'quagga'

class Scanner extends Component {

  componentDidMount() {

    Quagga.init({
        inputStream: {
            type : "LiveStream",
            constraints: {
                width: 640,
                height: 480,
                facingMode: "environment" // or user
            }
        },
        locator: {
            patchSize: "medium",
            halfSample: true,
            debug: {
              showCanvas: false,
              showPatches: false,
              showFoundPatches: false,
              showSkeleton: false,
              showLabels: false
            }
        },
        numOfWorkers: 4,
        frequency: 20,
        decoder: {
            readers : [ 
              "code_128_reader", "upc_reader", "upc_e_reader", "codabar_reader"
            ],
            debug: {
              showFrequency: true,
              drawBoundingBox: true,
              drawScanLine: true,
              showPattern: true
        }
      },
        locate: true
    }, function(err) {
        if (err) {
            return console.log(err);
        }
        Quagga.start();
    });
    Quagga.onDetected(this._onDetected);
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
  }

  _onDetected = (result) => {
    this.props.onDetected(result);
  }

  render() {
    return (
      <div id="interactive" className="viewport"/>
    )
  }
}

export default Scanner