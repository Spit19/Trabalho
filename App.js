import { StyleSheet, View } from 'react-native';
import Form from './src/comps/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
});
