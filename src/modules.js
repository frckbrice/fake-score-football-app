//* function : seach for a task in in the list of tasks */
export function searchFilterFn(e) {
  const textForSearch = e.target.value.toLowerCase();
  const tasksToRemove = document.getElementsByClassName("li-country");
  Array.from(tasksToRemove).forEach((task) => {
    const taskItemChild = task.firstChild.textContent;
    if (taskItemChild.toLocaleLowerCase().indexOf(textForSearch) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

/* {/* <select className="list list-none py-4 px-8 text-2xl font-Philosopher">
          {clubsData?.map((club) => (
            <option key={nanoid()} className="option-club bg-cyan-600">
              {club.name}
            </option>
          ))}
        </select>  */
