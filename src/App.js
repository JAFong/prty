import React, { Component } from 'react';
import Team from './Team/team.js';

class App extends Component {
  render() {
    var teamMembers = [
      {
        name: "Jaxiss",
        categories: {
          class: "Druid",
          role: "healer",
          iLevel: 851
        }
      },
      {
        name: "Lucrose",
        categories: {
          class: "Death Knight",
          role: "Tank",
          iLevel: 839
        }
      },
      {
        name: "Kels",
        categories: {
          class: "Priest",
          role: "DPS",
          iLevel: 848
        }
      }
    ]
    return (
      <div>
        <person-list />
        <Team members={teamMembers}/>
      </div>
    );
  }
}

export default App;
