import ExperienceItem, {
  ExperienceItemProps,
} from "./_components/experience-item";

const experienceItems: ExperienceItemProps[] = [
  {
    company: "Company 1",
    position: "Position 1",
    jalaliDate: {
      start: "1402/01/01",
      end: "1402/01/01",
    },
    englishDate: {
      start: "2023/01/01",
      end: "2023/01/01",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci omnis, error necessitatibus quod sequi accusamus provident, pariatur commodi doloremque quibusdam a vel unde harum architecto eaque, fuga cumque laborum fugiat.",
    projects: [
      {
        name: "Project 1",
        description: "Description 1",
      },
      {
        name: "Project 2",
        description: "Description 2",
      },
    ],
  },
  {
    company: "Company 2",
    position: "Position 2",
    jalaliDate: {
      start: "1402/01/01",
      end: "1402/01/01",
    },
    englishDate: {
      start: "2023/01/01",
      end: "2023/01/01",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci omnis, error necessitatibus quod sequi accusamus provident, pariatur commodi doloremque quibusdam a vel unde harum architecto eaque, fuga cumque laborum fugiat.",
    projects: [
      {
        name: "Project 1",
        description: "Description 1",
      },
      {
        name: "Project 2",
        description: "Description 2",
      },
    ],
  },
];

const Page = () => {
  return (
    <div className="app-container">
      {experienceItems.map((item) => (
        <ExperienceItem key={item.company} {...item} />
      ))}
    </div>
  );
};

export default Page;
