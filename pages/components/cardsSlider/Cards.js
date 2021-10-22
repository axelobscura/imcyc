import React, { Component } from 'react'

function CardData() {
  const rtn = [{
      title: "CARNATIONS",
      desc: "Carnations require well-drained, neutral to slightly alkaline soil, and full sun. Numerous cultivars have been selected for garden planting.[4] Typical examples include 'Gina Porto', 'Helen', 'Laced Romeo', and 'Red Rocket'.",
      url: "https://cdn.pixabay.com/photo/2017/07/24/02/40/pink-roses-2533389__340.jpg"
    }, {
      title: "STREET",
      desc: "A street is a public thoroughfare (usually paved) in a built environment.",
      url: "https://cdn.pixabay.com/photo/2017/08/01/20/06/storm-2567670__340.jpg"
    }, {
      title: "CAMERA",
      desc: "Camera captures memories for you and saves them permanently.",
      url: "https://cdn.pixabay.com/photo/2017/08/07/01/41/magnifying-glass-2598507__340.jpg"
    },  {
      title: "BREAKFAST",
      desc: "Breakfast provides many benefits to our health and wellbeing.",
      url: "https://images.pexels.com/photos/8524/food-spoon-milk-strawberry.jpg?h=350&auto=compress&cs=tinysrgb"
    }]
  return rtn;
}

class Cards extends Component {
  render() {
    const cardData = CardData();
    return (
      <section>
      {
        cardData.map((card, i) => {
          return (
            <div className="card" id="card" style={this.props.cardStyle} key={i}>
              <p className="title">{card.title}</p>
              <p className="desc">{card.desc}</p>
              <a href="#"><img src={card.url} /></a>
            </div>
          )
        })
      }
      </section>
    )
  }
}

export default Cards;