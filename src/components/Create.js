import React, { useState } from 'react';
import styled from 'styled-components';
import MarkDown from './MarkDown';

const markDown = `
  # 헤딩

  *굵게*

  ~줄긋기~

  \`\`\`
  코드블럭
  \`\`\`
  * test

  글자 \`배경색\`   
  *기울이기*
  ### 작은헤더
  > 인용문
`;
const MarkDwonStyle = styled.div`
  max-width : 1100px;
`;
function Create({ title }) {
  const [mainText, setMainText] = useState("");
  const onChange = (e) => {
    setMainText(e.target.value);
  }
  return (
    <div className="maxWidth">
      <div >{title}</div>
      <div>
        <input placeholder="Title" />
      </div>
      <div>
        <textarea onChange={onChange} rows={4} value={mainText}/>
      </div>
      <div>
      <button>취소</button>
      <button type="primary">생성</button>
      <div style={{width: "100%", maxWidth: "1000px", border : "1px solid #424242"}}>
        <MarkDwonStyle>
          <MarkDown>{mainText == "" ? markDown : mainText}</MarkDown>          
        </MarkDwonStyle>
      </div>
      </div>
    </div>
  );
}

export default Create;
