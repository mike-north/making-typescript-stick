declare global {
  interface Document { // << something about interfaces!
    mozCancelFullScreen?: () => void
  }
}


export function cancelFullScreen() {
  if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  }
}
