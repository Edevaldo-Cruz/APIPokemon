import React, { useState } from "react";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from "react-native";
import { ProgressBar } from "react-native-paper";

import { styles } from "./styles";

export default function Busca() {
  [search, setSearch] = useState(null);
  [pokemon, setPokemon] = useState(null);
  [number, setNumber] = useState(null);
  [imagem, setImagem] = useState(null);
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
  [type2, setType2] = useState(null);

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
    setImagem(ress.sprites.other.home.front_default);
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
    setType2(ress.types[1].type.name);
    Keyboard.dismiss();
  }

  return (
    <ScrollView>
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

          {imagem && (
            <View style={styles.card}>
              <View style={styles.nameNumber}>
                <Text style={styles.nameText}>
                  {pokemon[0].toUpperCase() + pokemon.substr(1)}
                </Text>
                <Text style={styles.number}>#{("000" + number).slice(-3)}</Text>
              </View>
              <View>
                <View style={styles.containerPokeball}>
                  <Image
                    style={styles.pokeball}
                    source={require("../../../src/assest/Pokeball.png")}
                  />
                </View>
                <View style={styles.containerPokemon}>
                  <Image
                    style={styles.imgPokemon}
                    source={{
                      uri: imagem,
                    }}
                  />
                </View>
                <View style={styles.containerAbout}>
                  <View style={styles.type}>
                    <Text style={styles.TextType}>{type1}</Text>
                    {type2 && <Text style={styles.TextType}>{type2}</Text>}
                  </View>
                  <Text style={styles.title}>Sobre</Text>
                  <View style={styles.containerInfo}>
                    <View style={styles.info}>
                      <View style={styles.row}>
                        <Image
                          style={styles.iconWeigth}
                          source={require("../../assest/weigth.png")}
                        />
                        <Text style={styles.textAbout}>{peso / 10} Kg</Text>
                      </View>
                      <Text style={styles.text}>Peso</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.info}>
                      <View style={styles.row}>
                        <Image
                          style={styles.iconHeight}
                          source={require("../../assest/Height.png")}
                        />
                        <Text style={styles.textAbout}>{altura / 10} m</Text>
                      </View>
                      <Text style={styles.text}>Altura</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.info}>
                      <Text style={styles.move}>{move1}</Text>
                      <Text style={styles.move}>{move2}</Text>
                      <Text style={styles.text}>Habilidades</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.title}>Base Stats</Text>

                    <View style={styles.containerStats}>
                      <Text style={styles.textStats}>HP</Text>
                      <View style={styles.lineStats} />
                      <Text>{("000" + hp).slice(-3)}</Text>
                      <ProgressBar
                        progress={hp / 100}
                        color={"#112233"}
                        style={{
                          backgroundColor: "#112233",
                          opacity: 0.4,
                          width: 213,
                          height: 8,
                          borderRadius: 8,
                          marginRight: 20,
                          marginLeft: 8,
                        }}
                      />
                    </View>

                    <View style={styles.containerStats}>
                      <Text style={styles.textStats}>ATK</Text>
                      <View style={styles.lineStats} />
                      <Text>{("000" + atk).slice(-3)}</Text>
                      <ProgressBar
                        progress={atk / 100}
                        color={"#112233"}
                        style={{
                          backgroundColor: "#112233",
                          opacity: 0.4,
                          width: 213,
                          height: 8,
                          borderRadius: 8,
                          marginRight: 20,
                          marginLeft: 8,
                        }}
                      />
                    </View>

                    <View style={styles.containerStats}>
                      <Text style={styles.textStats}>DEF</Text>
                      <View style={styles.lineStats} />
                      <Text>{("000" + def).slice(-3)}</Text>
                      <ProgressBar
                        progress={def / 100}
                        color={"#112233"}
                        style={{
                          backgroundColor: "#112233",
                          opacity: 0.4,
                          width: 213,
                          height: 8,
                          borderRadius: 8,
                          marginRight: 20,
                          marginLeft: 8,
                        }}
                      />
                    </View>
                    <View style={styles.containerStats}>
                      <Text style={styles.textStats}>SATK</Text>
                      <View style={styles.lineStats} />
                      <Text>{("000" + satk).slice(-3)}</Text>
                      <ProgressBar
                        progress={satk / 100}
                        color={"#112233"}
                        style={{
                          backgroundColor: "#112233",
                          opacity: 0.4,
                          width: 213,
                          height: 8,
                          borderRadius: 8,
                          marginRight: 20,
                          marginLeft: 8,
                        }}
                      />
                    </View>
                    <View style={styles.containerStats}>
                      <Text style={styles.textStats}>SDEF</Text>
                      <View style={styles.lineStats} />
                      <Text>{("000" + sdef).slice(-3)}</Text>
                      <ProgressBar
                        progress={sdef / 100}
                        color={"#112233"}
                        style={{
                          backgroundColor: "#112233",
                          opacity: 0.4,
                          width: 213,
                          height: 8,
                          borderRadius: 8,
                          marginRight: 20,
                          marginLeft: 8,
                        }}
                      />
                    </View>
                    <View style={styles.containerStats}>
                      <Text style={styles.textStats}>SPD</Text>
                      <View style={styles.lineStats} />
                      <Text>{("000" + spd).slice(-3)}</Text>
                      <ProgressBar
                        progress={spd / 100}
                        color={"#112233"}
                        style={{
                          backgroundColor: "#112233",
                          opacity: 0.4,
                          width: 213,
                          height: 8,
                          borderRadius: 8,
                          marginRight: 20,
                          marginLeft: 8,
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.texto}></View>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
