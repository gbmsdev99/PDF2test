import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface MathRendererProps {
  latex: string;
  block?: boolean;
}

export function MathRenderer({ latex, block = false }: MathRendererProps) {
  if (!latex) return null;
  
  try {
    return block ? (
      <BlockMath math={latex} />
    ) : (
      <InlineMath math={latex} />
    );
  } catch (error) {
    console.error('Failed to render LaTeX:', error);
    return <span className="text-red-500">Failed to render equation</span>;
  }
}