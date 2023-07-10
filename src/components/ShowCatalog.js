import React, { useEffect, useState } from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {
    const [programList, setProgramList] = useState([])
    const [watchList, setWatchList] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:8081/shows`)
        .then(r => r.json())
        .then(d => setProgramList(d))
    },[])
function addWatchList(id) {
    const foundShow = programList.find((show) => show.id === id)
    if(watchList.find((show) => show.id === id)) {
        return null
    } else {setWatchList([...watchList, foundShow]) }
}

function removeWatchList(id){
    setWatchList(watchList.filter((show) => show.id !== id))
}
function onShowDelete(id){
    console.log(id)
    setProgramList(programList.filter((show) => show.id !== id ))
    fetch(`http://localhost:8081/shows/${id}`, {
    method: 'DELETE',
    headers: {
    'Content-Type': 'application/json'
    }
    })

}
    return(
        <>
            <MyWatchList watchList={watchList} onShowClicked={removeWatchList} onShowDelete={removeWatchList}/>
            <hr/>
            <ShowList programList={programList} onShowClicked={addWatchList} onShowDelete={onShowDelete}/>
        </>
    );
}

export default ShowCatalog;