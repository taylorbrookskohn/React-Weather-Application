import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { getPanelValues } from '../actions';
import { connect } from 'react-redux';


class UpdateButt extends Component {

    render() {
        return (
            <div className="update-butt">
                <Button bsStyle="primary"
                        onClick={this.props.getPanelValues}>
                    Update
                </Button>
            </div>
        );
    }
}

UpdateButt.propTypes = { getPanelValues: PropTypes.func };

export default connect(null, { getPanelValues })(UpdateButt);
