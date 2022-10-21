import React from 'react'
import { ModalOverlay , ModalContainer } from '../../styles/FrontPage/DownloadModalElements'

const DownloadModal = ({showModal , toggleModalFalse}) => {
  return (
     <ModalOverlay showModal={showModal}  onClick={toggleModalFalse}>
        <ModalContainer></ModalContainer>
     </ModalOverlay>
  )
}

export default DownloadModal