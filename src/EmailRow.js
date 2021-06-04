import React from 'react';
import './EmailRow.css';
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

const EmailRow = ({id, title, subject, description, time}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const openMail = () => {
       dispatch(
           selectMail({
            id, title, subject, description, time
               
           })
       )
       history.push('/email')
    }
    return (
        <div onClick={openMail} className='emailRow'>
            <div className="emailRow_option">
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>
            <div className="emailRow_title">
                <h3>{title}</h3>
            </div>
            <div className="emailRow_message">
                <h4>{subject}{" "}
                <span className="emailRow_description">{description}</span>
                </h4>
            </div>
            <p className="emailRow_time">
                {time}
            </p>
            
        </div>
    );
};

export default EmailRow;