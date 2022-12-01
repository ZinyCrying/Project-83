import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default class PostCard extends Component {
  render() {
    return (
        <View style = {styles.container}>
            <View style = {styles.cardContainer}>
                <View style = {styles.authorContainer}>
                    <View style = {styles.authorImageContainer}>
                         
                    </View>
                    <View style = {styles.authonNameContainer}>
                        <Text stle = {styles.authorNameText}>{this.props.post.author}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
  }

}