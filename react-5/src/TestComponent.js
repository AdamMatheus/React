import React, { Component } from 'react'
var my
export default class TestComponent extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            name: "Halit",
            color: "blue",
            count: 0,
         };
         console.log("Hello from TestComponent constructor")
      }
    static getDerivedStateFromProps(props, state){
        console.log("Hello from TestComponent getDerivedStateFromProps")
        // console.log("Props: ", props)
        // console.log("state: ", state)
        return {model: "sembol"}
    }
    componentDidMount(){
        console.log("Hello from TestComponent componentDidMount")
        // console.log(this.state)
        
    }
    shouldComponentUpdate(){
        console.log("ShouldComponentUpdate!....")
        return true
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // Typical usage (don't forget to compare props):
        console.log("TestComp componentDidUpdate")
        console.log("PrevProps: ",prevProps)
        console.log("PrevState: ",prevState)
      }

    componentWillUnmount(){
        console.log("component bye bye....");
        clearTimeout(myT)
    }
      
    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        console.log("Hello from TestComponent Render")
        return (
            <div>
                <p>This is a Class component</p>
                <p> {this.state.count} </p>
                <button onClick={this.handleClick} >arttır</button>
            </div>
        )
    }
}