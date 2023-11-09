import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/Entypo';


const DATA = [
  {
id: 1,
        name: "GARCIA, ROGEL",
        place: "Boyog Norte, Balilihan"
    },
    {
        id: 2,
        name: "PANDONIA, CHRISTINE",
        place: "Cortes, Tagbilaran"
    },
    {
        id: 3,
        name: "PAQUINOL, SHEN SHEN",
        place: "Boctol, Balilihan"
    },
    {
        id: 4,
        name: "BATULANON, RIZA",
        place: "Tagustusan, Balilihan"
    },
    {
        id: 5,
        name: "COMEGHOD, KIM",
        place: "Boctol, Balilihan"
    },
    {
        id: 6,
        name: "LANSANG, PEARL ANGELIE",
        place: "San Roque, Balilihan"
    },
    {
        id: 7,
        name: "QUIJANO, CLARENCE JHON",
        place: "Sto.Nino, Balilihan"
    },
    {
        id: 8,
        name: "LIPARTO, MONALIZA",
        place: "Boyog Proper, Balilihan"
    },
    {
        id: 9,
        name: "QUISQUIRIN, JHANNEL",
        place: "Del Rosario, Balilihan"
    },
    {
        id: 10,
        name: "REQUILLO, FLORA MAE",
        place: "Boyog Norte, Balilihan"
    },
    {
        id: 11,
        name: "LAGRIMAS, JHONMARK",
        place: "San Isidro, Catigbian"
    },
    {
        id: 12,
        name: "LOQUIAS, KARL PATRICK",
        place: "Tinago, Dauis"
    },
];

const getReciprocatedInitials = (name) => {
  const nameParts = name.split(' ');
  const initials = nameParts.map((part) => part.charAt(0)).join('');
  return initials.split('').reverse().join('').toUpperCase();
};

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <UserAvatar size={50} name={item.name} style={{ backgroundColor: '#0000FF' }}  />
    <Text style={[styles.title, {color: textColor}]}>{item.name}{'\n'}<Text style={{fontWeight:200}}>{item.place}</Text></Text>
    <Icon style={{ marginRight: 10, position: 'absolute', marginLeft: 350}} name="dots-three-horizontal" size={30} color="#000" />
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#00000' : '#fffff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 15

  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20

  },
  place: {

  }
});

export default App;