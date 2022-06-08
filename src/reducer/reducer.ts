import { SearchResultResponse } from '../@types/searchResultResponse'

export interface AppState {
  isFocus: boolean
  isLoading: boolean
  searchResults?: SearchResultResponse[]
}

export enum AppActions {
  updateFocus,
  updateLoading,
  updateData,
  error,
}

export const initialState: AppState = { isFocus: false, isLoading: false }

export const appReducer = (
  state: AppState,
  action: {
    type: AppActions
    payload?: Partial<AppState>
  }
): AppState => {
  const { type, payload } = action

  switch (type) {
    case AppActions.updateFocus:
      return { ...state, isFocus: payload?.isFocus || false }
    case AppActions.updateLoading:
      return { ...state, isLoading: payload?.isLoading || false }
    case AppActions.updateData:
      return {
        ...state,
        searchResults: payload?.searchResults,
        isLoading: false,
      }
    case AppActions.error:
      return { isFocus: false, isLoading: false, searchResults: undefined }
  }
}
