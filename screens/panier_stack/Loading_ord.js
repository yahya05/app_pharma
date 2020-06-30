import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { _auth, _database, _storage } from '../../config/config';
import { observer, inject } from "mobx-react"
import { observable, action } from 'mobx' 

@inject('store')
@observer
class Loading_ord extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            animating: true,
            key : this.props.store.key,
            avatarSource : this.props.store.avatarSource,
        }
    }

    closeActivityIndicator = () => {
     this.setState({
        animating: false
    })
    this.props.navigation.navigate('Home')
} 

    UNSAFE_componentWillMount = async () => {
        await _storage
          .ref()
          .child(this.state.key)
          .putFile(this.state.avatarSource)
        this.closeActivityIndicator()
    } 
     
    render() {
      
        const animating = this.state.animating
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={animating}
                    color='#00cc00'
                    size="large"
                    style={styles.activityIndicator} />
            </View>
        )
    }
}
export default Loading_ord
const styles = StyleSheet.create ({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 70
    },
    activityIndicator: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       height: 80
    }
 })