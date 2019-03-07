import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: '',
    };

    onChangeSearch = (evt) => {
        this.setState({
            term: evt.target.value
        });
    }

    onSubmitForm = (evt) => {
        evt.preventDefault();

        this.props.onSearch(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSubmitForm} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onChangeSearch}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
