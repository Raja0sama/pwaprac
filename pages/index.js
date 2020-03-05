import React, { Component } from 'react'
import { firebaseCloudMessaging } from '../utils/webPush'
import Head from 'next/head'

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : ""
    }
  }
  async componentDidMount() {
    const a = await firebaseCloudMessaging.init()
    if(a != undefined){
      console.log(a)
      this.setState({data : a})
    }
  }
  render() {
    return <div>
      <Head>
      <link rel="manifest" href="static/manifest.json" />

      </Head>
      Next.js with firebase cloud messaging.
      <input value = { this.state.data}/>
      </div>
  }
}

export default Index
