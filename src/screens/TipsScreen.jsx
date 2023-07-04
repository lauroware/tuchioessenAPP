import React, { useState, useEffect } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();

function Items({ done: doneHeading, onPressItem }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from items where done = ?;`,
        [doneHeading ? 1 : 0],
        (_, { rows: { _array } }) => setItems(_array)
      );
    });
  }, []);

  const heading = doneHeading ? "Ya comprados " : "Productos a comprar";

  if (items === null || items.length === 0) {
    return null;
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>{heading}</Text>
      {items.map(({ id, done, value }) => (
        <TouchableOpacity
          key={id}
          onPress={() => onPressItem && onPressItem(id)}
          style={{
            backgroundColor: done ? "#1c9963" : "#fff",
            borderColor: "#000",
            borderWidth: 1,
            padding: 8,
          }}
        >
          <Text style={{ color: done ? "#fff" : "#000" }}>{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [forceUpdate, forceUpdateId] = useForceUpdate();

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  }, []);

  const add = () => {
    if (selectedValue === "") {
      return false;
    }

    db.transaction(
      (tx) => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [
          selectedValue,
        ]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      forceUpdate
    );
  };

  const productList = [
    "Manzanas",
    "Plátanos",
    "Naranjas",
    "Uvas",
    "Fresas",
    "Piñas",
    "Mangos",
    "Sandías",
    "Melones",
    "Kiwis",
    "Papayas",
    "Limones",
    "Zanahorias",
    "Lechugas",
    "Tomates",
    "Cebollas",
    "Pimientos",
    "Espinacas",
    "Brócoli",
    "Coliflor",
    "Patatas",
    "Calabazas",
    "Pepinos",
    "Berenjenas",
    "Acelgas",
    "Apio",
    "Perejil",
    "Albahaca",
    "Leche",
    "Queso",
    "Yogur",
    "Mantequilla",
    "Crema",
    "Huevos",
    "Pan",
    "Arroz",
    "Pasta",
    "Harina",
    "Azúcar",
    "Sal",
    "Aceite de oliva",
    "Vinagre",
    "Miel",
    "Cereales",
    "Nueces",
    "Almendras",
    "Avellanas",
    "Avena",
    "Mermelada",
    "Chocolate",
    "Aceitunas",
    "Cilantro",
    "Menta",
    "Romero",
    "Perejil",
    "Canela",
    "Jengibre",
    "Ajo",
    "Cebollinos",
    "Albahaca",
    "Orégano",
    "Cebada",
    "Frijoles",
    "Lentejas",
    "Garbanzos",
    "Aceitunas",
    "Mermelada",
    "Salsa de tomate",
    "Salsa de soja",
    "Salsa picante",
    "Salsa BBQ",
    "Mantequilla de maní",
    "Salsa de nueces",
    "Salsa de chocolate",
    "Harina de trigo integral",
    "Harina de maíz",
    "Harina de avena",
    "Harina de almendras",
    "Leche de almendras",
    "Leche de avena",
    "Leche de coco",
    "Leche de arroz",
    "Leche de soja",
    "Yoghurt de coco",
    "Yoghurt de almendras",
    "Yoghurt griego",
    "Queso cheddar",
    "Queso mozzarella",
    "Queso feta",
    "Queso parmesano",
    "Queso azul",
    "Queso crema",
    "Pan integral",
    "Pan de centeno",
    "Pan sin gluten",
    "Pan pita",
    "Tortillas de maíz",
    "Tortillas de trigo",
    "Tofu",
    "Tempeh",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lista de compras supermercado</Text>

      {Platform.OS === "web" ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.heading}>
            Expo SQLite is not supported on web!
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Seleccionar producto:</Text>
            <View style={styles.picker}>
              <Text
                onPress={() => {}}
                style={styles.pickerText}
                numberOfLines={1}
              >
                {selectedValue || "Seleccionar"}
              </Text>
              <ScrollView>
                {productList.map((product, index) => (
                  <Text
                    key={index}
                    onPress={() => {
                      setSelectedValue(product);
                      setSelectedIndex(index);
                    }}
                    style={[
                      styles.pickerItem,
                      {
                        fontWeight: selectedIndex === index ? "bold" : "normal",
                      },
                    ]}
                  >
                    {product}
                  </Text>
                ))}
              </ScrollView>
            </View>
          </View>
          <TouchableOpacity onPress={add} style={styles.addButton}>
            <Text style={styles.addButtonLabel}>Añadir a la lista</Text>
          </TouchableOpacity>
          <ScrollView style={styles.listArea}>
            <Items
              key={`forceupdate-todo-${forceUpdateId}`}
              done={false}
              onPressItem={(id) =>
                db.transaction(
                  (tx) => {
                    tx.executeSql(`update items set done = 1 where id = ?;`, [
                      id,
                    ]);
                  },
                  null,
                  forceUpdate
                )
              }
            />
            <Items
              done
              key={`forceupdate-done-${forceUpdateId}`}
              onPressItem={(id) =>
                db.transaction(
                  (tx) => {
                    tx.executeSql(`delete from items where id = ?;`, [id]);
                  },
                  null,
                  forceUpdate
                )
              }
            />
          </ScrollView>
        </>
      )}
    </View>
  );
}

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  pickerContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  picker: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    maxHeight: 100,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  pickerText: {
    fontSize: 14,
    marginBottom: 4,
  },
  pickerItem: {
    fontSize: 14,
    marginVertical: 4,
  },
  addButton: {
    alignItems: "center",
    backgroundColor: "#4630eb",
    borderRadius: 4,
    margin: 16,
    padding: 12,
  },
  addButtonLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
});
