import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index2() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Bem vindo à pagina principal.</Text>

      <br></br>
            <Link href={"/settings"}>Ir para Configurações</Link>
            <Link href={"/settings/configuracaocliente"}>Ir para Login de Cliente</Link>
    </View>
  );
}
