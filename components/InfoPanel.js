import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

function InfoPanel({image}) {

    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
    return (
        <View>
            <Image source={{ uri: image.uri }} style={{ width: 500, height: 500 }} />
            <AreaChart
                style={{ height: 200 }}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid />
            </AreaChart>
        </View>
    );
}

function mapStateToProps(state) {
    return {
        image: state.image
    }
}

export default connect(mapStateToProps)(InfoPanel);
