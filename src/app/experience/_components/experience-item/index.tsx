interface Project {
      name: string;
      description: string;
    }

export interface ExperienceItemProps {
  company: string;
  position: string;
  jalaliDate: {
    start: string;
    end: string;
  };
  englishDate: {
    start: string;
    end: string;
  };
  description: string;
  projects: Project[];
}

const ExperienceItem = ({
  company,
  position,
  jalaliDate,
  englishDate,
  description,
  projects,
}: ExperienceItemProps) => {
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold">{company}</h3>
          <p className="text-sm text-gray-500">{position}</p>
          <p className="text-sm text-gray-500">
            {jalaliDate.start} - {jalaliDate.end}
          </p>
          <p className="text-sm text-gray-500">
            {englishDate.start} - {englishDate.end}
          </p>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex flex-col gap-2">
          {projects.map((project) => (
            <div key={project.name}>
              <h4 className="text-lg font-bold">{project.name}</h4>
              <p className="text-sm text-gray-500">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
