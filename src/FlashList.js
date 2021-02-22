import React, { Fragment } from 'react';
import Flash from './Flash';

export default class FlashList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flashList: props.list,
            currentIndex: 0
        };
    }

    handlePrev = () => {
        let { currentIndex } = this.state;
        if (currentIndex > 0) this.setState({currentIndex: --currentIndex})
    }

    handleNext = () => {
        let { currentIndex } = this.state;
        if (currentIndex < this.state.flashList.length - 1) this.setState({currentIndex: ++currentIndex}) 
    }

    render() {
        let {flashList, currentIndex} = this.state;
        return (
            <Fragment>
                <Flash cardVal={flashList[currentIndex]} index={currentIndex}/>
                <div id="buttonContainer">
                    <span>
                        <button onClick={this.handlePrev}>prev</button>
                    </span>
                    <span>
                        <button onClick={this.handleNext}>next</button>
                    </span>
                </div>
            </Fragment>
        );
    }
}