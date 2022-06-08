import {
  ModalAction,
  ModalActions,
  dropInfo,
  DropState,
  DropStates,
  initialDropState,
} from './modal.types'

export function reducer(state: DropState, action: ModalAction): DropState {
  const { type, file } = action
  switch (type) {
    case ModalActions.onDragLeave:
      if (state.file === undefined) return initialDropState
      return {
        ...state,
        borderColor: dropInfo[DropStates.accepted],
      }
    case ModalActions.onDragOver:
      return {
        ...state,
        borderColor: dropInfo[DropStates.onDrag],
      }
    case ModalActions.onDropAccepted:
      return {
        file,
        message: `File ${file?.name} successfully load`,
        borderColor: dropInfo[DropStates.accepted],
      }
    case ModalActions.onDropRejected:
      return {
        file: undefined,
        message: `Couldn't load file`,
        borderColor: dropInfo[DropStates.rejected],
      }
    case ModalActions.Restart:
      return initialDropState
  }
}
