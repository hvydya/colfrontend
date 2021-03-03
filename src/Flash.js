import React from 'react';

export default class Flash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            front: props.cardVal.front,
            back: props.cardVal.back,
            isFront: true,
            index: props.index
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.index !== prevProps.index) {
            this.setState({
                front: this.props.cardVal.front,
                back: this.props.cardVal.back,
                isFront: true,
                index: this.props.index
            })
        }
    }

    toggleFlash = (e) => {
        e.preventDefault();
        this.setState({ isFront: !this.state.isFront });
    }

    render() {
        let { front, back, index } = this.state;
        // let style = isFront ? frontStyle : backStyle
        return <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div id="front-text">{front}</div>
                    <div id="cardIndex">{index + 1}</div>
                </div>
                <div className="flip-card-back">
                    <div id="back-text">{back}</div>
                </div>
            </div>
        </div>
    }
}