import ExperienceItem, {
  ExperienceItemProps,
} from "./_components/experience-item";

const experienceItems: ExperienceItemProps[] = [
  {
    company: "Maroon Moshaver Arjan",
    position: "Front End Developer",
    date: {
      start: "Azar 1402",
      end: "Ordibehesht 1404",
    },
    description:
      "The website on which I collaborated with this team was a cryptocurrency trading platform, and I held the responsibility for the application logic. This encompassed managing all routing, API calls, authorization processes, as well as real-time functionalities such as websockets or Pusher events, among other features.",
    projects: [
      {
        name: "Botlyzer",
        description:
          "The website on which I collaborated with this team was a cryptocurrency trading platform, and I held the responsibility for the application logic. This encompassed managing all routing, API calls, authorization processes, as well as real-time functionalities such as websockets or Pusher events, among other features.",
      },
      {
        name: "Botlyzer 2",
        description:
          "The website on which I collaborated with this team was a cryptocurrency trading platform, and I held the responsibility for the application logic. This encompassed managing all routing, API calls, authorization processes, as well as real-time functionalities such as websockets or Pusher events, among other features.",
      },
    ],
  },
  {
    company: "Company 2",
    position: "Position 2",
    date: {
      start: "Ordibehesht 1404",
      end: "Current",
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
