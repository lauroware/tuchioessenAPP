import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const RecetasScreen = () => {
  const navigation = useNavigation();
  const [filtro, setFiltro] = useState(null);

  const data = [
    {
      id: "1",
      title: "Torta",
      image: require("../assets/bizcuchuelo.jpg"),
      type: "Dulce",
      ingredientes:
        "2 1/2 tazas de harina de trigo, 2 tazas de azúcar, 1 taza de leche, 1/2 taza de mantequilla (a temperatura ambiente), 4 huevos, 2 cucharaditas de polvo para hornear, 1 cucharadita de extracto de vainilla, 1/2 cucharadita de sal",
      receta:
        "En un tazón grande, mezcla la harina, el azúcar, el polvo para hornear y la sal. Añade la mantequilla y mezcla hasta obtener una consistencia arenosa. Agrega los huevos, la leche y la vainilla, y bate hasta obtener una masa suave. Vierte la masa en un molde previamente engrasado y enharinado. Hornea en un horno precalentado a 180°C durante aproximadamente 30-35 minutos, o hasta que al insertar un palillo en el centro de la torta, este salga limpio. Deja enfriar la torta antes de desmoldarla y decorarla a tu gusto. ¡Disfruta de tu deliciosa torta casera!",
    },
    {
      id: "2",
      title: "Gelatina",
      image: require("../assets/gelatina.jpg"),
      type: "Dulce",
      ingredientes:
        "gelatina en polvo sin sabor, agua fría, azúcar, jugo de frutas o saborizante y moldes individuales.",
      receta:
        "Para hacer gelatina, primero disuelve la gelatina en polvo sin sabor en agua fría y déjala reposar para que se hidrate. Mientras tanto, calienta agua en una olla, agrega azúcar y revuelve hasta que se disuelva completamente. Retira la olla del fuego y mezcla la gelatina hidratada en el líquido caliente hasta que se disuelva por completo. Añade el jugo de frutas o saborizante de tu elección y mezcla bien. Vierte la mezcla en moldes individuales y refrigera durante al menos dos horas, hasta que la gelatina se solidifique. Desmolda y disfruta de una deliciosa gelatina casera.",
    },
    {
      id: "3",
      title: "Huevo Frito",
      image: require("../assets/huevo-frito.jpg"),
      type: "Salado",
      ingredientes: "huevos, aceite o mantequilla, sal y pimienta al gusto.",
      receta:
        "Calienta una sartén a fuego medio y añade una cucharada de aceite o mantequilla, permitiendo que se derrita y se caliente. Casca suavemente un huevo en un recipiente aparte y luego viértelo cuidadosamente en la sartén caliente, asegurándote de no romper la yema. Cocina el huevo durante aproximadamente 2 a 3 minutos, hasta que la clara esté cocida y los bordes estén crujientes. Durante la cocción, puedes sazonar el huevo con sal y pimienta al gusto. Si prefieres la yema más cocida, puedes cubrir la sartén con una tapa durante los últimos minutos para que se cocine ligeramente. Una vez que esté listo, retira el huevo frito de la sartén con una espátula y sírvelo caliente. Repite el proceso con los huevos adicionales si deseas hacer más.",
    },
    {
      id: "4",
      title: "Torta Frita",
      image: require("../assets/torta-frita.jpg"),
      type: "Frito",
      ingredientes:
        "harina de trigo, levadura en polvo, sal, agua tibia y aceite para freír. Opcionalmente, puedes agregar grasa o manteca para darle un sabor extra.",
      receta:
        "En un recipiente, mezcla 500 gramos de harina de trigo con una cucharada de levadura en polvo y una pizca de sal. Agrega 100 gramos de grasa o manteca derretida (opcional) y mezcla bien. Añade agua tibia poco a poco mientras amasas la masa hasta obtener una consistencia suave y elástica. Cubre la masa con un paño húmedo y déjala reposar durante aproximadamente 30 minutos. Luego, estira la masa con un rodillo hasta obtener un grosor de aproximadamente medio centímetro. Corta la masa en formas redondas o cuadradas, del tamaño deseado. Calienta suficiente aceite en una sartén profunda a fuego medio-alto. Fríe las tortas en el aceite caliente hasta que estén doradas y crujientes en ambos lados. Retíralas con una espumadera y colócalas sobre papel absorbente para eliminar el exceso de grasa. Sirve las tortas fritas calientes y disfrútalas solas o acompañadas de dulce de leche, mermelada o cualquier otro acompañante de tu elección.",
    },
    {
      id: "5",
      title: "Chipa",
      image: require("../assets/chipa.jpg"),
      type: "Salado",
      ingredientes:
        "almidón de mandioca o harina de mandioca fina, queso Paraguay o queso tipo cuartirolo rallado, huevos, leche, sal y grasa de cerdo (opcional). Algunas variantes pueden incluir anís en grano o leche de coco.",
      receta:
        "mezcla 500 gramos de almidón de mandioca o harina de mandioca fina con 250 gramos de queso Paraguay o queso tipo cuartirolo rallado. Agrega 3 huevos, 1/2 taza de leche, 1 cucharadita de sal y opcionalmente 100 gramos de grasa de cerdo. Amasa bien hasta obtener una masa homogénea. Forma pequeñas bolitas o la forma deseada y colócalas en una bandeja para horno previamente engrasada. Hornea a 180 grados Celsius durante aproximadamente 20-25 minutos, o hasta que estén doradas. Disfruta de las deliciosas chipas caseras.",
    },
    {
      id: "6",
      title: "Panchos",
      image: require("../assets/pancho.jpg"),
      type: "Salado",
      ingredientes:
        "panes para panchos, salchichas tipo frankfurt o hot dogs, mostaza, ketchup, cebolla picada, pepinillos en rodajas, salsa de tomate, mayonesa y cualquier otro condimento o aderezo de tu preferencia, como chucrut, queso rallado o jalapeños.",
      receta:
        "Para cocinar panchos, comienza cocinando las salchichas en agua caliente o a la parrilla hasta que estén calientes y bien cocidas. Luego, toma un pan para panchos y coloca una salchicha en el medio. Agrega mostaza, ketchup, cebolla picada, pepinillos en rodajas, salsa de tomate, mayonesa y cualquier otro condimento o aderezo de tu elección. ¡Listo! Ahora puedes disfrutar de unos deliciosos panchos caseros.",
    },
    {
      id: "7",
      title: "Chocotorta",
      image: require("../assets/chocotorta.jpg"),
      type: "Dulce",
      ingredientes:
        "galletitas de chocolate tipo Chocolinas (o similar), dulce de leche, queso crema, crema de leche (nata), azúcar y cacao en polvo para decorar",
      receta:
        "intercala capas de galletitas de chocolate previamente remojadas en leche o café, con capas de una mezcla de dulce de leche y queso crema. Repite este proceso hasta completar varias capas. Para la última capa, mezcla la crema de leche (nata) batida con azúcar y colócala sobre la chocotorta. Refrigera durante al menos 4 horas, o preferiblemente toda la noche, para que las capas se fusionen y adquieran una textura suave y cremosa. Espolvorea con cacao en polvo antes de servir. ¡Disfruta de esta deliciosa y fácil chocotorta!",
    },
    {
      id: "8",
      title: "Arroz",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes: "arroz, agua y sal.",
      receta:
        "Para hacer arroz blanco, enjuaga una taza de arroz bajo agua fría para eliminar el exceso de almidón. En una olla mediana, agrega el arroz y dos tazas de agua. Si deseas, añade sal al gusto. Lleva el agua a ebullición a fuego alto. Una vez que el agua esté hirviendo, reduce el fuego a bajo, tapa la olla y deja que el arroz se cocine durante unos 15-20 minutos, o hasta que el agua se absorba por completo y el arroz esté tierno. Retira del fuego y deja reposar tapado durante unos minutos. Fluff con un tenedor antes de servir. ¡Disfruta de un delicioso arroz blanco!",
    },
  ];

  const Card = ({ title, image, type }) => {
    const handleCardPress = () => {
      navigation.navigate("RecetasDetail", {
        title,
        ingredientes: data.find((item) => item.title === title).ingredientes,
        receta: data.find((item) => item.title === title).receta,
      });
    };

    return (
      <TouchableOpacity style={styles.imageContainer} onPress={handleCardPress}>
        <Image style={styles.image} source={image} resizeMode="cover" />
        <Text style={styles.imageText}>{title}</Text>
        <Text style={styles.imageType}>{type}</Text>
      </TouchableOpacity>
    );
  };

  const handleFilter = (type) => {
    setFiltro(type);
  };

  const filteredData = filtro
    ? data.filter((item) => item.type === filtro)
    : data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Recetas</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>Filtro:</Text>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtro === null && styles.filterButtonActive,
          ]}
          onPress={() => handleFilter(null)}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtro === null && styles.filterButtonTextActive,
            ]}
          >
            Todos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtro === "Dulce" && styles.filterButtonActive,
          ]}
          onPress={() => handleFilter("Dulce")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtro === "Dulce" && styles.filterButtonTextActive,
            ]}
          >
            Dulces
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtro === "Salado" && styles.filterButtonActive,
          ]}
          onPress={() => handleFilter("Salado")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtro === "Salado" && styles.filterButtonTextActive,
            ]}
          >
            Salados
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtro === "Frito" && styles.filterButtonActive,
          ]}
          onPress={() => handleFilter("Frito")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtro === "Frito" && styles.filterButtonTextActive,
            ]}
          >
            Fritos
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.body}>
          {filteredData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              type={item.type}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  filterTitle: {
    marginRight: 10,
    fontWeight: "bold",
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginRight: 10,
  },
  filterButtonText: {
    fontWeight: "bold",
  },
  filterButtonActive: {
    backgroundColor: "orange",
  },
  filterButtonTextActive: {
    color: "#fff",
  },
  body: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    height: 100,
    backgroundColor: "orange",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: "100%",
    resizeMode: "cover",
  },
  imageText: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  imageType: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: "absolute",
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default RecetasScreen;
