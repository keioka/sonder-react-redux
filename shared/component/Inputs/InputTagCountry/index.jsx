import React, { Component } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'

// ************************
// Style
// ************************

import {
  inputTagCountry,
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


class InputTagCountry extends Component {

  constructor() {
    super()
    const data = require('json!./country.json')

    this.state = {
      tags: [],
      suggestions: data,
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
  }

  handleAddition(tag) {
    let tags = this.state.tags
    tags.push({
        id: tags.length + 1,
        text: tag,
    });
    this.setState({ tags: tags })
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
      <div className={inputTagCountry}>
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

export default InputTagCountry
