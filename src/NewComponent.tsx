import './NewComponent.css';

type NewStudentsType = {
    id: number,
    name: string,
    age: number
}

type NewComponentType = {
    students: Array<NewStudentsType>
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentArray, index) => {
                return (
                    <div>
                        <li key={objectFromStudentArray.id}>id: {objectFromStudentArray.id} |
                            name: {objectFromStudentArray.name} | age: {objectFromStudentArray.age}</li>
                    </div>
                );
            })}
        </ul>
    );
}


type CarsType = {
    manufacturer: string,
    model: string
}
type CarsTypeNew = {
    cars: Array<CarsType>
}
export const NewCarTable = (props: CarsTypeNew) => {
    return (
        <div>
            {props.cars.map((objectFromCarsType, index) => {
                let num = index + 1;
                return (
                    <div>
                        <table>
                            <tr>
                                <td>{num}</td>
                                <td>{objectFromCarsType.manufacturer}</td>
                                <td>{objectFromCarsType.model}</td>
                            </tr>
                        </table>
                    </div>
                );
            })}
        </div>
    );
}


type heroes = {
    name: string,
    player: boolean,
    hp: number,
    mp: number,
    speed: number,
    damage: number,
    int: boolean,
    agi: boolean,
    str: boolean
}
type heroesSkill = {
    hotkey : string,
    name : string,
    mana_cost: number,
    damage: number,
    icon: string
}
type heroesSkillType = {
    skills : Array<heroesSkill>
}
type heroesNew = {
    heroes: Array<heroes>
}
export const Log = (props:heroesSkillType) => {
    return(
        <div>
            {props.skills.map((objecthHeroSkill,index)=>{
                return(
                    <div>{objecthHeroSkill.name}</div>
                );
            })}
        </div>
    );
}
export const HeroPortrete = (props: heroesNew) => {
    return (
        <div>
            {props.heroes.map((objectHeroes, index)=>{
                return(
                    <div className={'hero'}>
                        <span className={'hero_name'}>{objectHeroes.name}</span>
                        <p className={'hero_hp'}><span>Здоровье </span>{objectHeroes.hp}</p>
                        <p className={'hero_mp'}><span>Мана </span>{objectHeroes.mp}</p>

                    </div>
                );
            })}
        </div>
    );
}