import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'

class Chart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: this.props.columns,
        type : 'pie'
      }
    })
  }  
 
  componentWillReceiveProps() {
    this.chart.load(this.props);  
  }
  
  componentWillUnmount() {
    this.chart = this.chart.destroy();  
  }
  
  render() {
    return(
      DOM.div({ ref: 'chart' })
    )
  }
}

export default Chart;
