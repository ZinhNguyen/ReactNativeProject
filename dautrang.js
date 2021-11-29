/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { View, Image} from 'react-native'
import style from './styles'

// const Dautrang = (props) =>{
//         return(
//             <View>
//                 <Image source={props.image} style={style.dautrang} />
//             </View>
//         )
    
// };
// export default Dautrang

class Dautrang extends Component{
    render(){
        return(
            <View>
                <Image source={this.props.image} style={style.dautrang} />
            </View>
        )
    }
}
export default Dautrang