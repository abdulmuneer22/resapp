import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native'

import Toolbar from './Components/Toolbar'
import Menu from './Containers/Menu'

class App extends Component {
    render() {
        return (
            <View>
                <Toolbar
                prevName = 'Categorias'
                titleHead = 'Nona Gemma'
                titleSub ='Pizzas e Lanches'
                rightTitle = 'Menu Pedido'
                />

                <ScrollView>
                    <Menu />
                </ScrollView>
                
            </View>
        );
    }
}

export default App;