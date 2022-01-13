import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import FaqStackNav from './FaqStackNav';
import StackNav from './HomeStackNav';
import Faq from '../screens/Faq';

const RouteConfig = {
    Home: {
        screen: StackNav,
    },
    Faq: {
        screen: FaqStackNav,
    },
};

const MainNavigator = createDrawerNavigator(RouteConfig);

// C'est ce MainNavigator qui sera utilisé dans notre App.
export default createAppContainer(MainNavigator);
