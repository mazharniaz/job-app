import React, { Component } from "react"
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet, SafeAreaView, Image } from "react-native"
import { Header, Left, Title, Thumbnail, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Badge, Text, Container, Content, Right} from "native-base"

export default class JobDescription extends Component {
    render() {
        return(
            <Container>

                <LinearGradient colors={['#7462b6', '#a474b2']} style={styles.gradient}>
                    <SafeAreaView style={styles.container}>
                        <Header transparent>
                        <Body style={{alignItems: "center"}}>
                            <Title>Details</Title>
                        </Body>
                        </Header>
                    </SafeAreaView>
                </LinearGradient>

                <Content>

                

                <Card transparent style={styles.cardStyle}>
                    <CardItem cardBody>
                
                        <Thumbnail source={{uri: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}} />
                        
                    <Left>
                        <Body style={{marginTop: 2, marginLeft: "4%"}}>
                            
                            <Text note style={{fontSize: 10}}>Tomorrow at 8:00 AM - 10:00 AM </Text>
                            <Text style={{fontSize: 14}}>Fuse Problem @ ABC Company</Text>
                            <Text note style={{fontSize: 10}}>xyz street qrt bakery</Text>
                            <Text note style={{fontSize: 10}}>$10 Inc Holiday Pay</Text>

                        </Body>
                    </Left>
                </CardItem>
            </Card>
            
            <Card transparent style={{borderBottomWidth: 1, marginLeft: "4%", marginRight: "4%"}}>
            <Text style={{fontSize: 14, marginLeft: "1%"}}>Shifts (3)</Text>
                
                <CardItem style={{marginTop: "-3%", marginLeft: "-4%", paddingBottom: "2%", backgroundColor: "transparent"}}>
                
                    
                    <Body style={{marginRight: "-2%"}}>
                    
                        <Text style={{fontSize: 10}}>Tomorrow</Text>
                        <Text style={{fontSize: 10}}>08:00 AM - 11:00 AM</Text>
                    </Body>

                    <Text style={{marginRight: "2%"}}>></Text>

                    <Body style={{marginRight: "-2%"}}>
                        <Text style={{fontSize: 10}}>Thu, 30 May</Text>
                        <Text style={{fontSize: 10}}>08:00 AM - 11:00 AM</Text>
                    </Body>

                    <Text style={{marginRight: "2%"}}>></Text>

                    <Body>
                        <Text style={{fontSize: 10}}>Fri, 31 May</Text>
                        <Text style={{fontSize: 10}}>08:00 AM - 11:00 AM</Text>
                    </Body>

                </CardItem>
            </Card>

            <Card transparent style={{marginTop: "-3%", borderBottomWidth: 1, marginLeft: "4%", marginRight: "4%"}}>
            
                <CardItem style={{ marginTop: "1%", marginLeft: "-4%", paddingBottom: "2%", backgroundColor: "transparent"}}>
                    
                    
                    <Body style={{marginRight: "-2%"}}>
                    <Text style={{fontSize: 14}}>Location</Text>
                        <Text note style={{fontSize: 10}}>XYZ Street</Text>
                        <Text note style={{fontSize: 10}}>QRT Bakery, Park Estate</Text>
                        <Text note style={{fontSize: 10}}>LONDON, WC 5PT</Text>
                    </Body>
                    
                    <Image 
                        source={require('../components/google-map.png')} 
                        style={{height: 60, width: 210}} 
                    />
                    

                    

                </CardItem>
            </Card>



            <Card transparent style={{marginTop: "-3%", borderBottomWidth: 1, marginLeft: "4%", marginRight: "4%"}}>
                    <CardItem style={{ marginTop: "1%", marginLeft: "-4%", paddingBottom: "2%", backgroundColor: "transparent"}}>
                        <Body>
                            <Text style={{fontSize: 14}}>Prerequisite (If any)</Text>
                            <Text note style={{fontSize: 10}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
    
                <Card transparent style={{marginTop: "-3%"}}>
                    <CardItem style={{ marginTop: "1%", paddingBottom: "2%", backgroundColor: "transparent"}}>
                        <Body>
                            <Text style={{fontSize: 14}}>Description</Text>
                            <Text note style={{fontSize: 10}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique, lectus ut ultricies mattis, nulla orci accumsan velit, vitae tempor elit velit et eros.
                                Mauris tristique, lectus ut ultricies mattis, nulla orci accumsan velit, vitae tempor elit velit et eros.
                            </Text>
                        </Body>
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
        )
    }
} 

const styles = StyleSheet.create({
    iconSize: {
        fontSize: 18,
        color: '#978cab'
    },
    gradient: {
        flex: 1,
        maxHeight: 80
    },
    container: {
        flex: 1
    },
    navButton: {
        color: 'white',
        padding: 1,
        alignItems: 'center',
        display:'flex',
        margin: 0
    },
    cardImage: {
        height: 90,
        width: 75
    },
    cardStyle: {
        borderBottomWidth: 1,
        marginLeft: '4%',
        marginRight: '4%',
        marginBottom: '0%',
        paddingBottom: "2%",
        paddingTop: "2%"
    } 
});