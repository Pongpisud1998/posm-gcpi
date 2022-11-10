import React, { Component } from 'react';
import classNames from 'classnames';

class ControlPoints extends Component {

  renderPoints() {
    const { controlpoints, selectedImage } = this.props;
    const points = controlpoints.points.filter(p => {
      return p.img_name === selectedImage;
    });

    if (!points.length) return (
      <li>No points...</li>
    );

    return points.map((pt) => (
      <li key={`gcp-tick-${pt.id}`} className={classNames(
        'active', 'point', { 'edit': pt.isAutomatic }
      )} />
    ));
  }

  DownloadExample() {
    const link = document.createElement("a");
    link.href = 'https://mapedia.co.th/prod/posm-gcpi/file/gcp_example.txt';
    link.download = 'gcp_example.txt';
  }

  render() {
    return (
      <div className='control-points-i'>
        <div class="row">
          <div>
            <h3>Ground Control Points</h3>

            <ul>
              {this.renderPoints()}
            </ul>
          </div>
          <div>
            <button onClick={this.DownloadExample()}>Download Example</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ControlPoints;
