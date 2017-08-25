import React, {Component} from 'react';

import axios from 'axios';
require('jquery');
var moment = require('moment');





class ReplyForm extends React.Component {
     constructor(props){
          super(props);
     this.state = {
          data: [],

     errorInput:''
     };
      this.submitStepSignupForm = this.submitStepSignupForm.bind(this);
      this.appendColumn = this.appendColumn.bind(this);
     //  this.editColumn = this.editColumn.bind(this);
}    componentDidMount() {
    axios.get("http://localhost:3001/api/booking")
      .then(res => {
        this.setState({ data: res.data });

      })
      .catch(error =>{console.log("error")});
  }

     submitStepSignupForm(id,value){
          console.log(this.props,'signup4');
            let newArray = this.state.data.slice();
            newArray.push({'id':id,'value':value});
          this.setState({col : newArray});
     }

     // append column to the HTML table
      appendColumn() {
               let obj =  this.state.data.map((p) => {
                    let size = Object.keys(p).length;
                    p[size+1] = '-';
                    return p;
               });
               this.setState({data:obj});
           }
     // edit Column
      editColumn(p,k,e) {
         let inputValue = e.target.innerText;
           let obj = p.p;
          let objId = obj.id;
          let position = k.k;
          let values = Object.values(obj);
          if(values.indexOf(inputValue) == -1){
               obj[position] = inputValue;
               let stateCopy = this.state.data;
               stateCopy.map((object,index) =>{
                    if(object.id == objId){
                         object = obj[position];
                    }
               })
               this.setState(stateCopy);
               this.setState({errorInput:''});
               console.log(stateCopy,'stateCopystateCopy');
          }else{
               this.setState({errorInput:'This period is also available in your list'});
               return false;
          }
           }

     render(){
          let tableStyle = {
               align:"center"
          };
          let list = this.state.data.map(p =>{
               return (
                    <tr className="grey2" key={p.id}>
                         {Object.keys(p).filter(k => k !== 'id').map(k => {
                               return (<td className="grey1" key={p.id+''+k}><a href="#"
                              value={k} >{p[k]}</a></td>);
                         })}
                    </tr>
               );
          });
          return (
               <fieldset className="step-4">
                    <div className="heading">
                         <h3>Book your Appointment</h3>
                         
                    </div>
                    <div className="schedule padd-lr">
                         <table cellSpacing="3" id="mytable" style={tableStyle}>
                              <tbody>{list}</tbody>
                         </table>

                    </div>

                    
               </fieldset>
          );
     }
}

// var ReplyForm = React.createClass({
//     render: function() {
//         var names = ['Jake', 'Jon', 'Thruster', 'Jon', 'Thruster', 'Jon', 'Thruster', 'Jon', 'Thruster', 'Thruster', 'Jon', 'Thruster'];
//         return (
//             <ul>
//                 {names.map(function(name, index){
//                     return <li key={ index }>{moment().fromNow()}</li>;
//                   })}
//             </ul>
//         )
//     }
// });













// var names = ['Jake', 'Jon', 'Thruster', 'Jon', 'Thruster', 'Jon', 'Thruster', 'Jon', 'Thruster', 'Thruster', 'Jon', 'Thruster'];

// class ReplyForm extends React.Component {

//  constructor(props) {
//   super(props);
//   // State
//   this.state = {
//     listOfAlarms: [15,, 15, 15, 'Thruster', 'Jon', 'Thruster', 'Jon', 'Thruster', 'Thruster', 'Jon', 'Thruster']
//   }
// }








//  renderwidget(){
//   var timestring1 = "2013-05-09T00:00:00Z";
// var timestring2 = "2013-05-09T02:00:00Z";
// var startdate = moment(timestring1);
// var expected_enddate = moment(timestring2);
// var returned_endate = moment(startdate).add(15, 'minutes');
// }
 
// render(){
// return(
//       <ul>
//           {names.map(function(name, index){
//                     return <li key={ index }> {moment().format('LT')}</li>;
//         })}
//             </ul>

//    )

    
//   }
// }


export default class Card extends Component {

  constructor() {
    super();
    this.state = {
      showReply: false
    }
  }
  


  onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }
  
  render() {
        const {card} = this.props;

        let travelTo = card.travelTo || 0, className = 'card';

        if (travelTo !== 0) {
            className += ' traveling';
        }

        return (
            <div className={className}>
                <div className='card-inner ripple'>
               
                    <div className="information">
                        <img src={card.image} className='card-image' alt='some alt'/>
                        <div className="value">{card.name}</div>
                         <div className="presentedTime">{card.ocupation}</div>
                        <div className="label">{card.experience}</div>
                       
                    </div>
                    <div className="panel">
                   <div className="label">{card.location}</div>
                   <div className="label">{card.fee}</div>
</div>  
                    <div>
                     <button onClick={this.onClick.bind(this)} className="button">Book Appointment</button>
                      {this.state.showReply && <ReplyForm/>}
                     
                    </div>
             
                             
</div>


            </div>
        
        )


    }       
}