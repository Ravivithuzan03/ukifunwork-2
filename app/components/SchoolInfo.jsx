
// var React = require("react");

// module.exports = React.createClass({
//     render:function(){
//         return(
//             <div className="panel panel-default">
//                 <div className="panel-heading">
//                     {this.props.info.name}
//                 </div>
//                 <div className="panel-body">
//                     {this.props.info.tagline}
//                 </div>
//             </div>
//         )
//     }
// })



var React = require("react");
var actions = require("../actions/SchoolActions");
var createReactClass = require('create-react-class');
module.exports = createReactClass({
    deleteSchool: function(e){
        e.preventDefault();
        actions.deleteSchool(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default  sh1">
                <div className="panel-heading cc1 bt1">
                    {this.props.info.tagline}
                    <span className="pull-right text-uppercase delete-button"  onClick={this.deleteSchool}>&times;</span>
                </div>
                <div className="panel-body cc2"><strong>Match Type : </strong> {this.props.info.name}</div>
                <div className="panel-body cc2"><strong>Map Name : </strong> {this.props.info.place}</div>
                <div className="panel-body cc2"><strong> Match Time: </strong> {this.props.info.date}</div>


            </div>
        )
    }
})
