import React, { Component } from 'react'
import Geosuggest from 'react-geosuggest'

import {
  inputPlaceSearch,
  geosuggest,
  geosuggest__suggests,
  geosuggest__input,
  hidden,
} from './input-place-search.less'


class InputPlaceSearch extends Component {

  constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
  }

  render() {
    const style = {
      'input': { width: '100%' },
    }

    const types = ['(cities)']

    return (
      <Geosuggest
        className={geosuggest}
        suggestsHiddenClassName={hidden}
        style={style}
        initialValue={this.props.initialValue}
        autoActivateFirstSuggest={true}
        placeholder={"Type city name and select one"}
        types={types}
        onSuggestNoResults={this.noResultHandler}
        onSuggestSelect={this.props.onSelectPlace}
      />
    )
  }
}

export default InputPlaceSearch
