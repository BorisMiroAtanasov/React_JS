import { useEffect } from "react";

const Contacts = () => {
   // useEfect is a function which executed - mount or update if we have a dependency
  useEffect(() =>{       
    //console.log('mount or update');  
    const timeOutId = setTimeout(() =>{
      console.log('2 seconds');
    },2000)


    //unmount - clean up function - its execute exatcly befor we leave the render 9 it will cleean from react V-dom)
    return () => {
      //console.log(' on unmount');
      clearTimeout(timeOutId)
    }

  },[])
  return (
    <>
      <h2>Contacts Page</h2>

      <label htmlFor="">Title</label><br />
      <input type="text" /> <br />
      <label htmlFor="">Description</label><br />
      <textarea name="" id="" cols="30" rows="10"></textarea> <br />
      <input type="submit" />
    </>
  );
};

export default Contacts;
