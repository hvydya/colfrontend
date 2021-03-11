import React, { Fragment } from 'react';
import "./EditCollection.css";

export default class EditCollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: [],
            current: null,
            ready: false,
            currentCollection: [],
            currentSelected: "default",
            isEditing: false
        }
    }

    componentDidMount() {
        fetch(`http://192.168.1.10/api/c`).then(listraw => listraw.json()).then(list => {
            this.setState({ collections: list, ready: true });
        }).catch(err => {
            console.log(err);
        });
    }

    onSelect = (e) => {
        let val = e.target.value;
        if (val === "default") {
            this.setState({ current: null, currentSelected: val });
        } else {
            this.setState({ ready: false, currentSelected: val }, () => {
                fetch(`http://192.168.1.10/api/c/i?name=${encodeURI(val)}`).then(res => res.json()).then(res => {
                    this.setState({ currentCollection: res, ready: true });
                }).catch(console.error);
            })
        }
    }

    onGetItem = () => {
        let searchText, isFront;
        isFront = document.getElementById("isFront").checked;
        searchText = document.getElementById("searchText").value;

        this.setState({ ready: false }, () => {
            let { currentCollection } = this.state;
            let find = null;
            for (let i = 0; i < currentCollection.length; i++) {
                let toComp = null;
                if (isFront) {
                    toComp = currentCollection[i].front;
                } else {
                    toComp = currentCollection[i].back;
                }

                if (searchText === toComp) {
                    find = currentCollection[i];
                    break;
                }
            }
            this.setState({ current: find, ready: true });
        })
    }

    onInputChange = (e) => {
        let { id, value } = e.target;
        let { current } = this.state;
        if (id === "front") current.front = value;
        else current.back = value;
        this.setState({ current });
    }

    onEditItem = () => {
        let { id, front, back } = this.state.current;
        this.setState({ isEditing: true });
        fetch(`http://192.168.1.10/api/c/i`, {
            method: "POST",
            body: JSON.stringify({
                id, front, back
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(console.error).finally(() => this.setState({ isEditing: false }))
    }

    render() {
        let { ready, collections, current, currentSelected, isEditing } = this.state;
        return ready ? <div id="edit-collection">
            <div id="edit-collection-select">
                <select id="collections" name="Select Collection..." onChange={this.onSelect} value={currentSelected}>
                    <option value="default">Select a collection to edit</option>
                    {collections.map((col, i) => <option key={i} value={col.name}>{ col.name }</option>) }
                </select>
                <input type="text" id="searchText" name="front" placeholder="type front or back text..." />
                <label htmlFor="isFront"> is Front?</label>
                <input type="checkbox" id="isFront" name="isFront" defaultChecked={true} />
                <button onClick={this.onGetItem}> GET </button>
            </div>
            <div id="edit-collection-cards-container">
                {
                    current != null ? editCard({ ...current, editItem: this.onEditItem, onChange: this.onInputChange, isEditing }) : <Fragment />
                }
            </div>        
        </div> : <div><h2>Loading...</h2></div>
    }
}

function editCard(props) {
    let { front, back } = props;
    return <div id="edit-collection-card-item">
        <input type="text" id="front" name="front" value={front} onChange={props.onChange}/>
        <input type="text" id="back" name="back" value={back} onChange={props.onChange}/>
        <button onClick={props.editItem} disabled={props.isEditing}> EDIT </button>
    </div>
}