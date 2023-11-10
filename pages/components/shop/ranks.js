import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'posts/shop/pages/ranks');

export function getRankBundles() {
  const fs = require('fs');
  const fileNames = fs.readdirSync(postsDirectory);
  const allRanks = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const id = fileName.replace(".md", "")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const htmlString = marked(matterResult.content);

    return {id, ...matterResult.data, 'content': htmlString};
  });

  return allRanks.sort((a, b) => {
    if (a.order < b.order) {
      return 1;
    } else {
      return -1;
    }
  });
}