import React, { Component } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import _ from 'lodash'

// ************************
//  Style
// ************************

import {
  inputTagInterest,
  tags,
  tag,
  tagInput,
  tagInputField,
  selected,
  remove,
  suggestions
} from './input-tag-interest.less'

const classNames = {
  tags: tags,
  tagInput: tagInput,
  tagInputField: tagInputField,
  selected: selected,
  tag: tag,
  remove: remove,
  suggestions: suggestions
}


class InputTagInterest extends Component {

  constructor() {
    super()
    const data = []
    this.state = {
      tags: [],
      suggestions: data,
      warning: ""
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAddition = this.handleAddition.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
  }

  componentDidMount() {
    this.props.onChange(this.state.tags)
  }

  handleDelete(i) {
    let tags = this.state.tags
    tags.splice(i, 1)
    this.setState({ tags: tags })
    this.props.onChange(this.state.tags)
  }

  handleAddition(tag) {
    let tags = this.state.tags
    const tagList = _.map(tags, t => t.text)
    const isAlready = _.includes(tagList, tag)
    const isKeyword = _.words(tag).length < 4
    
    if (isAlready) {
      this.setState({ warning: "The tag is already exsist" })
    }

    if (!isKeyword) {
      this.setState({ warning: "The tag should be less than 4 words" })
    }

    if (!isAlready && isKeyword) {
      tags.push({
        id: tags.length + 1,
        text: tag,
      })

      this.setState({ tags: tags, warning: "" })
      this.props.onChange(this.state.tags)
    }
  }

  handleDrag(tag, currPos, newPos) {
    let tags = this.state.tags
    // mutate array
    tags.splice(currPos, 1)
    tags.splice(newPos, 0, tag)
    this.setState({ tags: tags })
  }

  render(){
    let tags = this.state.tags
    let suggestions = this.state.suggestions

    return (
      <div className={inputTagInterest}>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          classNames={classNames}
        />
        {this.state.warning}
      </div>
    )
  }
}

export default InputTagInterest
