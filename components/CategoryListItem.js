import React from 'react'
import SkiiImage from '../assets/ski.png'

// import thư viện cần dùng
import {
    Image,
    View,
    Text,
    StyleSheet,
} from 'react-native'


// Sử dụng function components
export default function  CategoryListItem(props) {
    return <View style = {styles.container}>
        <Text style={styles.title}>CategoryList</Text>
        <Image style={styles.categoryImage} source={SkiiImage} />
    </View>
}

// Khai báo stylesheet với 1 object
const styles = StyleSheet.create({
    // Tạo box shadow
    container: {
        alignItems: "center",
        padding: 16,
        borderRadius: 4,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        marginBottom: 16
    },

    // Tạo title
    title: {
        textTransform: "uppercase",
        marginBottom: 8,
        fontWeight: "800"
    },

    // Tạo 1 object chứa thuộc tính css
    categoryImage: {
        width: 64,
        height: 64,
        margin: 20
    }

});