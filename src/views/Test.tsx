import React from 'react'
import { View } from 'react-native'
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

export const Test = () => {
  return (

    <View>

      {list.map((l, i) => (

        <ListItem>
          <Icon name={'info'} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
          <Icon name='delete' />
          </ListItem>
      ))}
    </View>

  )
}
