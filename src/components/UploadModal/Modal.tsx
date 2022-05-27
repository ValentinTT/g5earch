import clsx from 'clsx'
import React, { useEffect, useReducer } from 'react'

import Dropzone from 'react-dropzone'
import { animationClasses, gradient } from '../../constants/constants'
import { Action, Actions, dropState, initialState } from './modal.types'
import { reducer } from './ModalReducer'

const DropZoneModal: React.FC<{
  state: dropState
  dispatch: React.Dispatch<Action>
}> = ({ state, dispatch }) => {
  return (
    <Dropzone
      accept={{
        'text/plain': ['.txt'],
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
  )
}

const UploadButton: React.FC<{ state: dropState }> = ({ state }) => {
  return (
    <button
      className={clsx(
        `${
          state.file !== undefined
            ? clsx(gradient, 'text-white hover:shadow-md cursor-pointer')
            : 'bg-stone-300 dark:bg-stone-700 hover:shadow-none cursor-default dark:text-stone-300'
        }`,
        'font-semibold rounded-sm p-1',
        animationClasses
      )}
      onClick={() => {
        if (state.file === undefined) return
        console.log('Dale mandale')
      }}
    >
      Upload
    </button>
  )
}

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
        className={clsx(
          'h-full w-full absolute top-0 left-0',
          'bg-neutral-200 dark:bg-[#010817]'
        )}
        onClick={() => closeModal()}
      />
      {/* Modal */}
      <div
        className={clsx(
          'bg-white dark:bg-neutral-800 w-96',
          'z-50 container shadow-md rounded-md p-4'
        )}
      >
        <DropZoneModal state={state} dispatch={dispatch} />
        <div className='w-full flex justify-end pt-5'>
          <UploadButton state={state} />
        </div>
      </div>
    </div>
  )
}

export default Modal
