"use client";
import {Button} from "@/components/ui/button";
import {CheckCheck, Copy} from "lucide-react";
import React, {useState} from "react";

interface copyClientProps {
  value?: string;
}

function CopyButton({value}: copyClientProps) {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    if (!value) return;

    setIsCopied(true);

    navigator.clipboard.writeText(value);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const Icon = isCopied ? CheckCheck : Copy;

  return (
    <Button
      onClick={onCopy}
      variant="ghost"
      disabled={!value || isCopied}
      size="sm"
    >
      <Icon className="h-4 w-4"></Icon>
    </Button>
  );
}

export default CopyButton;
