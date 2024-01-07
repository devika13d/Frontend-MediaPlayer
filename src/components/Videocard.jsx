import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/allAPI';

function Videocard({ displayVideo, setDeleteVideoStatus }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
        setShow(true);
        //3 data nee d to be inserted 1.caption 2.link 3.timestamp
        const { caption, embededLink } = displayVideo;
        const today = new Date;
        console.log('---today', today);
        let timeStamp = new Intl.DateTimeFormat('en-us', {
            year: 'numeric',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(today)
        console.log(timeStamp);
        let videoDetails={
            caption:caption,
            embededLink:embededLink,
            timeStamp:timeStamp
        }
        await addToHistory(videoDetails)
    }

    console.log(displayVideo);
    const removeVideo = async (id) => {
        const response = await deleteVideo(id);
        setDeleteVideoStatus(true)
    }
    return (
        <>
            <Card style={{ width: '18rem', height: '350px' }} onClick={handleShow}>
                <Card.Img variant="top" height="300px" width="100%" src={displayVideo.url} />
                <Card.Body>
                    <div className='d-flex align-items-center justify-content-evenly'>
                        <h6>{displayVideo.caption}</h6>
                        <Button variant='danger' className='ms-5'
                            onClick={() => removeVideo(displayVideo.id)}>
                            <i class="fa-solid fa-trash"></i>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{displayVideo.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="390" src={displayVideo.embededLink} title="Lyrical: Chammak Challo | Ra One | ShahRukh Khan | Kareena Kapoor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Videocard