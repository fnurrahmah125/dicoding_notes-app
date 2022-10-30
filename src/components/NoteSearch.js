import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const value = event.target.value;
    this.setState(() => {
      return {
        title: value,
      };
    });
    this.props.onSearchHandler(value);
  }

  render() {
    return (
      <div className="note-search ">
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input type="text" placeholder="Cari catatan..." value={this.state.title} onChange={this.onTitleChangeEventHandler} maxLength={50} />
      </div>
    );
  }
}

export default NoteSearch;
