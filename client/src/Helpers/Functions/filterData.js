const filterData =  (projects, columnCount, activeItem) => {
    const rowCount = Math.ceil(projects.length / columnCount);
    const projectsDisplay = [];
    let projectCount = 0;

    for (let i = 0; i < rowCount; i++) {
      let setOfColumns = [];
      while (projectCount < projects.length) {
        if (projects[projectCount]) {
          const tech = projects[projectCount].technologies.toUpperCase();
          if (
            activeItem === "ALL" ||
            tech.includes(activeItem) === true
          ) {
            setOfColumns.push(projects[projectCount]);
            if (setOfColumns.length === columnCount) {
              projectCount += 1;
              break;
            }
          }
        }
        projectCount += 1;
      }
      if (setOfColumns.length > 0) {
        projectsDisplay.push(setOfColumns);
      }
      if (projectCount >= projects.length) {
        break;
      }
    }

    const technologiesData = [];
    for (let project of projects) {
      const tech = project.technologies.split(" ");
      for (let t of tech) {
        if (
          technologiesData.includes(t.toUpperCase()) === false &&
          t.length > 0
        ) {
          technologiesData.push(t.toUpperCase());
        }
      }
    }

    technologiesData.sort();
    const data = [projectsDisplay, technologiesData]
    return data;
}

export default filterData; 