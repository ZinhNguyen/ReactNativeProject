import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import Styles from './final_style'


export class final_login extends Component {
    render() {
        return (
            <View style={Styles.loginContainer}>
                <View>
                    <Text style={Styles.loginTitle}>Đăng Nhập </Text>                  
                </View>
                <View style={Styles.line}/>
                <View>
                    <TextInput
                        placeholder="Nhập Email/ Số điện thoại"
                        style={Styles.login}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Nhập mật khẩu"
                        style={Styles.login}
                        secureTextEntry={true}
                        
                    />
                </View>
                <TouchableOpacity style={Styles.loginRight}>
                    <Text style={Styles.loginFogotText}>Quên mật khẩu?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={Styles.loginButton}
                >
                    <Text style={Styles.loginText}>Đăng Nhập</Text>
                </TouchableOpacity>
                <View style={Styles.loginCenter}>
                    <Text>Bạn chưa có tài khoản? </Text>
                    <TouchableOpacity>
                        <Text style={Styles.loginNow}> Đăng ký ngay</Text>
                    </TouchableOpacity>
                </View>  
                <View style={[Styles.loginCenter,{marginTop:30}]}>
                    <Text>Hoặc đăng nhập với</Text>
                </View>
                <View style={Styles.loginIconContainer}>
                    <TouchableOpacity>
                        <Image source={require('./assets/facebook.png')} style={Styles.loginIcon} />
                    </TouchableOpacity>   
                    <TouchableOpacity >
                        <Image source={require('./assets/google.png')} style={Styles.loginIcon} />
                    </TouchableOpacity>  
                    <TouchableOpacity >
                        <Image source={require('./assets/apple.png')} style={Styles.loginIcon} />
                    </TouchableOpacity>     
                </View>           
            </View>
        )
    }
}

export default final_login
