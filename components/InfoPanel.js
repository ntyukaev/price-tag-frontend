import React, {useEffect, useState, useRef} from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { render } from 'react-dom';

function InfoPanel({image}) {

    const [data, setData] = useState(null);
    let isRendered = useRef(false);
    useEffect(() => {
        async function fetchData() {
            let formData = new FormData();
            formData.append('image', { uri: image.uri, name: 'profile_photo.jpg', type: 'image/jpg' });

            await fetch('http://192.168.1.68:8000', {
                method: 'POST',
                body: formData
            })
                .then((response) => {
                    return response.json()
                })
                .then((responseJson) => {
                    if (isRendered){
                        setData(responseJson);
                    }
                })
                .catch((error) => {
                    // console.error(error);
                    alert(error)
                });

        }
        fetchData();
        return () => {
            isRendered = false;
        };
    }, []);


    const data2 = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
    const renderChart = () => {
        if(data) {
            console.log(data);
            return (
                <AreaChart
                    style={{ height: 200 }}
                    data={data.data}
                    contentInset={{ top: 30, bottom: 30 }}
                    curve={shape.curveNatural}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                >
                    <Grid />
                </AreaChart>
            )
        }
        return (
            <View>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        )
    }

    
    return (
        <View>
            <Text style={{fontSize:20, fontWeight:'bold', marginBottom:10, marginTop:50, textAlign: 'center'}}>Image:</Text>
            <Image source={{ uri: image.uri }} style={{ width: 500, height: 500 }} />
            <Text style={{fontSize:20, fontWeight:'bold', marginBottom:10, textAlign: 'center'}}>Price Dynamics:</Text>
            {renderChart()}
        </View>
    );
}

function mapStateToProps(state) {
    return {
        image: state.image
    }
}

export default connect(mapStateToProps)(InfoPanel);
