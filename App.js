import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

let url = '';

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Chicago">
        <Drawer.Screen name="Chicago" component={ArtInstituteOfChicagoScreen} />
        <Drawer.Screen name="MagnificentMile" component={MagnificentMileScreen} />
        <Drawer.Screen name="NavyPier" component={NavyPierScreen} />
        <Drawer.Screen name="WaterTower" component={WaterTowerScreen} />
        <Drawer.Screen name="WillisTower" component={WillisTowerScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  ); 
}
  

 function handleButtonPress(url){
    WebBrowser.openBrowserAsync(url);
}

function ArtInstituteOfChicagoScreen({ navigation }) {
  url = 'https://www.artic.edu/';
  
  return (
    <View>
      <Image 
      styles={styles.image}
      source={require('./assets/art.png')}
      />
      <Button  info style={styles.button} type = 'internal link' onPress={handleButtonPress(url)}>
        More Information
      </Button>
    </View>
  );
}

function MagnificentMileScreen({ navigation }) {
  url = 'https://www.themagnificentmile.com/';
  return (
    <View>
      <Image 
      styles={styles.image}
      source={require('./assets/mile.png')}
      />
      <Button info style={styles.button} type='internal link' onPress={handleButtonPress(url)}>
        More Information
      </Button>
    </View>
  );
}

function NavyPierScreen({ navigation }) {
  url = 'https://navypier.org/';
  return (
    <View>
      <Image 
      styles={styles.image}
      source={require('./assets/pier.png')}
      />
      <Button info style={styles.button} type='internal link' onPress={handleButtonPress(url)}>
        More Information
      </Button>
    </View>
  );
}

function WaterTowerScreen({ navigation }) {
  url = 'https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html';
  return (
    <View>
      <Image 
      styles={styles.image}
      source={require('./assets/water.png')}
      />
      <Button info style={styles.button} type='internal link' onPress={handleButtonPress(url)}>
        More Information
      </Button>
    </View>
  );
}

function WillisTowerScreen({ navigation }) {
  url = 'https://www.willistower.com/';
  return (
    <View>
      <Image 
      styles={styles.image}
      source={require('./assets/willis.png')}
      />
      <Button info style={styles.button} type='internal link' onPress={handleButtonPress(url)}>
        More Information
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 240,
    height: 360,

  },
  buttonList: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    backgroundColor: '#c0392b',
    borderRadius: 3,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
