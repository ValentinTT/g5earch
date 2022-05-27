import {
  Action,
  Actions,
  dropInfo,
  dropState,
  DropStates,
  initialState,
} from './modal.types'

export function reducer(state: dropState, action: Action): dropState {
  const { type, file } = action
  switch (type) {
    case Actions.onDragLeave:
      if (state.file === undefined) return initialState
      return {
        ...state,
        borderColor: dropInfo[DropStates.accepted],
      }
    case Actions.onDragOver:
      return {
        ...state,
        borderColor: dropInfo[DropStates.onDrag],
      }
    case Actions.onDropAccepted:
      return {
        file,
        message: `File ${file?.name} successfully load`,
        borderColor: dropInfo[DropStates.accepted],
      }
    case Actions.onDropRejected:
      return {
        file: undefined,
        message: `Couldn't load file`,
        borderColor: dropInfo[DropStates.rejected],
      }
    case Actions.Restart:
      return initialState
  }
}
