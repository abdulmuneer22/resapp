import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'

import {Colors} from '../../constants'

const Items = [
    {
        key : "01",
        index : 1,
        title : "NONA GEMMA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "02",
        index : 2,
        title : "A MODA DO ROSARIO",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "03",
        index : 3,
        title : "A MODA DA CASA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "04",
        index : 4,
        title : "BAINA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "05",
        index : 5,
        title : "BAINA EGG",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "06",
        index : 6,
        title : "CALABREZA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "07",
        index : 7,
        title : "NONA GEMMA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "08",
        index : 8,
        title : "A MODA DO ROSARIO",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "09",
        index : 9,
        title : "A MODA DA CASA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "10",
        index : 10,
        title : "BAINA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "11",
        index : 11,
        title : "BAINA EGG",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "12",
        index : 12,
        title : "CALABREZA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "13",
        index : 13,
        title : "NONA GEMMA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "14",
        index : 14,
        title : "A MODA DO ROSARIO",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "15",
        index : 15,
        title : "A MODA DA CASA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "16",
        index : 16,
        title : "BAINA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "17",
        index : 17,
        title : "BAINA EGG",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "18",
        index : 18,
        title : "CALABREZA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "19",
        index : 19,
        title : "NONA GEMMA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "20",
        index : 20,
        title : "A MODA DO ROSARIO",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "21",
        index : 21,
        title : "A MODA DA CASA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "22",
        index : 22,
        title : "BAINA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "23",
        index : 23,
        title : "BAINA EGG",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    },
    {
        key : "24",
        index : 24,
        title : "CALABREZA",
        subItems : ["palmito,mussarela,azeitona,cebola"],
        price : "30,000"
    }

]

export default class ListItems extends Component {

    constructor(){
        super();
        this.state = {
            activeIndex : ''
        }
    }
    render(){
        return(
            <View>
                {
                    Items.map((item,ind)=>{
                        return(
                        <TouchableOpacity
                        key = {ind}
                        onPress = {()=>{
                        this.props.onSelect(item)
                        this.setState({
                        activeIndex : item.index
                        })
                        }}
                        style={{
                        backgroundColor : this.state.activeIndex === item.index ?  Colors.PRIMARY_COLOR : item.index % 2 !== 0 ? 'rgba(1,1,1,0.3)' : 'white',
                        paddingHorizontal : 5
                        }}>
                        <View style={{
                        flexDirection : 'row',
                        paddingVertical : 5
                        }}>
                        <View style={{
                        flex : 1
                        }}>
                        <Text style={{
                        fontWeight : '700',
                        fontSize : 18,
                        color : this.state.activeIndex === item.index ? 'white' : 'black'
                        }}>{`${item.key}`}-{item.title}</Text>
                        </View>

                        <View>
                        <Text style={{
                            color : this.state.activeIndex === item.index ? 'white' : 'black',
                            fontSize : 17}}>{`R$ ${item.price}`}</Text>
                        </View>
                        </View>

                        <View>
                        <Text style={{
                        color : this.state.activeIndex === item.index ? '#626262' : '#626262'
                        }}>{item.subItems}</Text>
                        </View>

                        </TouchableOpacity>
                        );
                    })
                }
        
            </View>
        );
    }
}