type SkillType = {
  name: string,
  img: string
};

const skillsData: SkillType[] = [
  { name: 'Next.js', img: 'nextjs.webp' },
  { name: 'React.js', img: 'react.webp' },
  { name: 'TypeScript', img: 'typescript.webp' },
  { name: 'JavaScript', img: 'javascript.webp' },
  { name: 'HTML', img: 'html.webp' },
  { name: 'CSS', img: 'css.webp' },
  { name: 'Tailwind', img: 'tailwind.webp' },
  { name: 'Node.js', img: 'node.webp' },
  { name: 'Express.js', img: 'express.webp' },
  { name: 'MongoDB', img: 'mongo.webp' },
  { name: 'SQL', img: 'sql.webp' },
  { name: 'PostgreSQL', img: 'postgres.webp' },
  { name: 'Git', img: 'git.webp' },
  { name: 'GitHub', img: 'github.webp' },
  { name: 'Prisma', img: 'prisma.webp' },
  { name: 'Mongo Compass', img: 'compass.webp' },
  { name: 'Postman', img: 'postman.webp' },
  { name: 'Figma', img: 'figma.webp' },
  { name: 'VSCode', img: 'vscode.webp' },
];

const carouselSkills = [ ...skillsData, ...skillsData ];

export default carouselSkills;