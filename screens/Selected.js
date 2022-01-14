import React from 'react';
import { FlatList, Pressable, View, StyleSheet, Image, Text } from 'react-native';
import { globalStyles } from '../styles/AppStyles';
import { useSelector } from 'react-redux';
import NoData from '../components/NoData';
import Colors from '../styles/Colors';

const Selected = () => {
    const selectedUsers = useSelector((state) => state.users.selectedUsers);

    const ListItem = ({ items }) => {
        return (
            <View>
                {items.item.photos.map((photo) => {
                    return (
                        <View key={photo.id}>
                            <Pressable
                                onPress={() => {
                                    navigation.navigate('Photo', photo);
                                }}
                                style={(pressed) => [
                                    { backgroundColor: pressed ? Colors.clicked : Colors.white },
                                    styles.photoContainer,
                                ]}>
                                <Image
                                    style={globalStyles.profileImg}
                                    source={{ uri: photo.url }}
                                />
                                <Text style={styles.selectedPhotoText}>{photo.title}</Text>
                            </Pressable>
                        </View>
                    );
                })}
            </View>
        );
    };

    if (!selectedUsers.length) return <NoData>Aucune image à afficher</NoData>;

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={selectedUsers}
                renderItem={(selectedUsers) => {
                    return <ListItem items={selectedUsers} />;
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    photoContainer: {
        marginVertical: 9,
        alignItems: 'center',
        padding: 20,
    },
    selectedPhotoText: {
        fontSize: 19,
        fontFamily: 'InriaSans_300Light',
        margin: 9,
    },
});

export default Selected;
