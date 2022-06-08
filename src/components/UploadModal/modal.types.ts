export enum DropStates {
  none,
  onDrag,
  accepted,
  rejected,
}

export interface DropState {
  file?: File
  message: string
  borderColor: string
}

export enum ModalActions {
  onDragOver,
  onDragLeave,
  onDropAccepted,
  onDropRejected,
  Restart,
}

export interface ModalAction {
  type: ModalActions
  file?: File
}

export const dropInfo: { [key in DropStates]: string } = {
  [DropStates.none]: 'dark:border-slate-400 border-slate-400',
  [DropStates.onDrag]: 'border-blue-700',
  [DropStates.accepted]: ' border-green-600',
  [DropStates.rejected]: 'border-red-700',
}

export const initialDropState: DropState = {
  message: `Drag 'n' drop some files here, or click to select files`,
  borderColor: dropInfo[DropStates.none],
}
