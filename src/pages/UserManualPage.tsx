import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, FileUp, Edit, Settings, Play, BarChart, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function UserManualPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'getting-started': true
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => toggleSection(id)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-gray-900">{title}</span>
        {expandedSections[id] ? (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronRight className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {expandedSections[id] && (
        <div className="pb-6 prose prose-indigo max-w-none">
          {children}
        </div>
      )}
    </div>
  );

  const CodeExample = ({ code }: { code: string }) => (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <SyntaxHighlighter language="text" style={docco}>
        {code}
      </SyntaxHighlighter>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center space-x-3 mb-8">
        <Book className="h-8 w-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-900">User Manual</h1>
      </div>

      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <Section id="getting-started" title="Getting Started">
            <p className="text-gray-700 mb-4">
              Welcome to PDF Test Maker! This offline application allows you to create, manage, and take tests securely. Here's how to get started:
            </p>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <FileUp className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                <span>Upload PDF files containing questions</span>
              </li>
              <li className="flex items-start">
                <Edit className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                <span>Create questions manually with LaTeX and image support</span>
              </li>
              <li className="flex items-start">
                <Settings className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                <span>Customize test settings and security features</span>
              </li>
              <li className="flex items-start">
                <Play className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                <span>Take tests in a secure environment</span>
              </li>
              <li className="flex items-start">
                <BarChart className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                <span>View and analyze test results</span>
              </li>
            </ul>
          </Section>

          <Section id="pdf-format" title="PDF Format Requirements">
            <p className="mb-4">
              When uploading a PDF file, it must follow this specific format for questions:
            </p>

            <CodeExample code={`Q1. What is the capital of France?
A. Berlin
B. Paris
C. London
D. Madrid
Answer: B

Q2. Calculate: [latex: 2x + 5 = 15]
A. [latex: x = 5]
B. [latex: x = 10]
C. [latex: x = 8]
D. [latex: x = 3]
Answer: A`} />

            <ul className="mt-4 space-y-2">
              <li>• Each question starts with "Q" followed by a number and period</li>
              <li>• Four options labeled A through D</li>
              <li>• Correct answer indicated by "Answer: " followed by the option letter</li>
              <li>• Optional LaTeX equations using [latex: ...] syntax</li>
              <li>• Blank lines between questions for readability</li>
            </ul>
          </Section>

          <Section id="latex-support" title="LaTeX Support">
            <p className="mb-4">
              The application supports LaTeX equations in both questions and answers. Here are some examples:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Basic Math</h4>
                <CodeExample code={`[latex: x^2 + y^2 = z^2]
[latex: \\frac{a}{b} = c]
[latex: \\sqrt{x + y}]`} />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Advanced Math</h4>
                <CodeExample code={`[latex: \\int_{0}^{\\infty} e^{-x^2} dx]
[latex: \\sum_{n=1}^{\\infty} \\frac{1}{n^2}]
[latex: \\lim_{x \\to 0} \\frac{\\sin x}{x}]`} />
              </div>
            </div>

            <p className="text-sm text-gray-600">
              Note: LaTeX equations are rendered using KaTeX for optimal performance.
            </p>
          </Section>

          <Section id="image-support" title="Image Support">
            <p className="mb-4">
              You can include images in your questions using the following methods:
            </p>

            <h4 className="font-medium mb-2">Manual Entry</h4>
            <ol className="space-y-2 mb-6">
              <li>1. Click the "Images" button in the manual entry page</li>
              <li>2. Select one or more image files</li>
              <li>3. Reference images in questions using: [image: filename.png]</li>
              <li>4. Images will be displayed above the question options</li>
            </ol>

            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="text-amber-800">
                <strong>Important:</strong> Upload images before referencing them in questions.
                Supported formats: PNG, JPG, JPEG, GIF
              </p>
            </div>
          </Section>

          <Section id="security-features" title="Security Features">
            <p className="mb-4">
              The application includes several security features to maintain test integrity:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Fullscreen Mode</h4>
                <ul className="space-y-1">
                  <li>• Required during test taking</li>
                  <li>• Exiting triggers a warning</li>
                  <li>• Second violation auto-submits the test</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Tab Switching Prevention</h4>
                <ul className="space-y-1">
                  <li>• Switching tabs is detected</li>
                  <li>• Counts as a security violation</li>
                  <li>• Test integrity is maintained</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Copy/Paste Prevention</h4>
                <ul className="space-y-1">
                  <li>• Copying test content is disabled</li>
                  <li>• Prevents sharing of questions</li>
                  <li>• Maintains question confidentiality</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="test-settings" title="Test Settings">
            <p className="mb-4">
              Customize your test with these settings:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Basic Settings</h4>
                <ul className="space-y-1">
                  <li>• Test title and description</li>
                  <li>• Time limit (1-240 minutes)</li>
                  <li>• Question shuffling</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Navigation Options</h4>
                <ul className="space-y-1">
                  <li>• Free navigation between questions</li>
                  <li>• Sequential navigation (one at a time)</li>
                  <li>• Question review before submission</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="results-analysis" title="Results & Analysis">
            <p className="mb-4">
              After test completion, you can:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">View Results</h4>
                <ul className="space-y-1">
                  <li>• Score and percentage</li>
                  <li>• Time taken</li>
                  <li>• Security violations</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Export Options</h4>
                <ul className="space-y-1">
                  <li>• Export results as CSV</li>
                  <li>• Detailed analysis</li>
                  <li>• Performance tracking</li>
                </ul>
              </div>
            </div>
          </Section>
        </div>

        <div className="bg-gray-50 p-6 rounded-b-lg">
          <div className="flex items-start">
            <Search className="h-5 w-5 text-indigo-600 mr-3 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Need Help?</h3>
              <p className="text-gray-600 mt-1">
                This manual covers the basic features. For additional help or to report issues,
                please visit our support page.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}