import React, {Component} from 'react';
import {Modal, Button, ButtonToolbar} from 'react-bootstrap';

class GalleryModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalOpen: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(){
        this.setState({modalOpen : true});
    }

    hideModal(){
        this.setState({ modalOpen : false});
    }

    render(){
        return(
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={this.showModal}>
                View Details
                </Button>
            <Modal
            show = {this.state.modalOpen}
            onHide = {this.hideModal}
            dialogClassName="book-moreinfo"
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">{this.props.bookTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Author: </strong>{this.props.bookAuth}</p>
                <p><strong>Category: </strong>{this.props.bookCat}</p>
                <p><strong>Description:</strong></p>
                {this.props.bookDesc}
                
            </Modal.Body>
            <Modal.Footer>
                <Button href={this.props.bookLink} target="_blank" bsStyle="success">View On Google Books</Button>
                <Button onClick={this.hideModal} bsStyle="danger">Close</Button>
            </Modal.Footer>
            
            </Modal>
            </ButtonToolbar>
        )
    }
}
export default GalleryModal;