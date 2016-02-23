var React = require('react');
var NameField = require('./NameField.jsx');
var EmailField = require('./EmailField.jsx');

module.exports = React.createClass({
    onSubmit: function(e){
        if(!this.refs.fieldEmail.state.valid){
            alert('Fill in the emailfield, you dummy');
        }else {

            console.log('It worked');
            this.refs.fieldEmail.clear();
            this.refs.fieldName.clear();
        }
    },
    render: function() {
        return(
            <div className="row">
                <div className="col-sm-3">
                    <div className="panel panel-default">
                        <div className="panel-body">
                                <NameField type="First" ref="fieldName"/>
                                <EmailField ref="fieldEmail"/>
                                <button className="btn btn-default" onClick={this.onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});