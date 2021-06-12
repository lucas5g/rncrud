import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'
import UserContext from '../context/UserContext'

export const UserForm = ({ route, navigation }) => {
  // useState(route.params ? route.params :{})

  const {dispatch} = useContext(UserContext)

  const [user, setUser] = useState(route.params ? route.params : {})
  return (
    <View>
      <Text>Name</Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({ ...user, name })}
        placeholder='Informe o Nome'
        value={user.name}
      />
       <Text>E-mail</Text>
      <TextInput
        style={style.input}
        onChangeText={email => setUser({ ...user, email })}
        placeholder='Informe o E-mail'
        value={user.email}
      />
       <Text>Avatar</Text>
      <TextInput
        style={style.input}
        onChangeText={avatar => setUser({ ...user, avatar })}
        placeholder='Informe a URL do Avatar'
        value={user.avatar}
      />

      <Button 
        title='Salvar'
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser': 'createUser',
            payload: user
          })
          navigation.goBack()

        }}
      />
    </View>
    
  )
}

const style = StyleSheet.create({
  form: {

  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10
  }
})