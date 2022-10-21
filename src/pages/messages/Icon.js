import React from 'react'
import { useDispatch } from 'react-redux'
import { archiveMessage, unArchiveMessage, starMessage, unStarMessage } from '../../redux/actions/messages'
const Icon = ({isArchived, item}) => {
   const dispatch = useDispatch()
    const handleOnClick = () => {
        console.log('clicked')
        if(isArchived){
            dispatch(archiveMessage(item.id))
        }else{
            dispatch(unArchiveMessage(item.id))
        }
    }

  return (
    <div>
       { isArchived  ? (
                        <Icon name="archive"   style={{color: "blue", fontSize: "1.5rem"}}  onClick={()=>(dispatch(archiveMessage(item.id)))} /> ) : (
                        <Icon name="archive"  style={{color: "purple", fontSize: "1.5rem"}} size="35" onClick={()=>(dispatch(unArchiveMessage(item.id)))} />
                        )
    }
    </div>
  )
}

export default Icon