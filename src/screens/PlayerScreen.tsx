import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export default function PlayerScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Player Screen</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
