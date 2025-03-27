import React, {useState} from 'react';
import {View, Text, FlatList, Pressable, StyleSheet, Image} from 'react-native';
import MenuList from '../components/MenuList';

const MENU_ITEMS = [
  {id: 'artists', title: '艺术家'},
  {id: 'albums', title: '专辑'},
];

const ARTISTS = [
  {id: '1', name: '周杰伦', image: 'https://via.placeholder.com/300'},
  {id: '2', name: '陈奕迅', image: 'https://via.placeholder.com/300'},
  {id: '3', name: '王菲', image: 'https://via.placeholder.com/300'},
  {id: '4', name: '邓紫棋', image: 'https://via.placeholder.com/300'},
  {id: '5', name: '周杰伦1', image: 'https://via.placeholder.com/300'},
  {id: '6', name: '陈奕迅1', image: 'https://via.placeholder.com/300'},
  {id: '7', name: '王菲1', image: 'https://via.placeholder.com/300'},
  {id: '8', name: '邓紫棋1', image: 'https://via.placeholder.com/300'},
];

const ALBUMS = [
  {id: '1', title: 'Jay', image: 'https://via.placeholder.com/300'},
  {id: '2', title: '黑色幽默', image: 'https://via.placeholder.com/300'},
  {id: '3', title: '红玫瑰', image: 'https://via.placeholder.com/300'},
  {id: '4', title: '光年之外', image: 'https://via.placeholder.com/300'},
  {id: '5', title: 'Jay1', image: 'https://via.placeholder.com/300'},
  {id: '6', title: '黑色幽默1', image: 'https://via.placeholder.com/300'},
  {id: '7', title: '红玫瑰1', image: 'https://via.placeholder.com/300'},
  {id: '8', title: '光年之外1', image: 'https://via.placeholder.com/300'},
];

export default function HomeScreen() {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const [focusedId, setFocusedId] = useState(null);

  const renderItem = ({item}) => (
    <Pressable
      android_ripple={{color: 'lightblue'}}
      style={styles.itemContainer}
      onPress={({nativeEvent: PressEvent}) => {}}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.name || item.title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <MenuList
        data={MENU_ITEMS}
        onPress={newMenuIndex => {
          setSelectedMenuIndex(newMenuIndex);
        }}
        selectedMenuIndex={selectedMenuIndex}
      />

      {/* 垂直滚动内容 */}
      <FlatList
        data={selectedMenuIndex === 0 ? ARTISTS : ALBUMS}
        keyExtractor={item => 's-' + item.id}
        renderItem={renderItem}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  itemContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'azure',
    marginTop: 10,
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  menuContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#282828',
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginRight: 20,
    borderRadius: 10,
  },
  menuItemActive: {
    backgroundColor: '#007AFF',
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#333',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    borderWidth: 2,
    borderColor: 'transparent', // 默认透明边框
  },
  cardFocused: {
    borderColor: '#FFD700', // 聚焦时高亮边框
    transform: [{scale: 1.05}], // 聚焦时略微放大
    shadowColor: '#FFD700',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
});
