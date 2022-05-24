import clsx from 'clsx'
import { useState } from 'react'
import { FaUpload } from 'react-icons/fa'
import CircleButton from '../CircleButton'
import { gradient } from '../../constants'
import Modal from './Modal'

const UploadModal = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  return (
    <>
      <Modal
        isVisible={isModalVisible}
        closeModal={() => setModalVisible(false)}
      />
      <CircleButton
        position='bottom-0 right-0'
        bg={clsx(` text-white ${gradient}`)}
        onClick={() => {
          console.log(': ', isModalVisible)
          setModalVisible(!isModalVisible)
        }}
      >
        <FaUpload className='text-white text-base' />
      </CircleButton>
    </>
  )
}

export default UploadModal
