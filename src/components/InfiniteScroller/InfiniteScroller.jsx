import React from 'react';
import PropTypes from 'prop-types';

export default class InfiniteScroller extends React.Component {
    updatedOn = 0
    constructor(props) {
        super(props);
        this.scrollHandler = this.scrollHandler.bind(this);
        this.getScrollRatio = this.getScrollRatio.bind(this);
        this.state = { loading: true }
    }
    componentDidMount() {
        this.attachScrollListener();
    }

    componentWillUnmount() {
        this.detachScrollListener();
    }
    attachScrollListener() {
        this.setState({ loading: false }, () => {
            if (this.props.scrollerId) {
                const elem = document.getElementById(this.props.scrollerId);
                if (elem !== null) {
                    elem.addEventListener('scroll', this.scrollHandler)

                }
            } else {
                window.addEventListener('scroll', this.scrollHandler);
            }

        });
    }
    detachScrollListener() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.loading && !prevState.loading) {
            this.props.onBottomReach();
            this.attachScrollListener();
        }
    }

    getScrollRatio(e) {

        let winScroll = 0;
        let height = 1;
        if (this.props.scrollerId) {
            winScroll = e.target.scrollTop + e.target.clientHeight;
            height = e.target.scrollHeight;
        } else if (document.documentElement) {
            winScroll = document.body.scrollTop || document.documentElement.scrollTop
            height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        }
        return winScroll / height
    }
    scrollHandler(e) {
        const now = new Date().getTime();
        if (this.props.hasMore && document.documentElement) {
            const scrolled = this.getScrollRatio(e);
            if (scrolled > .99 && (now - this.updatedOn > 3000)) {
                this.detachScrollListener();
                this.updatedOn = now;
                this.setState({ loading: true })
            }
        }
    }

    render() {
        return (
            this.props.children
        );
    }
}

InfiniteScroller.propTypes = {
    onBottomReach: PropTypes.func,
    hasMore: PropTypes.bool,
    scrollerId: PropTypes.string,
    name: PropTypes.string
}
