import React from "react";
import Swal from "sweetalert2";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      createdAt: "",
      maxChar: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const value = event.target.value;
    const countLimit = 50;
    if (value.length <= countLimit) {
      this.setState(() => {
        return {
          title: value,
          maxChar: countLimit - value.length,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        maxChar: 50,
      };
    });

    Swal.fire("Success!", "Data berhasil disimpan!", "success");
  }

  render() {
    return (
      <div className="note-input">
        <h2 className="note-input__title">Buat catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            <span>Sisa karakter: {this.state.maxChar}</span>
          </p>
          <input type="text" placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
          <textarea cols="30" rows="10" placeholder="Tuliskan catatanmu di sini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
