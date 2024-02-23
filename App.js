import { StyleSheet, Text, View, ImageBackground, TextInput, Button, Image } from 'react-native';

export default function App() {
  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />
          <Button
            title="Login"
          />
          <Button
            title="Registrar"
          />
        </View>
        <Image
          source={{uri: 'https://imgv3.fotor.com/images/side/astronaut-in-space-looking-up-at-the-stars-generated-by-Fotor-AI.jpg'}}
          style={styles.bottomImage}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    marginBottom: 20,
  },
  bottomImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
