import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import Styles from './final_style'


export class final_signin extends Component {
    render() {
        return (
            <View style={Styles.loginContainer}>
                <View>
                    <Text style={Styles.loginTitle}>Đăng Ký </Text>                  
                </View>
                <View style={Styles.line}/>
                <View>
                    <TextInput
                        placeholder="Nhập Họ tên"
                        style={Styles.login}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Nhập số điện thoại"
                        style={Styles.login}
                        keyboardType="numeric"
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Nhập Email"
                        style={Styles.login}
                        keyboardType="email-address"
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Nhập mật khẩu"
                        style={Styles.login}
                        secureTextEntry={true}  
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Nhập Ngày sinh"
                        style={Styles.login}
                    />
                </View>
                <TouchableOpacity
                style={Styles.loginButton}
                >
                    <Text style={Styles.loginText}>Đăng Ký</Text>
                </TouchableOpacity>
                <View style={Styles.loginCenter}>
                    <Text>Khi đăng ký là bạn chấp nhận </Text>
                    <TouchableOpacity>
                        <Text style={Styles.loginNow}> điều khoản sử dụng</Text>
                    </TouchableOpacity>
                </View>         
            </View>
        )
    }
}

export default final_signin
