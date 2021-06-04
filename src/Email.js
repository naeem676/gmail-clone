import React from 'react';
import './Email.css';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

const Email = () => {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);
    return (
        <div className='email'>
            <div className="email_tools">
                <div className="email_toolsLeft">
                        <IconButton onClick={() => history.push('/')}>
                            <ArrowBackIcon/>
                        </IconButton>
                        <IconButton>
                            <MoveToInboxIcon/>
                        </IconButton>
                        <IconButton>
                            <ErrorIcon/>
                        </IconButton>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton>
                            <EmailIcon/>
                        </IconButton>
                        <IconButton>
                            <WatchLaterIcon/>
                        </IconButton>
                        <IconButton>
                            <CheckCircleIcon/>
                        </IconButton>
                        <IconButton>
                            <LabelImportantIcon/>
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                </div>
                <div className="email_toolsRight">
                        <IconButton>
                            <UnfoldMoreIcon/>
                        </IconButton>
                        <IconButton>
                            <PrintIcon/>
                        </IconButton>
                        <IconButton>
                            <ExitToAppIcon/>
                        </IconButton>
                </div>
            </div>
            <div className="email_body">
                <div className="email_bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className='email_important'/>
                    <p>{selectedMail?.title}</p>

                    <p className="email_time">{selectedMail?.time}</p>
                </div>
                <div className="email_message">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Email;