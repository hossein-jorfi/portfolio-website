const DashboardPreview = () => {
  return (
    <div className="overflow-hidden w-full mt-20 mb-10 rounded-lg">
      <iframe
        src="https://ui.shadcn.com/view/dashboard-01"
        height="1000px"
        loading="lazy"
        className="bg-background no-scrollbar relative z-20 w-full"
      ></iframe>
    </div>
  );
};

export default DashboardPreview;
