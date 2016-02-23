var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
      return {
          value: ''
      };
    },

    clear: function(){
        this.setState({
            value: ''
        })
    },
    onChange: function(e){
        this.setState({value: e.target.value})
    },
    render: function(){
        return(
            <div className="form-group">
                <input type="text" className="form-control" placeholder={this.props.type+ " Name"} onChange={this.onChange} value={this.state.value}/>
            </div>
        );
    }
});