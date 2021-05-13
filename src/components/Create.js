import React from 'react';


function Create({ title }) {
  return (
    <div className="maxWidth">
      <div >{title}</div>
      <div>
        <input placeholder="Title" />
      </div>
      <div>
        <textarea rows={4} />
      </div>
      <div>
      <button>취소</button>
      <button type="primary">생성</button>
      </div>
    </div>
  );
}

export default Create;
