//************************
// Modules
//************************

import React, { Component } from 'react'

//************************
// Component
//************************

import {
  CardPostWide
} from '../index'


//************************
// Style
//************************

import {
  sectionFriendsList,
  sectionFriendsList__title
} from './section-posts-list.less'

//*************************
// Assets
//*************************



class SectionPostsList extends Component {
  
  static defaultProps = {
    posts: []
  }
  
  constructor(){
    super()
  }
  
  

  render(){
    
    const { posts } = this.props 
    const cards = posts.map((post)=>{  
      return <CardPostWide key={post.id} post={post} />
    })
    
    return (
      <div className={sectionFriendsList}>
        <h3 className={sectionFriendsList__title}>Posts</h3>
        {cards}
      </div>
    )
  }
}

export default SectionPostsList
