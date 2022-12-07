import * as React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import SomeComponent from '../../Dummy/SomeComponent '
import IPhone1313Pro2 from '../../Dummy/IPhone1313Pro2'
import NewsScreen from '../../components/NewsScreen'
import NewsScreen2 from '../../components/NewsScreen2';

export default function HomeScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const newsData = [{
        "newsId": "1",
        "publishedDate": "2022-08-13T06:31:34.000+00:00",
        "imageurl": "https://images.moneycontrol.com/static-mcnews/2021/06/Morning-Scan-14-770x433.jpg",
        "title": "Morning Scan: All the big stories to get you started for the day - Moneycontrol",
        "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle.",
        "imagetoUrlLink": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
        "author": "Moneycontrol News",
        "newsSourceName": "Moneycontrol",
        "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle"
    },
    {
        "newsId": "2",
        "publishedDate": "2022-08-13T06:31:34.000+00:00",
        "imageurl": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80",
        "title": "Morning Scan: All the big stories to get you started for the day - Moneycontrol",
        "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle.",
        "imagetoUrlLink": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
        "author": "Moneycontrol News",
        "newsSourceName": "Moneycontrol",
        "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle"
    },
    {
        "newsId": "2",
        "publishedDate": "2022-08-13T06:31:34.000+00:00",
        "imageurl": "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "title": "Morning Scan: All the big stories to get you started for the day - Moneycontrol",
        "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle.",
        "imagetoUrlLink": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
        "author": "Moneycontrol News",
        "newsSourceName": "Moneycontrol",
        "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle"
    },
    {
        "newsId": "3",
        "publishedDate": "2022-08-13T06:31:34.000+00:00",
        "imageurl": "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
        "title": "Morning Scan: All the big stories to get you started for the day - Moneycontrol",
        "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle.",
        "imagetoUrlLink": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
        "author": "Moneycontrol News",
        "newsSourceName": "Moneycontrol",
        "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle"
    },
    {
        "newsId": "4",
        "publishedDate": "2022-08-13T06:31:34.000+00:00",
        "imageurl": "https://images.moneycontrol.com/static-mcnews/2021/06/Morning-Scan-14-770x433.jpg",
        "title": "Morning Scan: All the big stories to get you started for the day - Moneycontrol",
        "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle.",
        "imagetoUrlLink": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
        "author": "Moneycontrol News",
        "newsSourceName": "Moneycontrol",
        "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle"
    },
    {
        "newsId": "5",
        "publishedDate": "2022-08-13T06:31:34.000+00:00",
        "imageurl": "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg",
        "title": "Morning Scan: All the big stories to get you started for the day - Moneycontrol",
        "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle.",
        "imagetoUrlLink": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
        "author": "Moneycontrol News",
        "newsSourceName": "Moneycontrol",
        "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle"
    },
    {
        "newsId": "6",
        "publishedDate": "2022-08-13T06:31:34.000+00:00",
        "imageurl": "https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        "title": "Morning Scan: All the big stories to get you started for the day - Moneycontrol",
        "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle.",
        "imagetoUrlLink": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
        "author": "Moneycontrol News",
        "newsSourceName": "Moneycontrol",
        "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle"
    },
    {
        "newsId": "7",
        "publishedDate": "2022-08-13T06:31:34.000+00:00",
        "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQkT5pv_9w_YsKcwVQjS_hNXxxSR-DYNFe6Q&usqp=CAU",
        "title": "Morning Scan: All the big stories to get you started for the day - Moneycontrol",
        "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle.",
        "imagetoUrlLink": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
        "author": "Moneycontrol News",
        "newsSourceName": "Moneycontrol",
        "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle"
    },
    {
        "newsId": "8",
        "publishedDate": "2022-08-13T06:31:34.000+00:00",
        "imageurl": "https://images.moneycontrol.com/static-mcnews/2021/06/Morning-Scan-14-770x433.jpg",
        "title": "Morning Scan: All the big stories to get you started for the day - Moneycontrol",
        "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle.",
        "imagetoUrlLink": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
        "author": "Moneycontrol News",
        "newsSourceName": "Moneycontrol",
        "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle"
    },
    {
        "newsId": "9",
        "publishedDate": "2022-08-09T11:08:56.000+00:00",
        "imageurl": "https://www.cartoq.com/wp-content/uploads/2022/08/maruti-baleno-based-ytb-crossover-render-featured.jpg",
        "title": "Maruti Baleno Cross (YTB): What the compact SUV will look like [Video] - CarToq.com",
        "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle.",
        "imagetoUrlLink": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
        "author": "Jayprashanth Mohanram",
        "newsSourceName": "CarToq.com",
        "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle"
    },
    {
        "newsId": "10",
        "publishedDate": "2022-08-13T06:31:34.000+00:00",
        "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQkT5pv_9w_YsKcwVQjS_hNXxxSR-DYNFe6Q&usqp=CAU",
        "title": "Morning Scan: All the big stories to get you started for the day - Moneycontrol",
        "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle.",
        "imagetoUrlLink": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
        "author": "Moneycontrol News",
        "newsSourceName": "Moneycontrol",
        "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle"
    },{
        "newsId": "11",
        "publishedDate": "2022-08-13T06:31:34.000+00:00",
        "imageurl": "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg",
        "title": "Morning Scan: All the big stories to get you started for the day - Moneycontrol",
        "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle.",
        "imagetoUrlLink": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
        "author": "Moneycontrol News",
        "newsSourceName": "Moneycontrol",
        "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle"
    },
    {
        "newsId": "12",
        "publishedDate": "2022-08-13T06:31:34.000+00:00",
        "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQkT5pv_9w_YsKcwVQjS_hNXxxSR-DYNFe6Q&usqp=CAU",
        "title": "Morning Scan: All the big stories to get you started for the day - Moneycontrol",
        "description": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle.",
        "imagetoUrlLink": "https://www.moneycontrol.com/news/trends/current-affairs-trends/morning-scan-all-the-big-stories-to-get-you-started-for-the-day-276-8983901.html",
        "author": "Moneycontrol News",
        "newsSourceName": "Moneycontrol",
        "content": "Maruti Suzuki is putting together a sub-4 meter crossover on the Baleno platform. The  crossover is slated for launch next year, and Maruti Suzuki has already begun road testing the new vehicle"
    },
    ]
    const [data, setData] = useState([newsData]);

    const getNews = async () => {
        try {
            const response = await fetch('http://10.0.2.2:9191/NewsController/getListOfArticles');
            const json = await response.json();
            console.log(json.result);
            setData(json.result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        getNews();
    }, []);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#002333' }}>
                {/* <NewsScreen  data={newsData}/> */}
            {/* <Text style={{ color: 'white' }}>Name  :         Author</Text>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text style={{ color: 'white' }}>{item.newsId}: {item.newsSourceName}
                            <View><Image
                                style={styles.logo}
                                source={{
                                    uri: item.imageurl,
                                }}
                            /></View> </Text>

                    )}
                />

            )} */}
            {/* <IPhone1313Pro2/> */}
            {/* <SomeComponent
                data={data[0]} /> */}
                <NewsScreen2 data={newsData}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});