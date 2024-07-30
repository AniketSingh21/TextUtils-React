import React from 'react'

function Alerts(props) {
  return (
  props.alert &&  <div className='alert alert-success alert-dismissible fade show' role="alert">
 <center><strong>{props.alert.type} {props.alert.message}</strong></center>
</div>
  )
}
export default Alerts
