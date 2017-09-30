import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native'
import {Colors} from '../constants'

import Switch from '../Components/Switch'
import ListItems from '../Components/ListItems'

class Menu extends Component {
    constructor(){
        super();
        this.state = {
            selectedItem : ''
        }
    }

    _setSelectedItem = (item) => {
        this.setState({
            selectedItem : item
        })
    }

    render() {
        return (
            <View>
                <Text style={{
                    textAlign : 'center',
                    paddingVertical : 5,
                    fontSize : 25,
                    fontWeight : '700'
                }}>
                    Pizzas
                </Text>

                {
                    this.state.selectedItem ?
                    <View>
                        <Text style={{
                            color : Colors.TEXT_GREEN,
                            fontSize : 16,
                            textAlign : 'center',
                            fontWeight : '700',
                            paddingVertical : 5
                        }}>
                            Sabor 1 : {this.state.selectedItem.title} - Escolha o sengudo sabor
                        </Text>
                    </View>
                    :
                    null
                }

                <Switch
                leftTitle = 'Pizza Inteira'
                rightTitle = 'Pizza Meio a Meio'
                />

                <ListItems onSelect = {this._setSelectedItem}/>
            </View>
        );
    }
}

export default Menu;