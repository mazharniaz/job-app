import React from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default function ChatScreen({navigation}) {
    return(
        <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://cdn.pixabay.com/photo/2018/01/18/17/49/purchase-3090836_960_720.jpg' }} />
              </Left>
              <Body>
                <Text>Selena Peter</Text>
                <Text note numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a rutrum nulla, sed hendrerit libero. Donec iaculis id risus eu vulputate.</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://cdn.pixabay.com/photo/2018/01/18/17/49/purchase-3090838_960_720.jpg' }} />
              </Left>
              <Body>
                <Text>Addis</Text>
                <Text note numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a rutrum nulla, sed hendrerit libero. Donec iaculis id risus eu vulputate.</Text>
              </Body>
              <Right>
                <Text note>2:41 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://cdn.pixabay.com/photo/2017/09/18/16/11/building-2762241_960_720.jpg' }} />
              </Left>
              <Body>
                <Text>Addison</Text>
                <Text note numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a rutrum nulla, sed hendrerit libero. Donec iaculis id risus eu vulputate.</Text>
              </Body>
              <Right>
                <Text note>12:20 pm</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://cdn.pixabay.com/photo/2015/12/07/10/57/electrician-1080590_960_720.jpg' }} />
              </Left>
              <Body>
                <Text>Adrion</Text>
                <Text note numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a rutrum nulla, sed hendrerit libero. Donec iaculis id risus eu vulputate.</Text>
              </Body>
              <Right>
                <Text note>10:34 am</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://cdn.pixabay.com/photo/2015/12/07/11/00/building-1080596_960_720.jpg' }} />
              </Left>
              <Body>
                <Text>Aethelbert</Text>
                <Text note numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a rutrum nulla, sed hendrerit libero. Donec iaculis id risus eu vulputate.</Text>
              </Body>
              <Right>
                <Text note>9:02 am</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://cdn.pixabay.com/photo/2017/10/04/18/51/telephone-2817221_960_720.jpg' }} />
              </Left>
              <Body>
                <Text>Jessica</Text>
                <Text note numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a rutrum nulla, sed hendrerit libero. Donec iaculis id risus eu vulputate.</Text>
              </Body>
              <Right>
                <Text note>6:43 am</Text>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://cdn.pixabay.com/photo/2017/08/25/21/43/frustrated-2681484_960_720.jpg' }} />
              </Left>
              <Body>
                <Text>Henna Backer</Text>
                <Text note numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a rutrum nulla, sed hendrerit libero. Donec iaculis id risus eu vulputate.</Text>
              </Body>
              <Right>
                <Text note>3:12 am</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
} 