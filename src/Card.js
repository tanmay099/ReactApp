import React, {Component} from 'react';

import Form from './UserForm';

import axios from 'axios';
require('jquery');





class ReplyForm extends React.Component {

 constructor(props){
          super(props);
           
     this.state = {
          time: '',
          data: [],
         // moment().format("MMM Do YY dddd") will return todays date from system time
          //data is of following type in databases
          //   {id:1,1:'',2:'morning',3:'afternoon',4:'evening',5:'night'},
          // {id:2,1:moment().format("MMM Do YY dddd"),2:'10:00AM',3:'2:00PM',4:'4:00',5:'7:00'},
          // {id:3,1:'',2:'10:30AM',3:'2:30PM',4:'4:30PM',5:'7:30PM'},
          // {id:4,1:'',2:'11:00',3:'3:00',4:'5:00PM',5:'8:00'},
          // {id:5,1:'',2:'11:30',3:'3:30PM',4:'5:30PM',5:'8:30PM'}
showReply: false,
     errorInput:''
     };
      this.handleTextChange = this.handleTextChange.bind(this);
      this.submitStepSignupForm = this.submitStepSignupForm.bind(this);
      this.appendColumn = this.appendColumn.bind(this);
   
}    

 onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }


  handleTextChange(e) {
    this.setState({ date: e.target.value });
    console.log(this.state.date);
  }




componentDidMount() {
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
 
     render(){
          let tableStyle = {
               align:"center"
          };
          let list = this.state.data.map(p =>{
               return (
                    <tr  key={p.id}>
                         {Object.keys(p).filter(k => k !== 'id').map(k => {
                               return (<td id="time"value={this.state.time} className="grey1" key={p.id+''+k}><button   onClick={this.onClick.bind(this)
                               } className="button">{p[k]}</button></td>);
                         })}
                    </tr>
          
               );
          });
          return (
          <div>
               <fieldset className="step-4">
                    <div className="heading">
                         <h3>Book your Appointment </h3>
                         
                    </div>
                    <div className="schedule padd-lr">
                         <table cellSpacing="3" id="mytable" style={tableStyle}>
                              <tbody>{list}</tbody>
                         </table>

                    </div>
         </fieldset>
 {this.state.showReply && <Form/>}
</div>
          );
     }
}























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