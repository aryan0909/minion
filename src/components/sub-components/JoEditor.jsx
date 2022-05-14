import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const config = {
  buttons: [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "|",
    "align",
    "source",
    "link",
    "image",
    "unlink",
  ],
};

function JoEditor({ setValue }) {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      onChange={(content) => setValue(content)}
      config={config}
    />
  );
}

export default JoEditor;
