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
          data-testid="lightbox"
          role="lightbox"
          style={{backgroundImage: `url(${url})`}}  />
      </DivContainer>
    )
  }
}

const DivContainer = styled.div`
  .LightBox--overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background: gray;
    opacity: 0.4;
  }

  .LightBox--image {
    position: fixed;
    background-repeat:no-repeat;
    background-position: center;
    background-size: contain;
    background-color: white;

    @media screen and (max-width: 600px) {
      width: 290px;
      height: 290px;
      top: calc(50% - 145px);
      left: calc(50% - 145px);
    }

    @media screen and (min-width: 601px) {
      width: 400px;
      height: 400px;
      top: calc(50% - 200px);
      left: calc(50% - 200px);
    }
  }
`
