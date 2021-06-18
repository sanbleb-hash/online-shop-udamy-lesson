import React from 'react'

import SHOP_DATA from "../data/shopping.data";
import PreviewCollection from './PreviewCollection';



class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }  

    render() {
        const { collections } = this.state;
        return(
            <div>
                {
                    collections.map(({id, ...otherCollectionProps }) =>(
                        <PreviewCollection key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }

    }

export default ShopPage;
