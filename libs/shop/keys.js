import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts/shop/pages/keys');

export function getKeyBundles() {
  const fs = require('fs');
  const fileNames = fs.readdirSync(postsDirectory);
  const allCategories = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const id = fileName.replace(".md", "")

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {id, ...matterResult.data};
  });

  return allCategories.sort((a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  });
}