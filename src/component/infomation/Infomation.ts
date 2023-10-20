import { getRoot, newDiv } from '../../utils/html'
import type { AlertMethod } from '../alert'
import styles from './infomation.module.scss'

interface PropsInfo {
  title?: string
  type?: string | ('info' | 'success' | 'warning' | 'error')
  content: string
  hideIn?: number
  onClosed?: () => void
}

const ColorMap: Record<string, string> = {
  info: '#409eff',
  success: '#67c23a',
  warning: '#e6a23c',
  error: '#f56c6c',
}

export default function GmInfomation(props: PropsInfo): AlertMethod {
  const color = ColorMap[props.type || 'info'] || ColorMap.info
  const $wrapper = newDiv(styles.infomation)
  $wrapper.innerHTML = `<div class="${
    styles['infomation-header']
  }"><div class="${
    styles['infomation-status']
  }" style="background: ${color};"></div><div style="margin-left: .5em;">${
    props.title || '你有一条消息'
  }</div></div><div class="${styles['infomation-content']}">${
    props.content
  }</div>`

  const $root = getRoot('alert')

  const open = () => {
    $root.append($wrapper)
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const handle = (e: AnimationEvent) => {
          if (e.animationName === styles['infomation-move-in']) {
            $wrapper.removeEventListener('animationend', handle)
            resolve()
          }
        }
        $wrapper.addEventListener('animationend', handle)
      }, 0)
    })
  }

  const close = () => {
    return new Promise<void>((resolve) => {
      $wrapper.style.animationName = styles['infomation-move-out']
      const handle = (e: AnimationEvent) => {
        if (e.animationName === styles['infomation-move-out']) {
          $wrapper.remove()
          resolve()
        }
      }
      $wrapper.addEventListener('animationend', handle)
    })
  }

  return { open, close, $el: $wrapper }
}
