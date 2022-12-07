import React, {useEffect, useState} from "react";
import {View,StyleSheet,Text,SafeAreaView, FlatList} from "react-native";
import Article from "./Article";


const NewsScreen2 = (props) => {
    const [articles,setArticles] = useState([props.data]);
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles[0]}
                renderItem = {({item}) =>
                    <Article
                        urlToImage = {item.imageurl}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.newsId}
                        url={item.imagetoUrlLink}
                    />}
                    keyExtractor = {(item) => item.title}
            />
        </SafeAreaView>
    )
}

export default NewsScreen2;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#002333',
    }
})