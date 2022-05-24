export enum DropStates {
  none,
  onDrag,
  accepted,
  rejected,
}

export enum Actions {
  onDragOver,
  onDragLeave,
  onDropAccepted,
  onDropRejected,
  Restart,
}

export interface dropState {
  file?: File
  message: string
  borderColor: string
}
export const dropInfo: { [key in DropStates]: string } = {
  [DropStates.none]: 'dark:border-slate-400',
  [DropStates.onDrag]: 'border-blue-700',
  [DropStates.accepted]: ' border-green-600',
  [DropStates.rejected]: 'border-red-700',
}

export const initialState: dropState = {
  message: `Drag 'n' drop some files here, or click to select files`,
  borderColor: dropInfo[DropStates.none],
}
