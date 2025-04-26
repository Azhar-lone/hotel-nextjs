"use client";
import { useState } from "react";
import { CopyIcon, CheckCheckIcon } from "lucide-react";

const CopyButton = ({ children }: { children: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText(children)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((err) => console.error("Failed to copy text:", err));
  };

  return (
    <div
      className="w-[100%] md:w-1/2 relative font-bold   items-center  cursor-pointer p-5 border rounded-2xl"
      onClick={handleCopy}
    >
      <div className="absolute right-3 top-1">
        {copied ? <CheckCheckIcon /> : <CopyIcon />}
      </div>

      {children}
    </div>
  );
};

export default CopyButton;
