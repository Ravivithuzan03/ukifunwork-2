var React = require("react");
var SchoolInfo = require("./SchoolInfo.jsx")
var AddSchool = require("./AddSchool.jsx");
var createReactClass = require('create-react-class');
// require('..')
module.exports = createReactClass({
   render:function(){
       return(<div className="container-fluid  ">

           <div className="row">
           <div className="col-md-6 offset-3 "><br/>
           <br/>
              <img className="img1"width="600px" height="400px" src="https://cdn.dribbble.com/users/2399102/screenshots/10728311/characterfinal.jpg"/>
           </div>
                <div className="col-md-6 offset-3">
                    <AddSchool />
                </div>
                </div>
                <div className="row">
                <div className="col-md-3"></div>
                    
                <div className="col-md-6">
                    {
                        this.props.schools.map(function(s,index){
                            return(
                                <SchoolInfo info={s} key={"school"+index} />
                            )         
                        })
                    }
                </div>
                {/* <div className="col-md-6"> */}
                    {/* <br /> */}
              {/* <img className="img1"width="400px" height="200px" src="data:image/png;base64,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"/> */}

                
                {/* {
                        this.props.date.map(function(d,index){
                            return(
                                <SchoolInfo info={d} key={"date"+index} />
                            )         
                        })
                    } */}
{/* </div> */}
                </div>
                </div>
       )
   } 
});
