This is a simple task management application built with React and TypeScript. The app allows users to view tasks, filter them by status or priority, update the status of tasks, and delete tasks.

Reflection Questions   
How did you ensure unique keys for your list items? 
I ensured unique keys for each list item by using the id property from each task object as the key when rendering the TaskItem component inside the TaskList. Since every task in the initialTasks array was given a unique id string, React could efficiently track each task’s position in the DOM. This avoids rendering issues and prevents React warnings about missing keys. Using id is more reliable than using the index of the array, especially if tasks are added or removed, because the index might change while the ID remains consistent.

What considerations did you make when implementing the filtering functionality?
For the filtering functionality, I considered how to allow users to filter by both status and priority independently. I designed two dropdowns, each controlled by local state in the TaskFilter component, and passed the selected values back up to the App component using the onFilterChange callback. In the App, I applied these filters centrally to the task list before rendering, which kept the logic clean and avoided scattering filter logic across multiple components.

How did you handle state updates for task status changes?
When updating the status of a task, I handled state updates in an immutable way. The TaskItem component triggered an onStatusChange callback whenever the user selected a different status from the dropdown. This callback was defined in the App component, where I used the setTasks function with a map operation to create a new array of tasks. Only the task with the matching id was updated with the new status, while the others remained unchanged. This ensures React detects the change and re-renders correctly, without mutating the original state.

What challenges did you face when implementing conditional rendering?
The main challenge with conditional rendering was ensuring the UI provided helpful feedback when there were no tasks to display. This could happen if the user deleted all tasks or applied filters that excluded every task. To solve this, I added a check in the TaskList component: if the tasks array was empty, it would return a message saying “No tasks available” instead of rendering an empty list. 

References:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event 
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select 
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 