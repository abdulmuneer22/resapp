import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {Colors} from '../../constants'

const ToolBar = ({prevName,titleHead,titleSub,rightTitle}) => {
    return (
        <View style={{
            paddingTop : 25,
            backgroundColor : Colors.PRIMARY_COLOR
        }}>
            <View style={{
                paddingVertical : 5,
                alignItems :'center',
                flexDirection : 'row'
            }}>

                <View style={[Styles.block , {flexDirection : 'row'}]}>
                    <View style={{
                        paddingHorizontal : 10
                    }}>
                        <Icon name='ios-arrow-back'
                        size = {27}
                        color ={Colors.TEXT_PRIMARY}
                        />
                    </View>

                    <View style={{
                        flex : 1
                    }}>
                        <Text style={{
                            color : Colors.TEXT_PRIMARY,
                            fontWeight : '500',
                            fontSize : 17
                        }}>
                            {prevName}
                        </Text>
                    </View>
                    
                </View>

                <View style={[Styles.block,{
                }]}>
                    <Text style={{
                        color : Colors.TEXT_PRIMARY,
                        fontWeight : '600',
                        fontSize : 16
                    }}>
                        {titleHead}
                    </Text>

                    <Text style={{
                        color : Colors.TEXT_PRIMARY,
                        fontWeight : '600',
                        fontSize : 12,
                        paddingVertical : 3
                    }}>
                        {titleSub}
                    </Text>
                </View>

                <View style={[Styles.block,{
                }]}>
                    <Text style={{
                        color : Colors.TEXT_PRIMARY,
                        fontSize : 16
                    }}>
                        {rightTitle}
                    </Text>
                </View>

                


                
            </View>
            
        </View>
    );
};


const Styles = StyleSheet.create({
    toolBarWrapper : {
        
    },
    block :{
        flex : 1,
        alignItems : 'center'
    }
})
export default ToolBar;