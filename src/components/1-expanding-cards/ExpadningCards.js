import React, { useState } from 'react'
import './ExpandingCards.css'

export const ExpadningCards = () => {

    const sampleData = [
        {
            id: 0,
            state: 'active',
            background: "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
            title: "Explore The World"
        },
        {
            id: 1,
            state: '',
            background: "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
            title: "Wild Forest"
        },
        {
            id: 2,
            state: '',
            background: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')",
            title: "Sunny Beach"
        },
        {
            id: 3,
            state: '',
            background: "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
            title: "City on Winter"
        },
        {
            id: 4,
            state: '',
            background: "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
            title: "Mountains - Clouds"
        },
    ]

    const [data, setData] = useState(sampleData)


    let newArr = [...data]

    const openPanel = (index) => {
        const currentStatus = newArr[index].state;

        newArr.map(i => i.state = '')

        newArr.forEach(() => {
            if (newArr[index].state === currentStatus) {
                newArr[index].state = 'active'
            } else {
                newArr[index].state = 'active'
            }
        })




        /*
        data.forEach(p => {
            if (p.state < 0) {
                [p.state] = [p.state]
             p.state *= -1;   
            }
        })
        */



        console.log(newArr);
        setData(newArr)

        // let findIndex = newArr.findIndex((obj => obj.id === index))

        // console.log(findIndex);




        // newArr[index].state = 'active'



        // let newArr = [...data]
        // newArr.find(data => data[index].state === '').state = 'active'
        // newArr[index].state = 'active'
        // newArr.filter(arr => arr.state !== 'active')[index].state = '';
        // newArr.forEach(el => console.log(el))
        //console.log(output);

        //setData(newArr)

        // setData(data[index].state = 'active');
        // console.log(data[index].state)
        // console.log(index);
    }


    // openPanel(panel.id)
    return (
        <div className="container">
            {data ? data.map(panel => (
                <div onClick={() => openPanel(panel.id)} key={panel.id} className={`panel ${panel.state}`} style={{ backgroundImage: `${panel.background}` }}>
                    <h3>{panel.title}</h3>
                </div>
            )) : null}
        </div>
    )
}

export default ExpadningCards