import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) =>  {
    if(window.confirm('Are you sure you want to delete?')){

      setFeedback(feedback.filter((item) => {
        return item.id !== id
      }))

     
      //arrow without curlybrasses is imeditly return
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
      
    </>
  );
}

export default App;
