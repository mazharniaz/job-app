// import React, { Component } from 'react';
// import { Dimensions, Modal } from 'react-native';

// export default class ModalComponent extends Component { 
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }

//     handleClose = () => {
//         return this.props.onClose();
//     }

//     render() {
//         const { showModal, searchData } = this.props;
//         return(
//             <Modal 
//                 animationType="slide"
//                 transparent
//                 visible={showModal}
//                 onRequestClose={this.handleClose}
            
//             />
//         )
//     }
// }


{/* <Container>
            <Content>
            <TouchableOpacity onPress={() => this.toggleModal()}>
            <Card style={styles.cardStyle}>
                <CardItem cardBody>
                    <Image source={{uri: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}} 
                    style={styles.cardImage}/>
                    
                    <Left>
                        <Body style={{marginTop: 2}}>
                            
                            <Text note style={{fontSize: 8}}>Tomorrow at 8:00 AM - 10:00 AM </Text>
                            <Text style={{fontSize: 12}}>ABC</Text>
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
            </TouchableOpacity>
        </Content>
        
        <Modal isVisible={this.state.isModalVisible}>
        
        
          <Container>
          
          <ScrollView>
            
            
                <Content style={{paddingTop: '2%'}}>

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

                    <Text style={{marginRight: "2%"}}>&#8594;</Text>

                    <Body style={{marginRight: "-2%"}}>
                        <Text style={{fontSize: 10}}>Thu, 30 May</Text>
                        <Text style={{fontSize: 10}}>08:00 AM - 11:00 AM</Text>
                    </Body>

                    <Text style={{marginRight: "2%"}}>&#8594;</Text>

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
                        source={require('../google-map.png')} 
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique, lectus ut ultricies mattis, nulla orci accumsan velit, vitae tempor elit velit et eros.
                                Mauris tristique, lectus ut ultricies mattis, nulla orci accumsan velit, vitae tempor elit velit et eros.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique, lectus ut ultricies mattis, nulla orci accumsan velit, vitae tempor elit velit et eros.
                                Mauris tristique, lectus ut ultricies mattis, nulla orci accumsan velit, vitae tempor elit velit et eros.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique, lectus ut ultricies mattis, nulla orci accumsan velit, vitae tempor elit velit et eros.
                                Mauris tristique, lectus ut ultricies mattis, nulla orci accumsan velit, vitae tempor elit velit et eros.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique, lectus ut ultricies mattis, nulla orci accumsan velit, vitae tempor elit velit et eros.
                                Mauris tristique, lectus ut ultricies mattis, nulla orci accumsan velit, vitae tempor elit velit et eros.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tristique, lectus ut ultricies mattis, nulla orci accumsan velit, vitae tempor elit velit et eros.
                                Mauris tristique, lectus ut ultricies mattis, nulla orci accumsan velit, vitae tempor elit velit et eros.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>

            </Content>
            </ScrollView>
            
          </Container>
        
        <View style={[styles.button]}>
            <TouchableOpacity 
                onPress={this.toggleModal}
                style={[styles.signIn, {borderColor: '#0066ff', borderWidth: 1, marginTop: 8}]}
            >
                <Text style={[styles.textSign, {color: '#0066ff'}]}>Skip</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width: '98%', marginLeft: '1%', marginTop: '2%'}}>
                <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                    <Text style={[styles.textSign, {color: '#ffffff'}]}>Apply now!</Text>
                </LinearGradient>
            </TouchableOpacity>       
          
        </View>

        </Modal>
        
    </Container> */}