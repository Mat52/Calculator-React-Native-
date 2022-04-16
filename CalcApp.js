import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ItemCalc from './components/ItemCalc';



export default class CalcApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DigitsPanel1: ["1","4","7","."],
            DigitsPanel2: ["2","5","8","0"],
            DigitsPanel3: ["3","6","9","="],
            OperationsPanel: ["C","/","*","-","+"],
            input: "",
            result: ""
        };
    }
    updateState = (data) => {
        try{
        if(data == "C"){
            if(this.state.input != ""){
                let oldinp = this.state.input
                oldinp = oldinp.slice(0, -1); 
                this.setState({
                    input: oldinp
                });
                
                


                
            }
        }
        else if(data == "="){
            let oldinp = this.state.input
            if(oldinp.charAt(oldinp.length-1) != "*" && oldinp.charAt(oldinp.length-1) != "/" && oldinp.charAt(oldinp.length-1) != "-" && oldinp.charAt(oldinp.length-1) != "+" && oldinp.charAt(oldinp.length-1) != "."   ){
                let eval1 = eval(oldinp)
                this.setState({
                    result: eval1,
                });
            }
            else{
                this.setState({
                    result: "",
                });
            }
        }
        else{
        console.log(data)
        let oldInp = this.state.input
        let newimp = oldInp.concat(data)
        
        this.setState({
            input: newimp,
        });
       
        
        }
    }
    catch (error){
        console.log("error")
    }
    }
    render() {
        let row1 = this.state.DigitsPanel1.map((number, i) =>
        <ItemCalc key={i} id={i} number={number}  updateState={this.updateState}></ItemCalc>
        );
        let row2 = this.state.DigitsPanel2.map((number, i) =>
        <ItemCalc key={i} id={i} number={number}  updateState={this.updateState} ></ItemCalc>
        );
        let row3 = this.state.DigitsPanel3.map((number, i) =>
        <ItemCalc key={i} id={i} number={number}   updateState={this.updateState}></ItemCalc>
        );
        let listItems2 = this.state.OperationsPanel.map((number, i) =>
        <ItemCalc key={i} id={i} number={number}  updateState={this.updateState} ></ItemCalc>
        );


        return (
        <View style={styles.container}>
            <View style={styles.InputAndResultContainer}>
                <View style={styles.input}>
                    <Text style={styles.textInput}> {this.state.input} </Text>
                </View>
                <View style={styles.result}>
                    <Text style={styles.textResult}> { this.state.result} </Text>
                </View>
            </View >
            <View style={styles.ButtonContainers}>
                <View style={styles.digits}>
                    <View style={styles.rows} >
                        {row1}
                    </View>
                    <View style={styles.rows}>
                        {row2}
                    </View>
                    <View style={styles.rows}>
                        {row3}
                    </View>
                </View>
                <View style={styles.operations}>
                    {listItems2}
                </View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({

    InputAndResultContainer: {
        flex: 2,
        backgroundColor: '#d3ffce'
    },
    ButtonContainers: {
        flex: 4,
        backgroundColor: "#101010"
        

    },
    container: {
        flex: 1
    },
    input : {
        flex: 1.4,
        justifyContent: "center"

    },
    result : {
        flex: 0.6,
        justifyContent: "center"

    },
    textInput: {
        fontSize: 48,
        color: "black",
        textAlign: "right" 
    },
    textResult: {
        fontSize: 32,
        color: "black",
        textAlign: "right" 
    },
    ButtonContainers: {
        flex:4,
        backgroundColor: 'black',
        flexDirection:"row",
    },
    digits: {
        flex:3,
        backgroundColor:"black",
        flexDirection:"row"
    },
    operations: {
        flex:1,
        backgroundColor:"#1F2322"
    },
    rows : {
        flex:4,
        

    }
});




