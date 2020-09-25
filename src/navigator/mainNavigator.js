import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList110884Navigator from '../features/ArticleList110884/navigator';
import ArticleList110883Navigator from '../features/ArticleList110883/navigator';
import ArticleList110882Navigator from '../features/ArticleList110882/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList110884: { screen: ArticleList110884Navigator },
ArticleList110883: { screen: ArticleList110883Navigator },
ArticleList110882: { screen: ArticleList110882Navigator },

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
