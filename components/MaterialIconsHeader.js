import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../styles/Colors';

const MaterialIconsHeader = (props) => (
    <HeaderButton IconComponent={MaterialIcons} iconSize={30} color={Colors.white} {...props} />
);

export default MaterialIconsHeader;
