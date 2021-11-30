import React, { useState, useEffect } from "react";
import {
  Image,
  Modal,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./styles";

export default function Busca({ navigation }) {
  [search, setSearch] = useState(null);
  [pokemon, setPokemon] = useState(null);
  [number, setNumber] = useState(null);
  [image, setImage] = useState(null);
  [peso, setPeso] = useState(null);
  [altura, setAltura] = useState(null);
  [abiliity, setAbiliity] = useState(null);
  [type1, setType1] = useState(null);
  [move1, setMove1] = useState(null);
  [move2, setMove2] = useState(null);
  [hp, setHp] = useState(null);
  [atk, setAtk] = useState(null);
  [def, setDef] = useState(null);
  [satk, setSatk] = useState(null);
  [sdef, setSdef] = useState(null);
  [spd, setSpd] = useState(null);

  async function searchPokemons() {
    let reqs = await fetch("https://pokeapi.co/api/v2/pokemon/" + search, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let ress = await reqs.json();
    setPokemon(ress.name);
    setImage(ress.sprites.other.home.front_default);
    setPeso(ress.weight);
    setAltura(ress.height);
    setAbiliity(ress.abilities[0].ability.name);
    setNumber(ress.game_indices[3].game_index);
    setType1(ress.types[0].type.name);
    setMove1(ress.moves[0].move.name);
    setMove2(ress.moves[1].move.name);
    setHp(ress.stats[0].base_stat);
    setAtk(ress.stats[1].base_stat);
    setDef(ress.stats[2].base_stat);
    setSatk(ress.stats[3].base_stat);
    setSdef(ress.stats[4].base_stat);
    setSpd(ress.stats[5].base_stat);
    Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View style={styles.containerimg}>
          <Image
            style={styles.logo}
            source={require("../../assest/logo.png")}
          />
        </View>

        <View style={styles.containerBusca}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setSearch(text)}
            value={search}
            placeholder="Buscar pokemons..."
          />

          <TouchableOpacity onPress={searchPokemons} style={styles.button}>
            <Text style={styles.button__text}>Buscar</Text>
          </TouchableOpacity>
        </View>

        {image && (
          <View style={styles.card}>
            <View style={styles.nameNumber}>
              <Text style={styles.nameText}>{pokemon}</Text>
              <Text>#{number}</Text>
            </View>
            <View>
              <Image source={require("../../../src/assest/Pokeball.png")} />
              <Image
                style={{ width: 200, height: 150 }}
                source={{
                  uri: image,
                }}
              />
              <View>
                <Text>{type1}</Text>
              </View>
              <Text>Sobre</Text>
              <View>
                <View>
                  <Text>{peso / 10} Kg</Text>
                  <Text>Peso</Text>
                </View>
                <View>
                  <Text>{altura / 10} m</Text>
                  <Text>Altura</Text>
                </View>
                <View>
                  <Text>{move1}</Text>
                  <Text>{move2}</Text>
                  <Text>Habilidades</Text>
                </View>
              </View>
              <View>
                <Text>Base Stats</Text>
                <Text>HP</Text>
                <Text>{hp}</Text>
                <Text>ATK</Text>
                <Text>{atk}</Text>
                <Text>DEF</Text>
                <Text>{def}</Text>
                <Text>SATK</Text>
                <Text>{satk}</Text>
                <Text>SDEF</Text>
                <Text>{sdef}</Text>
                <Text>SPD</Text>
                <Text>{spd}</Text>
              </View>
            </View>
            <View style={styles.texto}></View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
