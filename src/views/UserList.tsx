import React from 'react'
import { useContext } from 'react'
import { View, Text, FlatList, Alert, Platform } from 'react-native'
import { Button, ListItem, Avatar, Icon } from 'react-native-elements'
import UserContext from '../context/UserContext'
// import {} from 'element'
// import users from '../data/users'

interface User {
  avatar: string
  name: string
  email: string,
  id: number
}

export const UserList = ({ navigation }: any) => {

 const {state, dispatch}:any =   useContext(UserContext)
//  const {users} = state
  function getActions(user: User) {
    return (
      <Button

      />
    )
  }
  
  function handlerDelete(user){

    const deleteUser = () => {
      dispatch({
        type: 'deleteUser',
        payload: user, 
      })
    }

    if(Platform.OS === 'web'){
      const confirm = window.confirm('Deseja excluir o usuário')
      if(confirm) {
        deleteUser()
        window.alert('Usuário deleteado')
      }
      return
    }
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [

      {
        text: 'Sim',
        onPress(){
          deleteUser()
          console.warn('delete', {user})
        }
        
      },
      {

        text: 'Não'
      }
    ])
  }
  function getUserItem({ item: user }: User) {
    return (
      <ListItem key={user.id}

        bottomDivider
        onPress={() => navigation.navigate('UserForm', user)}
      >
        <Avatar source={user.avatar} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <Icon name='edit'
          size={25}
          color='orange'
          onPress={() => navigation.navigate('UserForm', user)}
        />
        <Icon name='delete'
          size={25}
          color='red'
          onPress={() => handlerDelete(user)}
        />
      </ListItem>

    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />

    </View>
  )
}