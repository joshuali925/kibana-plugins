import React, { Fragment } from 'react';
import GridLayout from 'react-grid-layout';
import Plt from './visualization/plt';
import { EuiFlexGroup } from '@elastic/eui';
import { EuiFlexItem } from '@elastic/eui';
import ReactResizeDetector from 'react-resize-detector';
import AnnotationsInput from './annotationsInput'
import { EuiFieldText } from '@elastic/eui';

class Dashboard extends React.Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      data: [
        {
          id: 'a',
          y: Array.from({ length: 15 }, () => Math.random() * 15),
        },
        {
          id: 'b',
          y: Array.from({ length: 15 }, () => Math.random() * 15),
        },
        {
          id: 'c',
          y: Array.from({ length: 15 }, () => Math.random() * 15),
        },
        {
          id: 'd',
          y: Array.from({ length: 15 }, () => Math.random() * 15),
        },
        {
          id: 'e',
          y: Array.from({ length: 15 }, () => Math.random() * 15),
        },
        {
          id: 'f',
          y: Array.from({ length: 15 }, () => Math.random() * 15),
        },
      ]
    };
  }

  render() {
    this.state.data.forEach(element => {
      this.state.children.push(React.createRef())
    });
    return (
      <Fragment>
        <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
          {this.state.data.map(({ id, y }, idx) => (
            <div key={id} data-grid={{ x: 4 * (idx % 4), y: 4 * Math.floor(idx / 4), w: 4, h: 10 }}>
              <Plt ref={this.state.children[idx]} y={y} />
              <ReactResizeDetector handleWidth handleHeight onResize={() => this.state.children[idx].current.autoResize()} />
            </div>
          ))}
        </GridLayout>

      </Fragment>
    );
  }
}

Dashboard.defaultProps = {

}

export default Dashboard