import React from 'react';
import ShowCard from './ShowCard';

function MyWatchList({watchList, onShowClicked, onShowDelete}) {

    return(
        <div className="watch-list-container">
          {watchList.map((show) => <ShowCard key={show.id} show={show} onShowClicked={onShowClicked} onShowDelete={onShowDelete}/>)}
        </div>
    )
}

export default MyWatchList;