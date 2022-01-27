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
import typeColors from "./typeColors";

export default function Busca() {
  const [search, setSearch] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [number, setNumber] = useState(null);
  const [imagem, setImagem] = useState(null);
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [abiliity, setAbiliity] = useState(null);
  const [type1, setType1] = useState(null);
  const [move1, setMove1] = useState(null);
  const [move2, setMove2] = useState(null);
  const [hp, setHp] = useState(null);
  const [atk, setAtk] = useState(null);
  const [def, setDef] = useState(null);
  const [satk, setSatk] = useState(null);
  const [sdef, setSdef] = useState(null);
  const [spd, setSpd] = useState(null);
  const [type2, setType2] = useState(null);

  async function searchPokemons() {
    if (type2 !== null) {
      setType2(null);
    }
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

          {type1 && (
            <View
              style={{
                width: 360,
                height: 640,
                borderRadius: 12,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 8,
                marginBottom: 30,
                backgroundColor: typeColors[type1],
              }}
            >
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
                    <Text
                      style={{
                        backgroundColor: typeColors[type1],
                        width: 78,
                        height: 25,
                        fontFamily: "PoppinsBold",
                        color: "#FFF",
                        fontSize: 15,
                        borderRadius: 10,
                        textAlign: "center",
                        marginLeft: 8,
                      }}
                    >
                      {type1}
                    </Text>
                    {type2 && (
                      <Text
                        style={{
                          width: 78,
                          height: 25,
                          fontFamily: "PoppinsBold",
                          color: "#FFF",
                          fontSize: 15,
                          backgroundColor: typeColors[type2],
                          borderRadius: 10,
                          textAlign: "center",
                          marginLeft: 8,
                        }}
                      >
                        {type2}
                      </Text>
                    )}
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
                      <Text
                        style={{
                          fontFamily: "PoppinsBold",
                          textAlign: "right",
                          color: typeColors[type1],
                          width: 32,
                          height: 20,
                          fontSize: 15,
                          lineHeight: 20,
                          marginLeft: 24,
                        }}
                      >
                        HP
                      </Text>
                      <View style={styles.lineStats} />
                      <Text>{("000" + hp).slice(-3)}</Text>
                      <ProgressBar
                        progress={hp / 100}
                        color={typeColors[type1]}
                        style={{
                          backgroundColor: typeColors[type1],
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
                      <Text
                        style={{
                          fontFamily: "PoppinsBold",
                          textAlign: "right",
                          color: typeColors[type1],
                          width: 32,
                          height: 20,
                          fontSize: 15,
                          lineHeight: 20,
                          marginLeft: 24,
                        }}
                      >
                        ATK
                      </Text>
                      <View style={styles.lineStats} />
                      <Text>{("000" + atk).slice(-3)}</Text>
                      <ProgressBar
                        progress={atk / 100}
                        color={typeColors[type1]}
                        style={{
                          backgroundColor: typeColors[type1],
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
                      <Text
                        style={{
                          fontFamily: "PoppinsBold",
                          textAlign: "right",
                          color: typeColors[type1],
                          width: 32,
                          height: 20,
                          fontSize: 15,
                          lineHeight: 20,
                          marginLeft: 24,
                        }}
                      >
                        DEF
                      </Text>
                      <View style={styles.lineStats} />
                      <Text>{("000" + def).slice(-3)}</Text>
                      <ProgressBar
                        progress={def / 100}
                        color={typeColors[type1]}
                        style={{
                          backgroundColor: typeColors[type1],
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
                      <Text
                        style={{
                          fontFamily: "PoppinsBold",
                          textAlign: "right",
                          color: typeColors[type1],
                          width: 32,
                          height: 20,
                          fontSize: 15,
                          lineHeight: 20,
                          marginLeft: 24,
                        }}
                      >
                        SATK
                      </Text>
                      <View style={styles.lineStats} />
                      <Text>{("000" + satk).slice(-3)}</Text>
                      <ProgressBar
                        progress={satk / 100}
                        color={typeColors[type1]}
                        style={{
                          backgroundColor: typeColors[type1],
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
                      <Text
                        style={{
                          fontFamily: "PoppinsBold",
                          textAlign: "right",
                          color: typeColors[type1],
                          width: 32,
                          height: 20,
                          fontSize: 15,
                          lineHeight: 20,
                          marginLeft: 24,
                        }}
                      >
                        SDEF
                      </Text>
                      <View style={styles.lineStats} />
                      <Text>{("000" + sdef).slice(-3)}</Text>
                      <ProgressBar
                        progress={sdef / 100}
                        color={typeColors[type1]}
                        style={{
                          backgroundColor: typeColors[type1],
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
                      <Text
                        style={{
                          fontFamily: "PoppinsBold",
                          textAlign: "right",
                          color: typeColors[type1],
                          width: 32,
                          height: 20,
                          fontSize: 15,
                          lineHeight: 20,
                          marginLeft: 24,
                        }}
                      >
                        SPD
                      </Text>
                      <View style={styles.lineStats} />
                      <Text>{("000" + spd).slice(-3)}</Text>
                      <ProgressBar
                        progress={spd / 100}
                        color={typeColors[type1]}
                        style={{
                          backgroundColor: typeColors[type1],
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
