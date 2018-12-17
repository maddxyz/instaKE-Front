import React, { Component } from 'react';

class Full_Img extends Component {
    render({match}) {
        //const { id } = this.props;
        const id = match.params.id;
        return (
            <div class="container insta-pics">
                <div class="row">
                    <p><img src={"/img/" + id} /></p>
                </div>
            </div>
        );
    }
}

export default Full_Img;
