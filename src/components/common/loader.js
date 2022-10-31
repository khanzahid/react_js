import React from 'react';

export default function Loader(props){
    if(props.isLoading===true){
        return(
            <div class="spinner">
                <i class="fa fa-spinner fa-spin" aria-hidden="true"></i><span>Processing ...</span>
            </div>
        )
    }
}