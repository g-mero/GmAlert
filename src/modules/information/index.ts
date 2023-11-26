import { animationendHandle, changeAnimation } from '../../utils/animateHandle'
import { getRoot, newDiv } from '../../utils/html'
import { SvgIcon } from '../../component/icons'
import type { MsgType, PropsMessage } from '../message'
import { MakeMsg } from '../../core/Msg'
import styles from './information.module.scss'

interface PropsInfo extends PropsMessage {
  headerLeft?: string
  headerRight?: string
  hideClose?: boolean
}

const ColorMap: Record<string, string> = {
  info: '#409eff',
  success: '#67c23a',
  warning: '#e6a23c',
  error: '#f56c6c',
}

export function GmInformation(props: PropsInfo): MsgType {
  const color = ColorMap[props.type] || ColorMap.info
  const $wrapper = newDiv(styles.info)
  $wrapper.innerHTML =
    `<div class="${styles['info-header']}"><div class="${
      styles['info-status']
    }" style="background:${color};"></div><span style="margin-right:auto;font-weight:600">${
      props.headerLeft || '公告'
    }</span><span style="font-size:.875em;opacity:.7">${
      props.headerRight || ''
    }</span>${
      props.hideClose ? '' : SvgIcon('close', styles['info-close'])
    }</div>` + `<div class="${styles['info-content']}">${props.content}</div>`

  const open = () => {
    getRoot(2).append($wrapper)
  }

  const close = (status: number) => {
    return new Promise<void>((resolve) => {
      changeAnimation($wrapper, styles['info-move-out'])

      animationendHandle($wrapper, (e: string) => {
        if (e === styles['info-move-out']) {
          $wrapper.remove()
          props.onClosed(status)
          resolve()
        }
      })
    })
  }

  if (!props.hideClose) {
    const $close = $wrapper.querySelector<HTMLElement>(
      `.${styles['info-close']}`,
    )!
    $close.onclick = () => {
      close(0)
    }
  }

  return { open, close, $el: $wrapper }
}

export const information = MakeMsg(GmInformation, 1)