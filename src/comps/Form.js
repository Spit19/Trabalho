import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Form() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function consoleprint() {
        console.log('Nome -> ', name)
        console.log('Email -> ', email)
        console.log('Password -> ', password)
    }
    
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>FORMULÁRIO LEGAL</Text>
            <Text style = {styles.label}>Nome</Text>
            <TextInput style = {styles.input} value = {name} onChangeText={setName} placeholder='Digite seu Nome'/>
            <Text style = {styles.label}>Email</Text>
            <TextInput style = {styles.input} value = {email} onChangeText={setEmail} placeholder='Digite seu Email' keyboardType='email-address'/>
            <Text style = {styles.label}>Senha</Text>
            <TextInput style = {styles.input} value = {password} onChangeText={setPassword} placeholder='Digite a Senha'/>
            <Button title='Enviar' onPress={consoleprint}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },

      label: {
        marginBottom: 5,
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
      },

      title: {
        padding: 20,
        backgroundColor: '#1D3CA4',
        alignItems: 'center',
        justifyContent: 'center',
      }
});