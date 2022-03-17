import PinCard from './PinCard';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import InfiniteScroll from 'react-infinite-scroll-component';
import './PinGrid.css';

export default function PinGrid({ pins, boards }) {



    return (
        // <InfiniteScroll
        //         dataLength = { pins.length }
        //             loader = {<> Load More</>}
        // endMessage = {<> no more pins</>}>
        <div id="pinGrid">

            {pins.map(pin => (
                <PinCard pin={pin} boards={boards} key={pin.id} />
            ))}


        </div >
        // </InfiniteScroll>
    )
}