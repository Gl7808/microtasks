import React, {useState} from 'react';
import {HeroPortrete, Log, NewCarTable, NewComponent} from "./NewComponent";

function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    const heroes = [
        {
            name: 'oracle',
            player: true,
            hp: 520,
            mp: 320,
            speed: 290,
            damage: 47,
            int: true,
            str: false,
            agi: false,
            skills: [
                {hotkey: 'q', name: 'fortunes end', mana_cost: 120, damage: 200, icon: ''},
                {hotkey: 'w', name: 'fate edict', mana_cost: 120, damage: 200, icon: ''},
                {hotkey: 'e', name: 'purifying flames', mana_cost: 120, damage: 200, icon: ''},
                {hotkey: 'r', name: 'false promise', mana_cost: 120, damage: 200, icon: ''}
            ]
        },
        {
            name: 'earthshaker',
            player: true,
            hp: 520,
            mp: 320,
            speed: 290,
            damage: 47,
            int: true,
            str: false,
            agi: false,
            skills: [
                {hotkey: 'q', name: 'fissure', mana_cost: 120, damage: 200, icon: ''},
                {hotkey: 'w', name: 'totem', mana_cost: 120, damage: 200, icon: ''},
                {hotkey: 'e', name: 'spell echo', mana_cost: 120, damage: 200, icon: ''},
                {hotkey: 'r', name: 'echo slam', mana_cost: 120, damage: 200, icon: ''}
            ]
        }
    ]
    const [students, setStudents] = useState([
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
        ]
    )
    return (
        <div>
            <NewComponent students={students}/>
            <NewCarTable cars={topCars}/>
            <HeroPortrete heroes={heroes}/>
            <Log skills={heroes[1].skills}/>


        </div>
    );
}

export default App;