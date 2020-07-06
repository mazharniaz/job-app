import React, { Component } from 'react';
import { 
    View, 
    Button,
    Text,
    ActivityIndicator
} from 'react-native';
import { Container, Content, Accordion } from "native-base";
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export default class FAQScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {}
    }
  }

  componentDidMount() {

    axios.get('http://production.myquickshift.com/app_api/faqs_api')
          .then((response) => {
            // console.log(response.data.status, "------> console log FAQ")
            this.setState({
                isLoading: false,
                data: response.data.status
           })
        }, (error) => {
          console.log(error,"------> console log FAQ error");
        });
  }

  render(navigation) {

    let newArray = []

    if(this.state.isLoading) {
      return(
        <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
          <Spinner type='FadingCircleAlt' color='#0066ff' />
        </View>
      )
    } else {
        this.state.data.forEach(element => {
            console.log(element)
            newArray.push({title: element.question, content: element.answer})
        });
        return(
            <Container>
            <Content padder>
              <Accordion
                dataArray={newArray}
                icon="add"
                expandedIcon="remove"
                iconStyle={{ color: "#0066ff" }}
                expandedIconStyle={{ color: "grey" }}
              /> 

              <Text style={{textAlign: 'center', marginTop: '10%'}}>If your question is not answered, please email @myquickshift.com</Text>
            </Content>
          </Container>
        )
    }
  }
} 