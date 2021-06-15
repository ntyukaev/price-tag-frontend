import * as React from 'react';
import { View, Text } from 'react-native';

import InfoPanel from './InfoPanel';

export default function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <InfoPanel/>
      </View>
    );
}