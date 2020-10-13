import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile3141002Navigator from '../features/UserProfile3141002/navigator';
import ArticleList5141000Navigator from '../features/ArticleList5141000/navigator';
import Messaging7140998Navigator from '../features/Messaging7140998/navigator';
import Settings8140997Navigator from '../features/Settings8140997/navigator';
import BlankScreen1140996Navigator from '../features/BlankScreen1140996/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile3141002: { screen: UserProfile3141002Navigator },
ArticleList5141000: { screen: ArticleList5141000Navigator },
Messaging7140998: { screen: Messaging7140998Navigator },
Settings8140997: { screen: Settings8140997Navigator },
BlankScreen1140996: { screen: BlankScreen1140996Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
