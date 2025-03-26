import {Button, Text, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';

export default function PlayerScreen() {
  const handlePlay = async () => {
    await TrackPlayer.add({
      id: 'track1',
      url: 'https://ra-sycdn.kuwo.cn/b07d1a4e2f9253bcae57edc2efef24ba/67e40300/resource/n1/2011/06/25/3348130080.mp3', // 示例URL
      title: 'Sample Audio',
      artist: 'SoundHelix',
    });
    await TrackPlayer.play();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Player Screen</Text>
      <Button title="Play" onPress={() => handlePlay()} />
    </View>
  );
}
