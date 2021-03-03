import React, { Fragment } from 'react';
import Flash from './Flash';

const dataFlash = [
  {front: "This", back: "It need to add to the div and the :hover , :active , :focus for the other mobile browsers. I am a CSS noob but I have noticed that hover will work for touch screens so long as it's a hoverable element: image, link, button"},
  {front: "Onmyo", back: "Magic"},
  {front: "Ninja", back: "Dex"},
  {front: "Odachi", back: "Str"},
  {front: "Tonfa", back: "Courage"},
  {front: "Magic", back: "Switch"},
  {front: "Back", back: "Front"},
]

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

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
            let s = shuffle(dataFlash);
            this.setState({
                flashList: s,
                ready: true
            })
        }, 5000);
        document.addEventListener("keyup", this.handleKeyUp)
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.handleKeyUp);
    }

    handleKeyUp = (e) => {
        if (e.key === "ArrowRight") this.handleNext();
        else if (e.key === "ArrowLeft") this.handlePrev();
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