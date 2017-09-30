import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import {Metrics,Colors} from '../../constants'

class Switch extends Component {

    constructor(){
        super();
        this.state = {
            activeSwitch : 0
        }
    }

    render() {
        const {leftTitle,rightTitle} = this.props
        return (
            <View style={{
                width : Metrics.FULL_WIDTH,
                borderColor : 'red',
                borderRadius : 4,
                alignSelf : 'center',
                justifyContent : 'center',
                borderWidth : 1,
                borderColor : Colors.PRIMARY_COLOR,
                flexDirection : 'row',
                borderRadius : 6
            }}>
                <TouchableOpacity
                onPress= {()=>{
                    this.setState({
                        activeSwitch : 0
                    })
                }}
                style={[Style.switch,{
                    backgroundColor : this.state.activeSwitch === 0 ? Colors.PRIMARY_COLOR : Colors.TEXT_PRIMARY
                }]}>
                    <Text style={{
                        color : this.state.activeSwitch === 0 ? Colors.TEXT_PRIMARY : Colors.PRIMARY_COLOR
                    }}>
                    {leftTitle}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress= {()=>{
                    this.setState({
                        activeSwitch : 1
                    })
                }}
                style={[Style.switch,{
                    backgroundColor : this.state.activeSwitch === 1 ? Colors.PRIMARY_COLOR : Colors.TEXT_PRIMARY
                }]}>
                    <Text style={{
                        color : this.state.activeSwitch === 1 ? Colors.TEXT_PRIMARY : Colors.PRIMARY_COLOR
                    }}>
                        {rightTitle}
                    </Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}


const Style = StyleSheet.create({
    switch : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        paddingVertical : 5
    }
})
export default Switch;