import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import Colors from '../styles/Colors';
import { globalStyles } from '../styles/AppStyles';

const PressableItems = ({ item, handleNavigate }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                { backgroundColor: pressed ? Colors.clicked : Colors.white },
                globalStyles.profileItem,
            ]}
            onPress={handleNavigate}>
            {/* Name  */}
            <Text style={globalStyles.titleText}>{item.name}</Text>
            {/* Image */}
            <Image source={{ uri: item.img }} style={globalStyles.profileImg} />
            {/* Infos */}
            <View style={globalStyles.infoContainer}>
                <Text style={globalStyles.infos}>{item.country}</Text>
                <Text style={globalStyles.infos}>{item.photos.length}</Text>
            </View>
        </Pressable>
    );
};

export default PressableItems;
