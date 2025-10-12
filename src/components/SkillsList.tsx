const SkillsList = () => {
  return (
    <>
      <div className="space-y-3">
        <h3 className="font-bold text-2xl">Frontend</h3>

        <ul className="text-lg font-medium text-gray-600">
          <li>Next.js</li>
          <li>React.js</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-2xl">Backend</h3>

        <ul className="text-lg font-medium text-gray-600">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>SQL</li>
        </ul>
      </div>

      <div className="xxxs:mx-auto xxs:mx-0 space-y-3">
        <h3 className="font-bold text-2xl">Tools</h3>

        <ul className="text-lg font-medium text-gray-600">
          <li>Git</li>
          <li>GitHub</li>
          <li>Postman</li>
          <li>Compass</li>
          <li>Prisma</li>
          <li>Figma</li>
          <li>VSCode</li>
        </ul>
      </div>
    </>
  );
};

export default SkillsList;