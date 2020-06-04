import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import { 
    Container, 
    Right, 
    Card, 
    Left, 
    CardItem, 
    Body, 
    Item, 
    Input, 
    Header, 
    Content, 
    Footer, 
    FooterTab, 
    Button, 
    Icon, 
    Text, 
    Badge 
} from 'native-base';
import { 
    StyleSheet, 
    SafeAreaView, 
    Image 
} from 'react-native'

export default class JobCarts extends Component {
  render() {
    return (
      <Container>
        
        <LinearGradient colors={['#7462b6', '#a474b2']} style={styles.gradient}>
            <SafeAreaView style={styles.container}>
                <Header searchBar rounded transparent>
                <Item style={styles.searchRadius}>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
                </Header>
            </SafeAreaView>
        </LinearGradient>

        <Content>
            <Card style={styles.cardStyle}>
                <CardItem cardBody>
                    <Image source={{uri: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}} 
                    style={styles.cardImage}/>
                    
                    <Left>
                        <Body style={{marginTop: 2}}>
                            
                            <Text note style={{fontSize: 8}}>Tomorrow at 8:00 AM - 10:00 AM </Text>
                            <Text style={{fontSize: 12}}>Fuse Problem @ ABC Company</Text>
                            <Text note style={{fontSize: 8}}>xyz street qrt bakery</Text>

                            <CardItem style={{marginTop:0}}>
                                <Left style={{marginLeft: '-11%'}}>
                                    <Body style={{borderRightColor: '#000000', borderRightWidth: 1}}>
                                        <Text style={{fontSize: 8}}>Total Pay</Text>
                                        <Text style={{fontSize: 8}}>$10.00</Text>
                                    </Body>
                                </Left>
                                <Body style={{marginLeft: '5%', borderRightColor: '#000000', borderRightWidth: 1}}>
                                    <Text style={{fontSize: 8}}>Per hour</Text>
                                    <Text style={{fontSize: 8}}>$5.00</Text>
                                </Body>
                                <Body style={{marginLeft: '5%'}}>
                                    <Icon type="FontAwesome" name="street-view" style={{fontSize: 12}} /> 
                                    <Text style={{fontSize: 8}}>2.5 mil</Text>
                                </Body>
                            </CardItem>

                        </Body>
                    </Left>
                </CardItem>
            </Card>

            <Card style={styles.cardStyle}>
                <CardItem cardBody>
                    <Image source={{uri: 'https://images.pexels.com/photos/303059/pexels-photo-303059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
                    style={styles.cardImage}/>
                    
                    <Left>
                        <Body style={{marginTop: 2}}>
                            
                            <Text note style={{fontSize: 8}}>Tomorrow at 8:00 AM - 10:00 AM </Text>
                            <Text style={{fontSize: 12}}>Fuse Problem @ ABC Company</Text>
                            <Text note style={{fontSize: 8}}>xyz street qrt bakery</Text>

                            <CardItem style={{marginTop:0}}>
                                <Left style={{marginLeft: '-11%'}}>
                                    <Body style={{borderRightColor: '#000000', borderRightWidth: 1}}>
                                        <Text style={{fontSize: 8}}>Total Pay</Text>
                                        <Text style={{fontSize: 8}}>$10.00</Text>
                                    </Body>
                                </Left>
                                <Body style={{marginLeft: '5%', borderRightColor: '#000000', borderRightWidth: 1}}>
                                    <Text style={{fontSize: 8}}>Per hour</Text>
                                    <Text style={{fontSize: 8}}>$5.00</Text>
                                </Body>
                                <Body style={{marginLeft: '5%'}}>
                                    <Icon type="FontAwesome" name="street-view" style={{fontSize: 12}} /> 
                                    <Text style={{fontSize: 8}}>2.5 mil</Text>
                                </Body>
                            </CardItem>

                        </Body>
                    </Left>
                </CardItem>
            </Card>

            <Card style={styles.cardStyle}>
                <CardItem cardBody>
                    <Image source={{uri: 'https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
                    style={styles.cardImage}/>
                    
                    <Left>
                        <Body style={{marginTop: 2}}>
                            
                            <Text note style={{fontSize: 8}}>Tomorrow at 8:00 AM - 10:00 AM </Text>
                            <Text style={{fontSize: 12}}>Fuse Problem @ ABC Company</Text>
                            <Text note style={{fontSize: 8}}>xyz street qrt bakery</Text>

                            <CardItem style={{marginTop:0}}>
                                <Left style={{marginLeft: '-11%'}}>
                                    <Body style={{borderRightColor: '#000000', borderRightWidth: 1}}>
                                        <Text style={{fontSize: 8}}>Total Pay</Text>
                                        <Text style={{fontSize: 8}}>$10.00</Text>
                                    </Body>
                                </Left>
                                <Body style={{marginLeft: '5%', borderRightColor: '#000000', borderRightWidth: 1}}>
                                    <Text style={{fontSize: 8}}>Per hour</Text>
                                    <Text style={{fontSize: 8}}>$5.00</Text>
                                </Body>
                                <Body style={{marginLeft: '5%'}}>
                                    <Icon type="FontAwesome" name="street-view" style={{fontSize: 12}} /> 
                                    <Text style={{fontSize: 8}}>2.5 mil</Text>
                                </Body>
                            </CardItem>

                        </Body>
                    </Left>
                </CardItem>
            </Card>

            <Card style={styles.cardStyle}>
                <CardItem cardBody>
                    <Image source={{uri: 'https://images.pexels.com/photos/357491/pexels-photo-357491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
                    style={styles.cardImage}/>
                    
                    <Left>
                        <Body style={{marginTop: 2}}>
                            
                            <Text note style={{fontSize: 8}}>Tomorrow at 8:00 AM - 10:00 AM </Text>
                            <Text style={{fontSize: 12}}>Fuse Problem @ ABC Company</Text>
                            <Text note style={{fontSize: 8}}>xyz street qrt bakery</Text>

                            <CardItem style={{marginTop:0}}>
                                <Left style={{marginLeft: '-11%'}}>
                                    <Body style={{borderRightColor: '#000000', borderRightWidth: 1}}>
                                        <Text style={{fontSize: 8}}>Total Pay</Text>
                                        <Text style={{fontSize: 8}}>$10.00</Text>
                                    </Body>
                                </Left>
                                <Body style={{marginLeft: '5%', borderRightColor: '#000000', borderRightWidth: 1}}>
                                    <Text style={{fontSize: 8}}>Per hour</Text>
                                    <Text style={{fontSize: 8}}>$5.00</Text>
                                </Body>
                                <Body style={{marginLeft: '5%'}}>
                                    <Icon type="FontAwesome" name="street-view" style={{fontSize: 12}} /> 
                                    <Text style={{fontSize: 8}}>2.5 mil</Text>
                                </Body>
                            </CardItem>

                        </Body>
                    </Left>
                </CardItem>
            </Card>

            <Card style={styles.cardStyle}>
                <CardItem cardBody>
                    <Image source={{uri: 'https://images.pexels.com/photos/897242/pexels-photo-897242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} 
                    style={styles.cardImage}/>
                    
                    <Left>
                        <Body style={{marginTop: 2}}>
                            
                            <Text note style={{fontSize: 8}}>Tomorrow at 8:00 AM - 10:00 AM </Text>
                            <Text style={{fontSize: 12}}>Fuse Problem @ ABC Company</Text>
                            <Text note style={{fontSize: 8}}>xyz street qrt bakery</Text>

                            <CardItem style={{marginTop:0}}>
                                <Left style={{marginLeft: '-11%'}}>
                                    <Body style={{borderRightColor: '#000000', borderRightWidth: 1}}>
                                        <Text style={{fontSize: 8}}>Total Pay</Text>
                                        <Text style={{fontSize: 8}}>$10.00</Text>
                                    </Body>
                                </Left>
                                <Body style={{marginLeft: '5%', borderRightColor: '#000000', borderRightWidth: 1}}>
                                    <Text style={{fontSize: 8}}>Per hour</Text>
                                    <Text style={{fontSize: 8}}>$5.00</Text>
                                </Body>
                                <Body style={{marginLeft: '5%'}}>
                                    <Icon type="FontAwesome" name="street-view" style={{fontSize: 12}} /> 
                                    <Text style={{fontSize: 8}}>2.5 mil</Text>
                                </Body>
                            </CardItem>

                        </Body>
                    </Left>
                </CardItem>
            </Card>

            <Card style={styles.cardStyle}>
                <CardItem cardBody>
                    <Image source={{uri: 'https://images.pexels.com/photos/936720/pexels-photo-936720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} 
                    style={styles.cardImage}/>
                    
                    <Left>
                        <Body style={{marginTop: 2}}>
                            
                            <Text note style={{fontSize: 8}}>Tomorrow at 8:00 AM - 10:00 AM </Text>
                            <Text style={{fontSize: 12}}>Fuse Problem @ ABC Company</Text>
                            <Text note style={{fontSize: 8}}>xyz street qrt bakery</Text>

                            <CardItem style={{marginTop:0}}>
                                <Left style={{marginLeft: '-11%'}}>
                                    <Body style={{borderRightColor: '#000000', borderRightWidth: 1}}>
                                        <Text style={{fontSize: 8}}>Total Pay</Text>
                                        <Text style={{fontSize: 8}}>$10.00</Text>
                                    </Body>
                                </Left>
                                <Body style={{marginLeft: '5%', borderRightColor: '#000000', borderRightWidth: 1}}>
                                    <Text style={{fontSize: 8}}>Per hour</Text>
                                    <Text style={{fontSize: 8}}>$5.00</Text>
                                </Body>
                                <Body style={{marginLeft: '5%'}}>
                                    <Icon type="FontAwesome" name="street-view" style={{fontSize: 12}} /> 
                                    <Text style={{fontSize: 8}}>2.5 mil</Text>
                                </Body>
                            </CardItem>

                        </Body>
                    </Left>
                </CardItem>
            </Card>
        </Content>
        
        <Footer>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Button vertical style={styles.navButton}>
              <Icon type="FontAwesome" name="home" style={styles.iconSize} />
            </Button>
            <Button vertical badge style={styles.navButton}>
                <Badge ><Text>51</Text></Badge>
              <Icon name="chatboxes" style={styles.iconSize} />
            </Button>
            <Button vertical style={styles.navButton}>
              <Icon name="search" style={styles.iconSize} />
            </Button>
            <Button badge vertical style={styles.navButton}>
            <Badge><Text>2</Text></Badge>
              <Icon type="FontAwesome" name="bell-o" style={styles.iconSize} />
            </Button>
            <Button vertical style={styles.navButton}>
              <Icon name="person" style={styles.iconSize} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    iconSize: {
        fontSize: 18,
        color: '#978cab'
    },
    navButton: {
        color: 'white',
        padding: 1,
        alignItems: 'center',
        display:'flex',
        margin: 0
      },
    searchRadius: {
        borderRadius: 20
    },
    gradient: {
        flex: 1,
        maxHeight: 80
    },
    container: {
        flex: 1
    },
    cardImage: {
        height: 90,
        width: 75,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5

    },
    cardStyle: {
        borderRadius: 10,
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: '1%'
    }  
});