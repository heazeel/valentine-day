import React from 'react';
import Prism from 'prismjs';

function StyleEditor(props) {
  const { code } = props;
  const highlightCode = Prism.highlight(code, Prism.languages.css);
  return (
    <div className="styleEditor">
      <style dangerouslySetInnerHTML={{ __html: code }}></style>
      <pre dangerouslySetInnerHTML={{ __html: highlightCode }}></pre>
    </div>
  );
}

export default StyleEditor;
