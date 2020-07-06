import React, { Component } from 'react';
import { Header, Icon, Item, Input } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage';

export default class HeaderSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    //static contextType = QueryContext;

    componentDidMount() {
        //console.log(this.contextType, '----> Context')
    }

    handleSearch(text) {
         console.log(text, '---> text')
        this.setState({
            query: text
        })

        this._storeSearchQuery(text)
    }

    _storeSearchQuery = async (text) => {
        try {
          
          let obj = {
            query: text,
          }
    
          await AsyncStorage.setItem(
            'query', JSON.stringify(obj)        
          );
        } catch (error) {
          alert(error)
        }
      };

    render(navigation) {
        return (
            <View></View>
            // <Header searchBar style={{backgroundColor: '#0066ff'}}>
            //     <Item style={{borderRadius: 20}}>
            //       <Icon name="md-search" size={20} style={{marginLeft: '3%'}} />
            //       <Input placeholder="Search" onChangeText={(text) => this.handleSearch(text)} />
            //     </Item>
            // </Header> 
        )
    }
}