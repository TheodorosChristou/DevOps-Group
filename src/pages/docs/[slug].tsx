// pages/docs/[slug].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


interface MarkdownPageProps {
  content: string;
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({ content }) => {
  return (
    <div id="special-page-container">
      <ReactMarkdown remarkPlugins={[gfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // List all markdown files in the "docs" directory
  const files = fs.readdirSync(path.join(process.cwd(), 'docs'));

  // Create paths for each markdown file
  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<MarkdownPageProps> = async ({ params }) => {
   //@ts-ignore comment
  const { slug } = params;
  const content = fs.readFileSync(path.join(process.cwd(), 'docs', `${slug}.md`), 'utf-8');

  return {
    props: {
      content,
    },
  };
};

export default MarkdownPage;
