import React from "react";
import { useState } from "react";
import { getAllTask, getAllActivity, updateTask} from "../utils/HandleApi";
import { useEffect } from "react";
//import Multiselect from 'multiselect-react-dropdown';

const Ta = ({ text}) => {
  //const [checkedOptions, setCheckedOptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isactModalOpen, setIsactModalOpen] = useState(false);
  const [activity, setActivity] = useState([]);
  const [task, setTask] = useState([])
  const [selectedItems, setSelectedItems] = useState([]);
  const [taskId, setTaskId] = useState("");
  const[isUpdating, setIsUpdating] = useState(false)
  const [tex,setText] = useState("")
  
  useEffect(() => {
    getAllTask(setTask)
    getAllActivity(setActivity)
  }, [])



  const openModal = (event) => {
    setIsModalOpen(true);
    setIsactModalOpen(true)
    const searchText = text;
    const matchingTask = task.find((task) => task.text === searchText);
    if (matchingTask) {
      console.log(`Match found for "${searchText}": ${matchingTask._id}`);
      setTaskId(matchingTask._id)
      setSelectedItems(matchingTask.selectedItems);
    } else {
      console.log(`No match found for "${searchText}"`);
    }
  };
/*
  const openModalact = (e) => {
    e.preventDefault();
    setIsactModalOpen(true);
  };*/

  const closeModal = () => {
    setIsModalOpen(false);
    setIsactModalOpen(false)
  };
  /*
  const closeactModal = (e) => {
    e.preventDefault();
    setIsactModalOpen(false);
  };
*/
  const handleCheckboxChange = (itemId) => {
    
    const selectedItem = activity.find((item) => item._id === itemId);
    if (selectedItems.some((item) => item._id === itemId)) {
      // Item is already selected, so remove it
      setSelectedItems((prevSelectedItems) => prevSelectedItems.filter((item) => item._id !== itemId));
    } else {
      // Item is not selected, so add it
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, selectedItem]);
    }
    };

    React.useEffect(() =>{
        if (isModalOpen) {

            updateTask(taskId, text, setTask, setText, setIsUpdating, selectedItems)

      } 
      
    }, [selectedItems, isModalOpen,taskId,text]);


  return (
    <div className="task">
      <div className="main">
        <div className="text"><b>{text}</b></div>
        <button onClick={openModal} className="modal-btn">Edit</button>
      </div>
      


      {isModalOpen && (
        <div className="modal">
          <form>
            <label>
              Your task:
              <input type="text" value={text} readOnly={true} />
            </label>
            <div className="modal-body">
              <div className="modal-top">
                <h2>Items</h2>
              </div>

                        {isactModalOpen && (
                          <div className="inner-modal">
                            <form>
                              <div>
                                <h1>Items</h1>
                                <div>
                                  {activity.map((item) => (
                                    <div key={item._id}>
                                      <label>
                                        <input type="checkbox" onChange={() => handleCheckboxChange(item._id)} checked={selectedItems.some((selectedItem) => selectedItem._id === item._id)} />
                                        {item.text}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>
                          </form>
          <button onClick={closeModal} className="modal-btn">Save</button>
        </div>
      )}


              {selectedItems.map((item, index) => (
                  <p key={index}>{item.text}</p>
                ))}
            </div>
    </form>
       
         <button onClick={closeModal} className="modal-btn">Close</button>
          
        </div>
        
      )}
      {tex}, {isUpdating}
    </div>
  );
};

export default Ta;