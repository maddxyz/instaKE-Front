import React, { Component } from 'react';

const list = [
    {
        id: 1,
        title: 'The future is here',
        descr: 'The future is here and not there !',
    },
    {
        id: 2,
        title: 'A far better version of Instagram',
        descr: 'more quick, more secure and far better than instagram',
    },
    {
        id: 3,
        title: 'Why accept the less when you can get the more',
        descr: 'It s free !',
    }
];

class Carousel extends Component {
    render() {
        return (
            <div class="container insta-pics">
                <div class="row">
                    {
                        list.map(function(item) {
                            return (
                                <div class="col-lg-4">
                                    <img class="rounded-circle" src={"img/" + item.id + ".jpg"} alt="Generic placeholder image" width="140" height="140" />
                                    <h2>{item.title}</h2>
                                    <p>{item.descr}</p>
                                    <p><a class="btn btn-secondary" href={"/full_img/" + item.id} role="button">View details &raquo;</a></p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Carousel;
