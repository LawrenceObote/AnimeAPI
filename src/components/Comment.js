import React from 'react'
import firebase from '../firebase'

export const Comment = ({ comment }) => {
  //useState and variable declerations
  const[name, setName] = React.useState(comment.name);

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('comments').doc(comment.id).delete()
  }

  const onUpdate = () => {
    const db = firebase.firestore()
    //set function
    db.collection('comments').doc(comment.id).set({...comment, name})
  }


  return (
      <div>
        <input value={name} onChange={e => {
          setName(e.target.value)}}/>
          <button onClick={onUpdate}>Update</button>
          <button onClick={onDelete}>Delete</button>
        

      </div>
  )
}

export default Comment