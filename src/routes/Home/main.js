import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'
import DBdata from '../../components/dbdata.js'

const config = {
  apiKey: 'AIzaSyCOz9mOrW6yrJsH7Eit7H2zAfY4pjmc7is',
  authDomain: 'assignment2-594f7.firebaseapp.com',
  databaseURL: 'https://assignment2-594f7.firebaseio.com',
  projectId: 'assignment2-594f7',
  storageBucket: 'assignment2-594f7.appspot.com',
  messagingSenderId: '225726515474'
}

export default class Home extends Component {
  componentWillMount = () => {
    firebase.initializeApp(config)
  }
  componentDidMount = () => {
    firebase.database().ref('/').once('value').then(snapshot => {
      this.props.directConnect(snapshot.val())
      if(snapshot.val()) {
        this.props.fireConnect()
      }
    })
  }
  render = () => {
    const { fireConnect, database, show } = this.props
    console.log(database)
    return (
      <div className='wrapper'>
        {show ? <div className='wrapper'><div className='header2'><p>Praktice.ai Assignment</p></div><DBdata data={database} /></div>
        : <div className='wrapper'>
          <div className='header'>
            <p>Praktice.ai Assignment</p>
          </div>
          <div className='doodle' />
          <div className='button' onClick={fireConnect}><p>Ready to rock!</p></div>
        </div>
        }
      </div>
    )
  }
}

Home.propTypes = {
  fireConnect: PropTypes.func,
  database: PropTypes.object,
  directConnect: PropTypes.func,
  show: PropTypes.bool
}
