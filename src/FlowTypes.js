// @flow
import React from 'react'

type Props = {
  id: number,
  text: string,
  count: number
}

class FlowTypes extends React.Component<Props> {

  render() {
    return (
      <div>
        {this.props.id} x {this.props.count}: {this.props.text}
      </div>
    );
  }
}



