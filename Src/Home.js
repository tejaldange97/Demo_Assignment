import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import {Component} from './Component';
export const Home = () => {
  const [game, setGame] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [sortingData, setSortingData] = useState(true);
  const [updatedData, setUpdatedData] = useState([]);

  const [data, setData] = useState([
    {
      title: 'LittleBigPlanet PS Vita',
      platform: 'PlayStation Vita',
      score: 9.0,
      genre: 'Platformer',
      editors_choice: 'Y',
    },
    {
      title: 'LittleBigPlanet PS Vita -- Marvel Super Hero Edition',
      platform: 'PlayStation Vita',
      score: 9.0,
      genre: 'Platformer',
      editors_choice: 'Y',
    },
    {
      title: 'Splice: Tree of Life',
      platform: 'iPad',
      score: 8.5,
      genre: 'Puzzle',
      editors_choice: 'N',
    },
    {
      title: 'NHL 13',
      platform: 'Xbox 360',
      score: 8.5,
      genre: 'Sports',
      editors_choice: 'N',
    },
    {
      title: 'NHL 13',
      platform: 'PlayStation 3',
      score: 8.5,
      genre: 'Sports',
      editors_choice: 'N',
    },
    {
      title: 'Total War Battles: Shogun',
      platform: 'Macintosh',
      score: 7.0,
      genre: 'Strategy',
      editors_choice: 'N',
    },
    {
      title: 'Double Dragon: Neon',
      platform: 'Xbox 360',
      score: 3.0,
      genre: 'Fighting',
      editors_choice: 'N',
    },
    {
      title: 'Guild Wars 2',
      platform: 'PC',
      score: 9.0,
      genre: 'RPG',
      editors_choice: 'Y',
    },
    {
      title: 'Double Dragon: Neon',
      platform: 'PlayStation 3',
      score: 3.0,
      genre: 'Fighting',
      editors_choice: 'N',
    },
    {
      title: 'Total War Battles: Shogun',
      platform: 'PC',
      score: 7.0,
      genre: 'Strategy',
      editors_choice: 'N',
    },
    {
      title: 'Tekken Tag Tournament 2',
      platform: 'PlayStation 3',
      score: 7.5,
      genre: 'Fighting',
      editors_choice: 'N',
    },
    {
      title: 'Tekken Tag Tournament 2',
      platform: 'Xbox 360',
      score: 7.5,
      genre: 'Fighting',
      editors_choice: 'N',
    },
    {
      title: 'Wild Blood',
      platform: 'iPhone',
      score: 7.0,
      genre: '',
      editors_choice: 'N',
    },
    {
      title: 'Mark of the Ninja',
      platform: 'Xbox 360',
      score: 9.0,
      genre: 'Action, Adventure',
      editors_choice: 'Y',
    },
    {
      title: 'Mark of the Ninja',
      platform: 'PC',
      score: 9.0,
      genre: 'Action, Adventure',
      editors_choice: 'Y',
    },
    {
      title: 'Home: A Unique Horror Adventure',
      platform: 'Macintosh',
      score: 6.5,
      genre: 'Adventure',
      editors_choice: 'N',
    },
    {
      title: 'Home: A Unique Horror Adventure',
      platform: 'PC',
      score: 6.5,
      genre: 'Adventure',
      editors_choice: 'N',
    },
    {
      title: 'Avengers Initiative',
      platform: 'iPhone',
      score: 8.0,
      genre: 'Action',
      editors_choice: 'N',
    },
    {
      title: 'Way of the Samurai 4',
      platform: 'PlayStation 3',
      score: 5.5,
      genre: 'Action, Adventure',
      editors_choice: 'N',
    },
    {
      title: "JoJo's Bizarre Adventure HD",
      platform: 'Xbox 360',
      score: 7.0,
      genre: 'Fighting',
      editors_choice: 'N',
    },
    {
      title: "JoJo's Bizarre Adventure HD",
      platform: 'PlayStation 3',
      score: 7.0,
      genre: 'Fighting',
      editors_choice: 'N',
    },
    {
      title: 'Mass Effect 3: Leviathan',
      platform: 'Xbox 360',
      score: 7.5,
      genre: 'RPG',
      editors_choice: 'N',
    },
    {
      title: 'Mass Effect 3: Leviathan',
      platform: 'PlayStation 3',
      score: 7.5,
      genre: 'RPG',
      editors_choice: 'N',
    },
    {
      title: 'Mass Effect 3: Leviathan',
      platform: 'PC',
      score: 7.5,
      genre: 'RPG',
      editors_choice: 'N',
    },
    {
      title: 'Dark Souls (Prepare to Die Edition)',
      platform: 'PC',
      score: 9.0,
      genre: 'Action, RPG',
      editors_choice: 'Y',
    },
    {
      title: 'Symphony',
      platform: 'PC',
      score: 7.0,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'Bastion',
      platform: 'iPad',
      score: 9.0,
      genre: 'Action, RPG',
      editors_choice: 'Y',
    },
    {
      title: "Tom Clancy's Ghost Recon Phantoms",
      platform: 'PC',
      score: 7.5,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'Thirty Flights of Loving',
      platform: 'PC',
      score: 8.0,
      genre: 'Adventure',
      editors_choice: 'N',
    },
    {
      title: 'Legasista',
      platform: 'PlayStation 3',
      score: 6.5,
      genre: 'Action, RPG',
      editors_choice: 'N',
    },
    {
      title: 'The Walking Dead: The Game -- Episode 3: Long Road Ahead',
      platform: 'Macintosh',
      score: 9.0,
      genre: 'Adventure',
      editors_choice: 'Y',
    },
    {
      title: 'World of Warcraft: Mists of Pandaria',
      platform: 'PC',
      score: 8.7,
      genre: 'RPG',
      editors_choice: 'Y',
    },
    {
      title: 'Hell Yeah! Wrath of the Dead Rabbit',
      platform: 'PlayStation 3',
      score: 4.9,
      genre: 'Platformer',
      editors_choice: 'N',
    },
    {
      title: 'Pokemon White Version 2',
      platform: 'Nintendo DS',
      score: 9.6,
      genre: 'RPG',
      editors_choice: 'Y',
    },
    {
      title: 'War of the Roses',
      platform: 'PC',
      score: 7.3,
      genre: 'Action',
      editors_choice: 'N',
    },
    {
      title: 'Pokemon Black Version 2',
      platform: 'Nintendo DS',
      score: 9.6,
      genre: 'RPG',
      editors_choice: 'Y',
    },
    {
      title: 'Drakerider',
      platform: 'iPhone',
      score: 6.5,
      genre: 'RPG',
      editors_choice: 'N',
    },
    {
      title: 'The Walking Dead: The Game -- Episode 3: Long Road Ahead',
      platform: 'Xbox 360',
      score: 9.0,
      genre: 'Adventure',
      editors_choice: 'Y',
    },
    {
      title: 'The Walking Dead: The Game -- Episode 3: Long Road Ahead',
      platform: 'PC',
      score: 9.0,
      genre: 'Adventure',
      editors_choice: 'Y',
    },
    {
      title: 'The Walking Dead: The Game -- Episode 3: Long Road Ahead',
      platform: 'PlayStation 3',
      score: 9.0,
      genre: 'Adventure',
      editors_choice: 'Y',
    },
    {
      title: 'Rock Band Blitz',
      platform: 'Xbox 360',
      score: 8.5,
      genre: 'Music',
      editors_choice: 'Y',
    },
    {
      title: 'Counter-Strike: Global Offensive',
      platform: 'Macintosh',
      score: 8.0,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'Worms Revolution',
      platform: 'PlayStation 3',
      score: 8.5,
      genre: 'Strategy',
      editors_choice: 'N',
    },
    {
      title: 'Worms Revolution',
      platform: 'PC',
      score: 8.5,
      genre: 'Strategy',
      editors_choice: 'N',
    },
    {
      title: 'Worms Revolution',
      platform: 'Xbox 360',
      score: 8.5,
      genre: 'Strategy',
      editors_choice: 'N',
    },
    {
      title: 'Bad Piggies',
      platform: 'iPhone',
      score: 9.2,
      genre: 'Action',
      editors_choice: 'Y',
    },
    {
      title: 'Resident Evil 6',
      platform: 'PlayStation 3',
      score: 7.9,
      genre: 'Action, Adventure',
      editors_choice: 'N',
    },
    {
      title: 'Resident Evil 6',
      platform: 'Xbox 360',
      score: 7.9,
      genre: 'Action, Adventure',
      editors_choice: 'N',
    },
    {
      title: "Shad'O",
      platform: 'PC',
      score: 7.0,
      genre: 'Adventure',
      editors_choice: 'N',
    },
    {
      title: "Demon's Score",
      platform: 'iPhone',
      score: 6.9,
      genre: 'Action',
      editors_choice: 'N',
    },
    {
      title: 'NBA 2K13',
      platform: 'Xbox 360',
      score: 9.1,
      genre: 'Sports',
      editors_choice: 'Y',
    },
    {
      title: 'Counter-Strike: Global Offensive',
      platform: 'PC',
      score: 8.0,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'The World Ends with You: Solo Remix',
      platform: 'iPad',
      score: 9.5,
      genre: 'RPG',
      editors_choice: 'Y',
    },
    {
      title: 'Counter-Strike: Global Offensive',
      platform: 'PlayStation 3',
      score: 8.0,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'The World Ends with You: Solo Remix',
      platform: 'iPhone',
      score: 9.5,
      genre: 'RPG',
      editors_choice: 'Y',
    },
    {
      title: 'Counter-Strike: Global Offensive',
      platform: 'Xbox 360',
      score: 8.0,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'Madden NFL 13',
      platform: 'PlayStation Vita',
      score: 6.0,
      genre: 'Sports',
      editors_choice: 'N',
    },
    {
      title: 'Madden NFL 13',
      platform: 'PlayStation 3',
      score: 9.0,
      genre: 'Sports',
      editors_choice: 'Y',
    },
    {
      title: 'Madden NFL 13',
      platform: 'Xbox 360',
      score: 9.0,
      genre: 'Sports',
      editors_choice: 'Y',
    },
    {
      title: 'Hoodwink',
      platform: 'PC',
      score: 2.5,
      genre: 'Adventure',
      editors_choice: 'N',
    },
    {
      title: 'NBA 2K13',
      platform: 'PlayStation 3',
      score: 9.1,
      genre: 'Sports',
      editors_choice: 'Y',
    },
    {
      title: 'NBA 2K13',
      platform: 'PC',
      score: 9.1,
      genre: 'Sports',
      editors_choice: 'Y',
    },
    {
      title: 'Lili: Child of Geos',
      platform: 'iPhone',
      score: 7.0,
      genre: 'Adventure',
      editors_choice: 'N',
    },
    {
      title: 'Marvel vs. Capcom Origins',
      platform: 'Xbox 360',
      score: 8.2,
      genre: 'Fighting',
      editors_choice: 'N',
    },
    {
      title: 'Marvel vs. Capcom Origins',
      platform: 'PlayStation 3',
      score: 8.2,
      genre: 'Fighting',
      editors_choice: 'N',
    },
    {
      title: 'Dead or Alive 5',
      platform: 'PlayStation 3',
      score: 8.8,
      genre: 'Fighting',
      editors_choice: 'N',
    },
    {
      title: 'Dead or Alive 5',
      platform: 'Xbox 360',
      score: 8.8,
      genre: 'Fighting',
      editors_choice: 'N',
    },
    {
      title: 'Medal of Honor Warfighter',
      platform: 'PC',
      score: 4.0,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'Professor Layton and the Miracle Mask',
      platform: 'Nintendo 3DS',
      score: 8.7,
      genre: 'Adventure',
      editors_choice: 'Y',
    },
    {
      title: 'Hotline Miami',
      platform: 'PC',
      score: 8.8,
      genre: 'Action',
      editors_choice: 'Y',
    },
    {
      title: "Edna & Harvey: Harvey's New Eyes",
      platform: 'PC',
      score: 6.0,
      genre: 'Adventure',
      editors_choice: 'N',
    },
    {
      title: 'Medal of Honor Warfighter',
      platform: 'PlayStation 3',
      score: 4.0,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'Medal of Honor Warfighter',
      platform: 'Xbox 360',
      score: 4.0,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'Transformers: Fall of Cybertron',
      platform: 'Xbox 360',
      score: 8.5,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'Transformers: Fall of Cybertron',
      platform: 'PlayStation 3',
      score: 8.5,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'Hero Academy',
      platform: 'PC',
      score: 9.0,
      genre: 'Board',
      editors_choice: 'Y',
    },
    {
      title: 'Hero Academy',
      platform: 'iPhone',
      score: 9.0,
      genre: 'Strategy',
      editors_choice: 'Y',
    },
    {
      title: 'Puzzle Craft',
      platform: 'iPhone',
      score: 9.0,
      genre: 'Puzzle',
      editors_choice: 'Y',
    },
    {
      title: 'Realms Of Ancient War',
      platform: 'Xbox 360',
      score: 5.5,
      genre: 'Action',
      editors_choice: 'N',
    },
    {
      title: 'Realms Of Ancient War',
      platform: 'PlayStation 3',
      score: 5.5,
      genre: 'Action',
      editors_choice: 'N',
    },
    {
      title: 'Anomaly: Warzone Earth',
      platform: 'PlayStation 3',
      score: 8.2,
      genre: 'Action',
      editors_choice: 'N',
    },
    {
      title: 'Darksiders II',
      platform: 'PC',
      score: 7.5,
      genre: 'Action',
      editors_choice: 'N',
    },
    {
      title: 'Left 4 Dead 2: Cold Stream',
      platform: 'Macintosh',
      score: 7.0,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'Left 4 Dead 2: Cold Stream',
      platform: 'PC',
      score: 7.0,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'Puzzle Craft',
      platform: 'Android',
      score: 9.0,
      genre: 'Puzzle',
      editors_choice: 'Y',
    },
    {
      title: 'Left 4 Dead 2: Cold Stream',
      platform: 'Xbox 360',
      score: 7.0,
      genre: 'Shooter',
      editors_choice: 'N',
    },
    {
      title: 'Horn',
      platform: 'iPhone',
      score: 9.0,
      genre: 'Action, Adventure',
      editors_choice: 'Y',
    },
    {
      title: 'Forza Horizon',
      platform: 'Xbox 360',
      score: 9.0,
      genre: 'Racing',
      editors_choice: 'Y',
    },
    {
      title: 'FIFA Soccer 13',
      platform: 'PlayStation Vita',
      score: 4.0,
      genre: 'Sports',
      editors_choice: 'N',
    },
    {
      title: 'Mugen Souls',
      platform: 'PlayStation 3',
      score: 3.9,
      genre: 'Strategy, RPG',
      editors_choice: 'N',
    },
    {
      title: 'Crazy Taxi',
      platform: 'iPhone',
      score: 7.1,
      genre: 'Racing, Action',
      editors_choice: 'N',
    },
    {
      title: "New Little King's Story",
      platform: 'PlayStation Vita',
      score: 5.8,
      genre: 'RPG',
      editors_choice: 'N',
    },
    {
      title: 'Fable: The Journey',
      platform: 'Xbox 360',
      score: 7.2,
      genre: 'Action, RPG',
      editors_choice: 'N',
    },
    {
      title: 'The Lord of the Rings Online: Riders of Rohan',
      platform: 'PC',
      score: 8.3,
      genre: 'RPG',
      editors_choice: 'N',
    },
    {
      title: 'Doom 3: BFG Edition',
      platform: 'Xbox 360',
      score: 7.6,
      genre: 'RPG',
      editors_choice: 'N',
    },
    {
      title: 'Rugby League Live 2',
      platform: 'Xbox 360',
      score: 6.0,
      genre: 'Sports',
      editors_choice: 'N',
    },
    {
      title: 'Rugby League Live 2',
      platform: 'PlayStation 3',
      score: 6.0,
      genre: 'Sports',
      editors_choice: 'N',
    },
    {
      title: 'Doom 3: BFG Edition',
      platform: 'PlayStation 3',
      score: 7.6,
      genre: 'RPG',
      editors_choice: 'N',
    },
    {
      title: 'Punch Quest',
      platform: 'iPhone',
      score: 9.3,
      genre: 'Action',
      editors_choice: 'Y',
    },
  ]);

  const search = text => {
    console.log(data);
    let newData = [];
    for (let i = 0; i < data.length; i++) {
      let title = data[i].title.toLocaleLowerCase();
      if (title.includes(text.toLocaleLowerCase())) {
        newData.push(data[i]);
      }
    }
    setSearchData(newData);
  };

  const FilterData = val => {
    setSortingData(false);
    const filterdata = data;
    filterdata.sort((a, b) =>
      a.platform.toLowerCase() > b.platform.toLowerCase() ? 1 : -1,
    );

    setUpdatedData(filterdata);
  };
  return (
    <>
      <View style={styles.mainView}>
        <TextInput
          style={styles.textInput}
          placeholder={'Search Game'}
          onChangeText={text => {
            setGame(text), search(text);
          }}
        />

        <TouchableOpacity onPress={() => FilterData()} style={styles.imgView}>
          <Image style={styles.img} source={require('./filter.png')} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.view}>
        {sortingData ? (
          game.length >= 1 ? (
            searchData.map((item, index) => {
              return (
                <View style={styles.rootView}>
                  <Component name={'Title :-'} value={item.title} />
                  <Component name={'platform :-'} value={item.platform} />
                  <Component name={'score :-'} value={item.score} />
                  <Component name={'genre :-'} value={item.genre} />
                  <Component
                    name={'editors_choice :-'}
                    value={item.editors_choice}
                  />
                </View>
              );
            })
          ) : (
            data.map((item, index) => {
              return (
                <View style={styles.rootView}>
                  <Component name={'Title :-'} value={item.title} />
                  <Component name={'platform :-'} value={item.platform} />
                  <Component name={'score :-'} value={item.score} />
                  <Component name={'genre :-'} value={item.genre} />
                  <Component
                    name={'editors_choice :-'}
                    value={item.editors_choice}
                  />
                </View>
              );
            })
          )
        ) : (
          <View>
            <Text style={styles.title}>
              Your Data is filter by platform name
            </Text>
            {updatedData.map((item, index) => {
              return (
                <View style={styles.rootView}>
                  <Component name={'Title :-'} value={item.title} />
                  <Component name={'platform :-'} value={item.platform} />
                  <Component name={'score :-'} value={item.score} />
                  <Component name={'genre :-'} value={item.genre} />
                  <Component
                    name={'editors_choice :-'}
                    value={item.editors_choice}
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  rootView: {
    alignSelf: 'center',
    width: '95%',
    height: '25%',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginTop: '5%',
    paddingVertical: 20,
    flex: 1,
  },
  view: {elevation: 5},
  textInput: {
    alignSelf: 'center',
    borderRadius: 25,
    borderWidth: 0.5,
    width: '75%',
    marginTop: '5%',
    paddingHorizontal: 20,
    marginLeft: '3%',
    backgroundColor: '#fff',
    //height: '55%',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 20,
  },
  imgView: {
    paddingLeft: 20,
    width: '50%',
    marginTop: '5%',
    alignSelf: 'center',
  },
  img: {
    width: '20%',
    height: '45%',
  },
  mainView: {
    width: '100%',
    height: '12%',
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
});
