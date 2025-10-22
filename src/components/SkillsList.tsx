const SkillsList = () => {
  return (
    <>
      <div className="space-y-3">
        <h3 className="font-bold text-2xl lg:text-3xl dark:text-gray-200">Frontend</h3>

        <ul className="text-lg font-medium text-gray-600 dark:text-gray-300">
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
        <h3 className="font-bold text-2xl lg:text-3xl dark:text-gray-200">Backend</h3>

        <ul className="text-lg font-medium text-gray-600 dark:text-gray-300">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Compass</li>
          <li>Render</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-2xl lg:text-3xl dark:text-gray-200">Deployment</h3>

        <ul className="text-lg font-medium text-gray-600 dark:text-gray-300">
          <li>Vercel</li>
          <li>Render</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-2xl lg:text-3xl dark:text-gray-200">Tools</h3>

        <ul className="text-lg font-medium text-gray-600 dark:text-gray-300">
          <li>Git</li>
          <li>GitHub</li>
          <li>Postman</li>
          <li>Compass</li>
          <li>Figma</li>
          <li>VSCode</li>
        </ul>
      </div>
    </>
  );
};

export default SkillsList;