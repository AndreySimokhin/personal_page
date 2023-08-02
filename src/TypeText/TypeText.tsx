import React, { FC, useState, useEffect } from "react"

import styles from "./styles.module.css"

interface Props {
  interval?: number;
  fullText: string
}

const TypeText: FC<Props> = ({ interval = 200, fullText }) => {
  
  const [text, setText] = useState<string>("")
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(prev => prev + fullText[index])
        setIndex(prev => prev + 1)
      }, interval)
    }
  }, [index])

  return (
    <>{text}<span className={index == fullText.length ? styles.cursorBlink : undefined}>_</span></>
  )
}

export default TypeText