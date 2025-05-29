const style = (el: HTMLElement, prop: string): string => {
  return getComputedStyle(el).getPropertyValue(prop)
}

const overflow = (el: HTMLElement): string => {
  return style(el, 'overflow') + style(el, 'overflow-y') + style(el, 'overflow-x')
}

export function scrollParent (el: HTMLElement): HTMLElement | Window {
  let parent = el

  while (parent) {
    if (parent === document.body || parent === document.documentElement) {
      break
    }

    if (!parent.parentNode) {
      break
    }

    // Find the parent node that meets the scrolling condition.
    if (/(scroll|auto)/.test(overflow(parent))) {
      return parent
    }

    parent = parent.parentNode as HTMLElement
  }

  return window
}
