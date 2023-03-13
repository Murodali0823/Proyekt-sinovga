import React from 'react'

class Comp1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // text: "Ma'lumotingiz",
            count: ""
        }
    }

    Ozgarish(){
        this.setState({
            count: "Murodali"
        })
    }
    kamayuvchi(){
        this.setState({
            count: "Rahimov"
        })
    }

    render() { 
        return ( 
            <div>
            <button onClick={(i)=> {this.Ozgarish(i)}}>Ismingiz</button>
            <span>{ this.state.count}</span>
            <button onClick={(i)=> {this.kamayuvchi(i)}}>Familiyangiz</button>
            </div>
         );
    }
}
 
export default Comp1;