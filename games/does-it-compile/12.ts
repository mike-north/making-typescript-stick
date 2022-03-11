export function handleClick(evt: Event) {
  const $element = evt.target as HTMLInputElement
  if (this.value !== '') {
    this.value = this.value.toUpperCase()
  }
}
