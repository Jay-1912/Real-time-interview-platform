import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function CodeEditor({ onChange, language, code, theme }) {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };
  return (
    <div className="">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
}

export default CodeEditor;
