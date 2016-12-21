// ************************
// Modules
// ************************

import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory } from 'react-router'
import TimePicker from 'rc-time-picker'

// ************************
// Component
// ************************

import {
  Map,
  BtnPrimary,
  InputPlaceSearch,
  SelectHour,
  SelectMin,
} from '../../'

// ************************
// Style
// ************************

import {
  pagePostNew,
  pagePostNew__title,
  pagePostNew__subtitle,
  form,
  section,
  panleControl,
  timePicker,
  alert,
} from './style.less'

// *************************
// Assets
// *************************

import { locationHelper, timeModule } from '../../../utils'
const { addressFilter, transformLatLng } = locationHelper
const { fullYearToday, dateToday, monthToday } = timeModule
const today: string = `${fullYearToday}-${monthToday}-${dateToday}`

class PagePostNew extends Component {

  constructor() {
    super()
    this.state = {
      activeSection: 0,
      mapLocation: { lat: -37.2222, lng: 135.32322 },
      form: {
        name: '',
        location: {},
        date: today,
        hour: '',
        min: '',
        description: ''
      },
    }
    this.onSelectPlace = this.onSelectPlace.bind(this)
    this.onBackBtnClickHandler = this.onBackBtnClickHandler.bind(this)
    this.onFowardBtnClickHandler = this.onFowardBtnClickHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onChangeHour = this.onChangeHour.bind(this)
    this.onChangeMin = this.onChangeMin.bind(this)
  }

  componentWillMount() {
    if (!this.props.isLogined) {
      browserHistory.push('/')
    }
  }

  onSelectPlace(address) {
    const { label, location, place_id } = address
    const component = addressFilter(address.gmaps.address_components)
    this.setState({
      form: {
        ...this.state.form,
        name: label,
        location: Object.assign({}, component, transformLatLng(location), { place_id }),
      },
      mapLocation: location,
    })
  }

  onSubmitHandler(event) {
    event.preventDefault()
    const { date, hour, min, description, location } = this.state.form
    const datetime = `${date} ${hour}:${min} `
    const params = {
      datetime: date,
      description: description,
      location: location,
    }
    this.props.createNewPostRequest(params)
  }

  onBackBtnClickHandler(event) {
    event.preventDefault()
    const currentActiveSection: number = this.state.activeSection
    this.setState({
      activeSection: (currentActiveSection - 1) >= 0 ? currentActiveSection - 1 : currentActiveSection
    })
  }

  onFowardBtnClickHandler(event) {
    event.preventDefault()
    const currentActiveSection: number = this.state.activeSection
    this.setState({
      activeSection: (currentActiveSection + 1) < 3 ? currentActiveSection + 1 : currentActiveSection
    })
  }

  onChangeDate(event) {
    event.preventDefault()
    this.setState({
      form: {
        ...this.state.form,
        date: event.target.value,
      },
    })
  }

  onChangeHour(value) {
    this.setState({
      form: {
        ...this.state.form,
        hour: value,
      },
    })
  }

  onChangeMin(value) {
    this.setState({
      form: {
        ...this.state.form,
        min: value,
      },
    })
  }

  onChangeDescription(event) {
    event.preventDefault()
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        description: this.refs.description.value,
      }
    })
  }

  renderSectionOne() {
    return (
      <div>
        <section className={section}>
          <InputPlaceSearch onSelectPlace={this.onSelectPlace} initialValue={this.state.form.name} />
        </section>
      </div>
    )
  }

  renderSectionTwo() {
    const message = this.state.form.date !== '' ? <span>It is not valid</span> :  <span>It is valid</span>
    return (
      <div>
        <div className={alert}>{message}</div>
        <section className={section}>
          <input type="date" ref="date" defaultValue={this.state.form.date} min={today} onChange={this.onChangeDate} />
          <SelectHour onChangeHour={this.onChangeHour} />
          <SelectMin onChangeMin={this.onChangeMin} />
        </section>
      </div>
    )
  }


  renderSectionThree() {
    return (
      <section className={section}>
        <textarea name="" ref="description" id="" cols="30" rows="10" onChange={this.onChangeDescription} />
      </section>
    )
  }

  renderSection() {
    const { activeSection } = this.state
    switch (activeSection) {
      case 0:
        return this.renderSectionOne()
      case 1:
        return this.renderSectionTwo()
      case 2:
        return this.renderSectionThree()
      default:
        return null
    }
  }

  render() {
    return (
      <div className={pagePostNew}>
        <h5 className={pagePostNew__subtitle}>Tell people when and where you want to hangout</h5>
        <form className={form}>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {this.renderSection()}
          </ReactCSSTransitionGroup>
          <div className={panleControl}>
            <BtnPrimary btnText="Back" onClick={this.onBackBtnClickHandler} />
            { this.state.activeSection === 2 ?
              <BtnPrimary btnText="Submit" onClick={this.onSubmitHandler} /> :
              <BtnPrimary btnText="Next" onClick={this.onFowardBtnClickHandler} />
            }
          </div>
        </form>
      </div>
    )
  }
}

export default PagePostNew
