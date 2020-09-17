import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import ImagePreview from "./ImagePreview";
import LightBox from "./LightBox";

const IMAGE_URLS: Array<string> = [
  "https://lh3.googleusercontent.com/YEcRcfKUaq3mA3vHN_VcE2G4TN8ZzvyTJnjfOXgVHjfCO3u2zKjJmK6xTdEUm6q5F8OTTcTB7EoiZ4ePpknxq8Jz",
  "https://lh3.googleusercontent.com/0jGB0WpcTOTGUAjSkLZFjV2lox-9rZ1WhduWJYdXlThaaowvZVm7RfvB0F7S6SkaRZTA1L3-O8Ik5x47d4bt8riR",
  "https://lh3.googleusercontent.com/BTmQVc1Rmcee-9JxVcqSeklCQyZbEStqdO43NSnfY-FzhARq66bqJl2LRsvRydmyLGFwn9kxnhCpTmsf5kiUZ5xR=s300",
  "https://lh3.googleusercontent.com/wWyUN_8wHRMxhanvt9jm0ZYFfv72jLArs3AgJVBmSRODdaZ8I9vr9CRxtB9LNWV5uYfw5Yxaqktc7tgDm_sp6V7aNA=s700",
  "https://lh3.googleusercontent.com/yeqH5r517R1hEsotL3Yfk00ntwFdxmFf5s6gU9fui9d1BSnJVojsWkWbOqRN2JlaCt3oRKcbEMfaHKwJATRgHIEy",
]

function App() {
  const [isShowBox, setShowBox] = useState(false);
  const [showIndex, setShowIndex] = useState(-1);

  const selectImage = (index: number) => {
    setShowBox(index != -1);
    setShowIndex(index);
  }



  const handleKeyPress = (event: any) => {
    
    if(event.keyCode === 37) { // Left key is pressed
      setShowIndex(oldIndex => {
        let newIndex = oldIndex - 1;
        if(newIndex < 0)
          newIndex = 4;
        return newIndex;
      });
    }
    else if(event.keyCode === 39) { // Right key is pressed
      setShowIndex(oldIndex => {
        let newIndex = oldIndex + 1;
        if(newIndex > 4)
          newIndex = 0;
        return newIndex;
      });
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", handleKeyPress, false);
  }, []);

  console.log('showIndex', showIndex)
  return (
    <DivContainer>
      <div className="App--instructions">
        Click an image below
      </div>
      <div className="App--items-container">
        {IMAGE_URLS.map((imageUrl, index) =>
          <ImagePreview
            url={imageUrl}
            selectImage={selectImage}
            index={index}
            className="App--item"
            key={imageUrl} />
        )}
      </div>
      { isShowBox && <LightBox
            url={IMAGE_URLS[showIndex]}
            index={showIndex}
            selectImage={selectImage}
            className="App--item"
            />}
    </DivContainer>
  );
}

const DivContainer = styled.div`
  width: 100%;
  .App--instructions {
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .App--items-container {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    
    .App--item {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`

export default App;
