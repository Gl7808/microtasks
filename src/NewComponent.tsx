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
                return(
                    <div>
                         <li key={objectFromStudentArray.id}>id: {objectFromStudentArray.id} | name: {objectFromStudentArray.name} | age: {objectFromStudentArray.age}</li>
                    </div>
                );
            })}
        </ul>
    );
}


type CarsType = {
    manufacturer: string,
    model : string
}
type CarsTypeNew = {
    cars : Array<CarsType>
}
export const NewCarTable = (props:CarsTypeNew) => {
    return(
        <div>
            {props.cars.map((objectFromCarsType, index)=> {
                let num = index + 1;
                return(
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
