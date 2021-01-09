/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-12-23 19:02:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-23 19:13:56
 */
import React, { Component } from 'react';
import './style.css';
import SignatureCanvas from 'react-signature-canvas'


class CanvasSignature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trimmedDataURL: '',
        }
        this.clear = this.clear.bind(this);
        this.trim = this.trim.bind(this);
    }

    sigCanvas = { clear: () => { }, toDataURL: (param) => { return "" } };
    clear() {
        this.sigCanvas.clear();
    }
    trim() {
        console.log(this.sigCanvas);
        //let trimmedCanvas = this.sigCanvas.getTrimmedCanvas();
        this.setState({ trimmedDataURL: this.sigCanvas.toDataURL('image/png') })
    }
    render() {
        let { trimmedDataURL } = this.state;
        return (
            <div className="insurance-success">
                <div className="qianming">
                    <SignatureCanvas penColor="green"
                        canvasProps={{ width: 500, height: 400, className: 'sigCanvas' }}
                        ref={(ref) => { this.sigCanvas = ref }} />
                    <button className="buttons" onClick={this.clear}>
                        Clear
                    </button>
                    <button className="buttons" onClick={this.trim}>
                        Trim
                    </button>

                    {trimmedDataURL
                        ? <img className=""
                            src={trimmedDataURL} />
                        : null}
                </div>
            </div>
        )
    }

}

export default CanvasSignature;