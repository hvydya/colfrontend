import React, { Fragment } from 'react';
import Flash from './Flash';

const dataFlash = [
  {front: "This", back: "That"},
  {front: "Onmyo", back: "Magic"},
  {front: "Ninja", back: "Dex"},
  {front: "Odachi", back: "Str"},
  {front: "Tonfa", back: "Courage"},
  {front: "Magic", back: "Switch"},
  {front: "Back", back: "Front"},
]

export default class FlashList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.match.params.colId)
        this.state = {
            flashList: [],
            currentIndex: 0,
            id: props.match.params.colId,
            ready: false,
        };
    }

    componentDidMount() {
        // Simulate n/w call
        setTimeout(() => {
            this.setState({
                flashList: dataFlash,
                ready: true
            })
        }, 5000);
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
        let { flashList, currentIndex, ready } = this.state;
        return ready ? (
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
        ) : <h3>Loading...</h3>;
    }
}