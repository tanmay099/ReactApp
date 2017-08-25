import React, {Component} from 'react';
import Card from './Card';
import axios from 'axios';
import AddUserForm from './UserForm'

    



export default class CardsList extends Component {

    constructor(props){
        super(props);
         this.state = {
      cards: []
};
    }

 

    componentDidMount() {
    axios.get("http://localhost:3001/api/doctors")
      .then(res => {
        this.setState({ cards: res.data });

      })
      .catch(error =>{console.log("error")});
  }

  
    render() {
        return <div className="cards-list">
            {this.state.cards.map((card, i)=>{
                return <Card
                    key={card.id}
                    card={card}
                  />
            })}
        </div>
    }
}


