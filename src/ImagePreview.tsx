import React from "react"
import styled from "styled-components"

interface Props {
  url: string
  className?: string
  index: number
  selectImage: Function
}

export default class ImagePreview extends React.Component<Props> {
  render() {
    const {
      url,
      className,
      index,
      selectImage
    } = this.props

    return (
      <DivContainer className={className} >
        <div
          className="ImagePreview--image"
          onClick={() => selectImage(index)}
          style={{backgroundImage: `url(${url})`}}  />
      </DivContainer>
    )
  }
}

const DivContainer = styled.div`
  border: 1px solid lightgray;
  padding: 20px;

  .ImagePreview--image {
    width: 200px;
    height: 200px;
    background-repeat:no-repeat;
    background-position: center;
    background-size: contain;
    background-color: white;
  }
`
