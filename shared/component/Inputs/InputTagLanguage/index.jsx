import React, { Component } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import _ from 'lodash'

// ************************
// Style
// ************************

import {
  inputTagLanguage,
  tags,
  tag,
  tagInput,
  tagInputField,
  selected,
  remove,
  suggestions,
} from './style.less'

const classNames = {
  tags: tags,
  tagInput: tagInput,
  tagInputField: tagInputField,
  selected: selected,
  tag: tag,
  remove: remove,
  suggestions: suggestions,
}


class InputTagLanguage extends Component {

  constructor() {
    super()
    const data = require('json!./languages.json')
    this.state = {
      tags: [],
      suggestions: data,
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAddition = this.handleAddition.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
  }

  handleDelete(i) {
    let tags = this.state.tags
    tags.splice(i, 1)
    this.setState({ tags: tags })
  }

  handleAddition(tag) {
    let tags = this.state.tags
    const tagList = _.map(tags, t => t.text)
    const isAlready = _.includes(tagList, tag)
    const isValid = _.includes(this.state.suggestions, tag)

    if (isAlready && !isValid) {
      return null
    }

    tags.push({
      id: tags.length + 1,
      text: tag,
    })

    this.setState({ tags: tags })
  }

  handleDrag(tag, currPos, newPos) {
    let tags = this.state.tags
    // mutate array
    tags.splice(currPos, 1)
    tags.splice(newPos, 0, tag)
    this.setState({ tags: tags })
  }

  render() {
    let tags = this.state.tags
    let suggestions = this.state.suggestions
    return (
    <div className={inputTagLanguage}>
      <ReactTags
        tags={tags}
        suggestions={suggestions}
        handleDelete={this.handleDelete}
        handleAddition={this.handleAddition}
        handleDrag={this.handleDrag}
        classNames={classNames}
      />
    </div>
    )
  }
}

export default InputTagLanguage
