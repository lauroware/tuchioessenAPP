import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HuevoFritoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        1. Calienta una sartén y agrega un chorro de aceite. La cantidad de
        aceite puede variar según tus preferencias. Puedes usar mucho aceite
        para cubrir completamente la yema o un chorro generoso que solo cubra el
        fondo de la sartén, dejando la yema visible.
      </Text>
      <Text style={styles.text}>
        2. Deja que el aceite se caliente adecuadamente y luego rompe el huevo
        en la sartén. Asegúrate de no romperlo en el borde de la sartén por
        seguridad. Vierte el huevo lo más cerca posible de la sartén para evitar
        salpicaduras de aceite caliente.
      </Text>
      <Text style={styles.text}>
        3. Si deseas que la yema esté bien cocida alrededor, puedes verter un
        poco de aceite con una cuchara sobre ella. Recuerda no tapar la sartén
        en ningún momento durante la cocción.
      </Text>
      <Text style={styles.text}>
        4. Una vez que los bordes del huevo estén dorados, retíralo
        cuidadosamente del aceite y colócalo en un plato. ¡Y listo! Ahora tienes
        un huevo frito perfecto.
      </Text>
      <Text style={styles.recommendation}>
        Recomendación: Recuerda tener precaución al manipular la sartén con
        aceite caliente para evitar quemaduras.
      </Text>
    </View>
  );
};

export default HuevoFritoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 24,
  },
  recommendation: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});
