import { StatusBarAlignment, type StatusBarItem, window } from 'vscode'

let statusBarItem: StatusBarItem

const aop = () => {
  if (!statusBarItem) {
    statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left)
  }
}

export default {
  get value () {
    aop()
    return statusBarItem
  },
}

export const showStatusBarItem = (text: string, time = 5000) => {
  try {
    statusBarItem.text = text
    statusBarItem.show()
    time > 0 && hideStatusBarItem(time)
  } catch {}
}

let hideTimer: ReturnType<typeof setTimeout>
export const hideStatusBarItem = (delay = 5000) => {
  try {
    clearTimeout(hideTimer)
    hideTimer = setTimeout(() => statusBarItem.hide(), delay)
  } catch {}
}
