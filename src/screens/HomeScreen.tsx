import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Player"
        onPress={() => navigation.navigate('Player')}
      />
    </View>
  );
}
