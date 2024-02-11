import React from "react";
import Entry from "./Entry";
import emojijpedia from "../emojipedia"

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojijpedia.map(createEntry)}
      </dl>
    </div>
  );
}

function createEntry(page){
   return <Entry 
   id = {page.id}
   key = {page.key}
   emoji = {page.emoji}
   name = {page.name}
   meaning = {page.meaning}   
   />
}   

export default App;
