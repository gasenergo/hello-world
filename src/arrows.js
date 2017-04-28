import Carousel from 'nuka-carousel';
import carouselArrows from './common/carouselArrows';

// Then I use them like this
<Carousel decorators={carouselArrows}></Carousel>
And my carouselArrows file looks like this:

import React from 'react';

export default [{
    component: class LeftArrow {
        render() {
            console.log('rendering arrow left');
            return (
                <div
                    style={this.styleArrow(this.props.currentSlide === 0)}
                    onClick={this.props.previousSlide}>
                    Previous Slide
                </div>
            );
        }
        shouldComponentUpdate() { return this.props.currentSlide === 0; }
        styleArrow(disabled) { return { opacity: disabled ? 0 : 1 }; }
    }
}, {
    component: class RightArrow {
        render() {
            console.log('rendering arrow right');
            return (
                <div
                    style={this.styleArrow(this.props.currentSlide === this.props.slideCount - 1)}
                    onClick={this.props.nextSlide}>
                    Next Slide
                </div>
            );
        }
        shouldComponentUpdate() { return this.props.currentSlide === this.props.slideCount - 1; }
        styleArrow(disabled) { return { opacity: disabled ? 0 : 1 }; }
    }
}];
