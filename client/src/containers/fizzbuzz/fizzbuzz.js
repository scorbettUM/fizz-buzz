import React, { Component } from 'react'
import { FizzBuzzGame} from '../../components'
import { getData } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sleep } from '../../utilities'

class FizzBuzz extends Component {
    componentDidMount = () => {
      this.props.getData()
    }
    render(){
      return(
        <FizzBuzzGame />
      )
    }
}

const mapStateToProps = ({ fizzBuzz }) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FizzBuzz)
