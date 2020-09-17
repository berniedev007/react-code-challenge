import React from "react"
import styled from "styled-components"

interface Props {
  url: string
  className?: string
  index: number
  selectImage: Function
}

export default class LightBox extends React.Component<Props> {
  render() {
    const {
      url,
      className,
      selectImage
    } = this.props

    return (
      <DivContainer className={className}>
        <div
          className="LightBox--overlay" onClick={() => selectImage(-1)}/>
        <div
          className="LightBox--image"
          style={{backgroundImage: `url(${url})`}}  />
      </DivContainer>
    )
  }
}

const DivContainer = styled.div`
  .LightBox--overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: gray;
    opacity: 0.4;
  }

  .LightBox--image {
    position: absolute;
    width: 400px;
    height: 400px;
    background-repeat:no-repeat;
    background-position: center;
    background-size: contain;
    background-color: white;
    top: calc(50% - 200px);
    left: calc(50% - 200px);
  }
`
