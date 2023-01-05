import React, {useState, MouseEvent} from 'react';
import './App.css'

type FilterType ='all' | 'RUBLES' | 'Dollars'
function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLES', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLES', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLES', value: 50, number: ' v1234567890'},
    ])
    const [Btn, setBtn] = useState<FilterType>('all')

    let currentMoney = money;
    if (Btn === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    if (Btn === 'RUBLES') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLES')
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setBtn(nameButton)
    }

    return (
        <div className={'App'}>
            <ul>
                {currentMoney.map((objectFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objectFromMoneyArr.banknots}</span> |
                            <span>{objectFromMoneyArr.value}</span> |
                            <span>{objectFromMoneyArr.number}</span>
                        </li>
                    );
                })}
            </ul>
            <button onClick={() => onClickFilterHandler('all')}>All</button>
            <button onClick={() => onClickFilterHandler('RUBLES')}>Ruble</button>
            <button onClick={() => onClickFilterHandler('Dollars')}>Dollar</button>
        </div>
    );
}

export default App;