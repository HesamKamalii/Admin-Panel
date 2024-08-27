import React, { useMemo, memo } from "react";

const FilteredNotes = memo (({ notesArray }) => {
    console.log('main function run');
  return(
    <div>
      {notesArray.filter((note) => {
          return note.title.toLowerCase().includes("js");
        })
        .map((note) => {
          return (
            <div key={note.id}>
              <li>
                {note.id} - {note.title}
              </li>
            </div>
          );
        })}
    </div>
  );
})

export default FilteredNotes