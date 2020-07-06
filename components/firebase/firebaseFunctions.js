import React, { Component } from 'react'
//import firebase from './firebase'

// this.setState({
//     messages: [
//       {
//         _id: 1,
//         text: 'Hello developer!',
//         createdAt: new Date().getTime(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ],
//   })


class firebaseFunctions {
    constructor() {
        
    }

    send = messages => {
        messages.array.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message)
        });
    }

    parse = message => {
        const { text, timestamp, user } = message.val();
        const { key: _id } = message;
        const createdAt = new Date(itemstamp);

        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)))
    } 

    // off() {
    //     this.db.off()
    // }

    get db() {
        return firebase.database().ref('messages')
    }

    get uid() {
        return (firebase.currentUser || {}).uid
    }

}