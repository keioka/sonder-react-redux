import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router'
import Home from './container/home'

describe('Container::Home', function(){
  
  function renderDoc () {
    return shallow(<Home />)
  }

  it('renders questions', function(){
    let doc = renderDoc()
    let HomeCont = doc.find(Link)

    expect(HomeCont.length).to.equal(props.questions.size + 1)
  })
})
