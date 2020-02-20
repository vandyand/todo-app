import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ListForm from './ListForm';
import ItemForm from './ItemForm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement(el)


export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  listOrItem = () => {
    if(this.props.listOrItem) {
      return(<ListForm submitHandler={this.props.submitHandler} closeButton={this.closeModal} addOrUpdate={this.props.addOrUpdate} state={this.props.state}/>)
    }
    else {
      return(<ItemForm submitHandler={this.props.submitHandler} closeButton={this.closeModal}  addOrUpdate={this.props.addOrUpdate}/>)
    }
  }

  render() {
    return (
      <div>
        <button className={this.props.addOrUpdate ? 'buttonAdd' : 'buttonUpdate'} onClick={this.openModal}>{this.props.addOrUpdate ? 'Add' : 'Edit'}</button>
        <Modal isOpen={this.state.modalIsOpen} style={customStyles} ariaHideApp={false}>
          {this.listOrItem()}
        </Modal>
      </div>
    );
  }
}
