import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationParams, NavigationRoute } from '../navigator/interfaces';

interface MenuItem {
    name: string;
    icon: string;
    component: string;
}

type NavigationProps = StackNavigationProp<NavigationParams>;

const DATA = [
    {
      name: 'Animation 101',
      icon: 'cube-outline',
      component: 'Animation101Screen',
    },

    {
        name: 'Animation 102',
        icon: 'cube-outline',
        component: 'Animation102Screen',
    },
];

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const renderMenuItem = ( item : MenuItem ) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate( NavigationRoute[item.component] )}
    >
        <View style={{ flexDirection: 'row' }}>
            <Icon
                name={ item.icon }
                color="gray"
                size={ 25 }
            />
            <Text style={{ marginLeft: 10, fontSize: 19 }}> { item.name } </Text>

            <View style={{ flex: 1 }} />
            <Icon
                name="chevron-forward-outline"
                color="gray"
                size={ 25 }
            />
        </View>
    </TouchableOpacity>
  );

  const renderListHeader = () => (
    <View>
        <Text style={ styles.title }> Menu Options </Text>
    </View>
  );

  const itemSeparator = () => (
    <View
        style={{
            borderBottomWidth: 1,
            opacity: 0.4,
            marginVertical: 8,
        }}
    />
  );

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => renderMenuItem( item )}
        keyExtractor={item => item.name}
        ListHeaderComponent={ renderListHeader }
        ItemSeparatorComponent={ itemSeparator }
      />
    </View>
  );
};

export default HomeScreen;
