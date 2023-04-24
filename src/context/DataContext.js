import { createContext, useEffect, useState } from "react";
import {fakeFetch} from './Db';


export const VideoDataContext = createContext();

export const VideoDataProvider = ({children})=>{

    const [videoData, setVideoData] = useState([]);
    const [likedItem, setLikedItem] = useState([]);
    const [watchLater, setWatchLater] = useState([]);

    const getdata = async () =>{
        try{
            const response = await fakeFetch('https://example.com/api/videos');
            if(response.status === 200){
                setVideoData(response.data.videos)
            }
        }
        catch(error){
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getdata()
    }, [])

    const handleLike = (selectedId) =>{
        const filteredLikedData = videoData.find(({id}) => id === selectedId)
        setLikedItem((likedItem) => [...likedItem, filteredLikedData])
    }
    
    
    const handleWatchLater = (selectedId) =>{
        const filteredLikedData = videoData.find(({id}) => id === selectedId)
        setWatchLater((watchLater) => [...watchLater, filteredLikedData])
    }


    return(
        <VideoDataContext.Provider value={{videoData, handleLike, handleWatchLater, likedItem, watchLater }}>
            {children}
        </VideoDataContext.Provider>
    )
}