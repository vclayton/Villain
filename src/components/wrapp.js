import React, { Component } from 'react'
import { ReaderContext } from '@/context'
import clsx from 'clsx'

class Wrapp extends Component {
  static contextType = ReaderContext

  constructor(props) {
    super(props)
    this.container = React.createRef()
  }

  render() {
    const { width, height } = this.props
    const { fullscreen, autoHideControls } = this.context.state
    const size = { width, height }

    return (
      <div
        ref={this.container}
        className={clsx(
          'villain',
          fullscreen && 'villain-fullscreen',
          !autoHideControls && 'villain--static'
        )}
        style={size}
      >
        {this.props.children(this.container ? this.container.current : null)}
      </div>
    )
  }
}

export default Wrapp
