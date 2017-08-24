import React, {Component} from 'react';
require('jquery');
var TimekitBooking = require('timekit-booking');

var widget = new TimekitBooking();




class ReplyForm extends React.Component {


 renderwidget(){
    widget.init({
        name:     'Doc Brown',
        email:    'marty.mcfly@timekit.io',
        apiToken: 'XT1JO879JF1qUXXzmETD5ucgxaDwsFsd',
        calendar: '22f86f0c-ee80-470c-95e8-dadd9d05edd2',
        avatar:   '../misc/avatar-doc.jpg',
        app:      'back-to-the-future',
        bookingGraph: 'confirm_decline',
        bookingFields: {
          'phone': {
            enabled: true
          }
        },
        localization: {
          timeDateFormat: '24h-dmy-mon'
        },
        callbacks: {
          createEventSuccessful: function (data) { console.log('createEventSuccessful deprecated', data) },
          createBookingSuccessful: function (data) { console.log('createBookingSuccessful', data) }
        }
      })}   


  render(){
    return (

       <div id="bookingjs" className="card">{this.renderwidget()}</div>

    )
  }
}


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