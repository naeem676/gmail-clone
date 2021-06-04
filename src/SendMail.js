import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import  Button  from '@material-ui/core/Button';
import  { useForm }  from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';



const SendMail = () => {
     const {register, handleSubmit, watch,  formState: { errors } } = useForm();
     const onSubmit = data => {
         db.collection('emails').add({
             to:data.to,
             subject:data.subject,
             message:data.message,
             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         })
         dispatch(closeSendMessage())
     }
     const dispatch = useDispatch();
    return (
        <div className='sendMail'>
            <div className="sendMail_header">
                <h3>New Message</h3>
                
                <CloseIcon onClick={()=> dispatch(closeSendMessage())} className="sendMail_close"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  placeholder="To:" type="text" {...register("to")}  required />
               
                
                <input {...register("subject")} placeholder="Subject:" type="text" required />
                
                
               
                <input {...register("message")} className="sendMail_message" placeholder="Message:" type="text" required />
                
                

                <div className="sendMail_options">
                        
                   <Button type="submit" className="sendMail_send">Send</Button>
                   
                
                
                </div>
            </form>
        </div>
    );
};

export default SendMail;