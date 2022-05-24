import clsx from 'clsx'
import React, { useEffect, useReducer } from 'react'

import Dropzone from 'react-dropzone'
import { gradient } from '../../constants'
import { Actions, initialState } from './modal.types'
import { reducer } from './ModalReducer'

const Modal: React.FC<{
  isVisible: boolean
  closeModal: () => void
}> = ({ isVisible, closeModal }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: Actions.Restart })
  }, [isVisible])

  return (
    <div
      className={clsx(
        'absolute top-0 left-0 m-0 h-full w-screen flex justify-center items-center z-40 bg-transparent',
        `${isVisible ? 'visible' : 'hidden'}`
      )}
    >
      {/* Overlay */}
      <div
        className='h-full w-full bg-neutral-200 dark:bg-[#010817] absolute top-0 left-0'
        onClick={() => closeModal()}
      />
      {/* Modal */}
      <div
        className={clsx(
          'bg-white dark:bg-neutral-800 w-96 rounded-md p-4',
          'z-50 container shadow-md'
        )}
      >
        <Dropzone
          accept={{
            'file/*': ['.txt'],
          }}
          onDropAccepted={(acceptedFiles) =>
            dispatch({ type: Actions.onDropAccepted, file: acceptedFiles[0] })
          }
          onDragOver={() => dispatch({ type: Actions.onDragOver })}
          onDragLeave={() => dispatch({ type: Actions.onDragLeave })}
          onDropRejected={() => dispatch({ type: Actions.onDropRejected })}
          maxFiles={1}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className={clsx(
                `${state.borderColor}  border-dashed border-2 `,
                'rounded flex justify-center items-center p-2 transition-colors'
              )}
            >
              <input {...getInputProps()} />
              <p className='text-center dark:text-stone-300 text-neutral-900'>
                {state.message}
              </p>
            </div>
          )}
        </Dropzone>
        {/* Upload Button */}
        <div className='w-full flex justify-end pt-5'>
          <button
            className={clsx(
              `${
                state.file !== undefined
                  ? clsx(gradient, 'text-white hover:shadow-md cursor-pointer')
                  : 'bg-stone-300 dark:bg-stone-700 hover:shadow-none cursor-default dark:text-stone-300'
              }`,
              'font-semibold rounded-sm p-1  transition-all'
            )}
            onClick={() => console.log('Dale mandale')}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
