import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings8140997Navigator from '../features/Settings8140997/navigator';
import BlankScreen1140996Navigator from '../features/BlankScreen1140996/navigator';
import BlankScreen0140994Navigator from '../features/BlankScreen0140994/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings8140997: { screen: Settings8140997Navigator },
BlankScreen1140996: { screen: BlankScreen1140996Navigator },
BlankScreen0140994: { screen: BlankScreen0140994Navigator },

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
